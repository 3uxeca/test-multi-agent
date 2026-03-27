# API 스키마

## 1. 목적
이 문서는 김포국제공항(`GMP`)과 김해국제공항(`PUS`)의 출발 대기시간 안내 서비스를 위한 초기 프론트엔드 우선 읽기 API 계약을 정의한다.

목표는 프론트엔드가 공항 선택, 언어 전환, 메인 히어로, 보조 패널, 상태 화면을 안정적으로 렌더링할 수 있도록 응답 구조를 단순하고 일관되게 유지하는 것이다.
기본 응답 문구는 한국어 우선으로 작성하고, `locale`에 따라 영어 등 보조 언어로 자연스럽게 전환될 수 있어야 한다.

## 2. API 원칙
- 읽기 API를 우선한다.
- `GMP`와 `PUS`의 차이는 UI 분기가 아니라 데이터 차이로 처리한다.
- 로캘은 요청 입력값이며, 응답 문구가 로캘에 따라 달라질 수 있다.
- 모든 응답은 가능한 한 동일한 envelope를 사용한다.
- `loading`, `empty`, `error`, `stale`, `maintenance` 상태를 프론트엔드가 해석할 수 있어야 한다.
- 메인 화면은 적은 수의 엔드포인트만으로 구성할 수 있어야 한다.
- API는 레이아웃을 직접 지시하지 않더라도, 히어로용 핵심 데이터와 보조 패널용 선택 데이터를 구분해 제공해야 한다.
- 모든 시각 정보는 ISO 8601 기준의 UTC 문자열을 사용한다.

## 3. 공통 규칙

### 3.1 기본 경로
- `GET /api/v1/...`

### 3.2 공통 쿼리 파라미터
- `locale`: 표시 언어 로캘, 예시 `ko-KR`, `en-US`, `ja-JP`, `zh-CN`

### 3.3 공통 응답 envelope
모든 읽기 API는 아래 형태를 기본으로 한다.

```json
{
  "data": {},
  "meta": {
    "requestId": "req_123",
    "generatedAt": "2026-03-27T09:00:00Z"
  }
}
```

### 3.4 공통 오류 형태
```json
{
  "error": {
    "code": "airport_not_found",
    "message": "지원하지 않는 공항입니다.",
    "details": []
  },
  "meta": {
    "requestId": "req_123",
    "generatedAt": "2026-03-27T09:00:00Z"
  }
}
```

## 4. 공유 타입

### 4.1 공항 코드
- `GMP`
- `PUS`

### 4.2 운영 상태
- `normal`
- `busy`
- `disrupted`
- `maintenance`

### 4.3 데이터 상태
- `fresh`
- `stale`
- `unknown`

### 4.4 체크포인트 상태
- `open`
- `closed`
- `limited`
- `unknown`

### 4.5 공지 유형
- `information`
- `warning`
- `maintenance`

### 4.6 콘텐츠 노출 힌트
프론트엔드는 아래 힌트를 사용해 메인 히어로와 보조 패널의 우선순위를 해석할 수 있다.

```json
{
  "showCheckpointPanel": true,
  "showNoticePanel": true
}
```

### 4.7 상태 객체
프론트엔드가 운영 상태를 하나의 블록으로 렌더링할 수 있도록 공통 상태 객체를 사용한다.

```json
{
  "state": "busy",
  "label": "보통 혼잡",
  "description": "출발 처리 시간이 평소보다 길어지고 있습니다."
}
```

## 5. 상태 모델 계약
프론트엔드는 아래 상태를 UI 분기 없이 해석할 수 있어야 한다.

### 5.1 `loading`
- 데이터 로딩 중임을 구조를 유지한 스켈레톤으로 표시한다.
- 응답이 아직 없을 때는 데이터 대신 상태 화면을 렌더링한다.

### 5.2 `empty`
- 표시할 데이터가 없음을 의미한다.
- 가능한 경우 공항 전환 또는 재시도를 유도하는 문구를 노출할 수 있다.
- 공항 목록은 살아 있어야 하며, 사용자는 다른 공항이나 언어로 전환할 수 있어야 한다.
- 화면이 비어 있어도 공항 선택과 언어 전환은 유지 가능한 상태여야 한다.

### 5.3 `error`
- 요청 실패 또는 파싱 실패를 의미한다.
- 사용자에게 재시도 가능성을 보여줄 수 있어야 한다.
- 공항 전체 장애와 특정 데이터 실패를 구분할 수 있는 상태 메시지를 포함할 수 있다.

### 5.4 `stale`
- 데이터는 존재하지만 최신성이 떨어진다.
- 마지막 성공 값은 유지하고, 신뢰도 저하를 명확히 표시해야 한다.
- 오래된 시각과 현재 시각의 차이가 사용자에게 즉시 보이도록 `ageSeconds` 같은 값이 필요하다.
- 메인 숫자와 상태는 유지하고, 최신성 경고만 별도로 강화할 수 있어야 한다.

### 5.5 `maintenance`
- 서비스 또는 데이터 소스가 유지보수 중이다.
- 일반 콘텐츠 대신 유지보수 안내를 우선 렌더링할 수 있어야 한다.
- 유지보수 중에도 공항 선택과 언어 전환은 가능해야 하며, 메인 히어로는 상태 안내로 대체될 수 있다.
- 보조 패널은 숨기거나 축소할 수 있지만, 헤더 조작은 유지해야 한다.

## 6. 엔드포인트

### 6.1 공항 목록
`GET /api/v1/airports?locale={locale}`

공항 선택 UI를 구성하기 위한 목록을 반환한다.

#### 응답 예시
```json
{
  "data": {
    "airports": [
      {
        "code": "GMP",
        "name": "김포국제공항",
        "shortName": "GMP",
        "city": "서울",
        "country": "KR",
        "supportedLocales": ["ko-KR", "en-US"],
        "isDefault": true
      },
      {
        "code": "PUS",
        "name": "김해국제공항",
        "shortName": "PUS",
        "city": "부산",
        "country": "KR",
        "supportedLocales": ["ko-KR", "en-US"],
        "isDefault": false
      }
    ]
  },
  "meta": {
    "requestId": "req_123",
    "generatedAt": "2026-03-27T09:00:00Z"
  }
}
```

#### 필드 설명
- `name`은 `locale`에 따라 로컬라이즈될 수 있다.
- `supportedLocales`는 언어 전환 UI에서 허용 가능한 로캘을 판단하는 데 쓸 수 있다.
- `isDefault`는 최초 진입 시 기본 공항을 표시하는 용도다.

### 6.2 대기시간 요약
`GET /api/v1/airports/{airportCode}/wait-time-summary?locale={locale}`

메인 히어로와 상단 요약 패널을 구성하는 핵심 엔드포인트다.

#### 응답 예시
```json
{
  "data": {
    "airportCode": "GMP",
    "airportName": "김포국제공항",
    "summaryId": "summary_001",
    "status": {
      "state": "busy",
      "label": "보통 혼잡",
      "description": "출발 처리 시간이 평소보다 길어지고 있습니다."
    },
    "waitTimeMinutes": 18,
    "waitTimeLabel": "약 18분",
    "freshness": {
      "state": "fresh",
      "lastUpdatedAt": "2026-03-27T08:58:00Z",
      "ageSeconds": 120,
      "staleAfterSeconds": 300
    },
    "noticeSummary": {
      "hasNotices": true,
      "count": 1,
      "primaryNoticeId": "notice_001"
    },
    "checkpointSummary": {
      "hasCheckpoints": true,
      "count": 2
    },
    "checkpointsAvailable": true,
    "panelHints": {
      "showCheckpointPanel": true,
      "showNoticePanel": true
    }
  },
  "meta": {
    "requestId": "req_123",
    "generatedAt": "2026-03-27T09:00:00Z"
  }
}
```

#### 필드 설명
- `waitTimeMinutes`는 프론트엔드의 핵심 숫자다.
- `waitTimeLabel`은 선택적 표시 문구다. 프론트엔드가 직접 포맷할 수도 있으므로 필수는 아니다.
- `status`는 운영 상태, 라벨, 설명을 한 번에 제공한다.
- `freshness`는 최신성, 마지막 갱신 시각, 오래된 기준을 함께 제공한다.
- `noticeSummary`는 공지 유무를 가볍게 판단하기 위한 요약 필드다.
- `checkpointSummary`는 보조 패널이 있어야 하는지 판단하기 위한 최소한의 정보다.
- `checkpointsAvailable`는 체크포인트 패널을 노출할지 판단하는 신호다.
- `panelHints`는 히어로와 보조 패널의 기본 노출 여부를 프론트엔드가 쉽게 해석하도록 돕는다.
- `airportName`과 `status.label`은 한국어 기본 로캘에서 자연스러운 표현을 우선한다.
- `noticeSummary`와 `checkpointSummary`가 비어 있어도 메인 히어로는 정상적으로 렌더링되어야 한다.

### 6.3 체크포인트 목록
`GET /api/v1/airports/{airportCode}/checkpoints?locale={locale}`

보조 패널에 표시할 체크포인트 또는 터미널 정보를 반환한다.

#### 응답 예시
```json
{
  "data": {
    "airportCode": "GMP",
    "checkpoints": [
      {
        "id": "domestic",
        "name": "국내선 출발",
        "state": "open",
        "waitTimeMinutes": 12,
        "description": "일반적인 출발 검색 절차를 진행합니다."
      },
      {
        "id": "international",
        "name": "국제선 출발",
        "state": "limited",
        "waitTimeMinutes": 25,
        "description": "이용객이 많아 대기 시간이 길어질 수 있습니다."
      }
    ],
    "freshness": {
      "state": "fresh",
      "lastUpdatedAt": "2026-03-27T08:58:00Z",
      "ageSeconds": 120,
      "staleAfterSeconds": 300
    },
    "emptyState": {
      "isEmpty": false,
      "message": "표시할 체크포인트가 없습니다."
    }
  },
  "meta": {
    "requestId": "req_123",
    "generatedAt": "2026-03-27T09:00:00Z"
  }
}
```

#### 필드 설명
- `description`은 짧은 보조 문구다.
- `waitTimeMinutes`는 항공사가 세부 시간을 제공하는 경우에만 포함할 수 있다.
- `checkpoints`가 비어 있어도 응답은 유효해야 한다.
- `emptyState`는 보조 패널이 비어 있을 때 프론트엔드가 보여줄 수 있는 기본 문구를 담는다.
- `emptyState.isEmpty`가 `true`면 프론트엔드는 보조 패널 대신 빈 상태 안내를 렌더링할 수 있다.
- `emptyState.message`는 한국어 기본 문구를 우선으로 두고, `locale`에 따라 번역될 수 있다.

### 6.4 공지 목록
`GET /api/v1/airports/{airportCode}/notices?locale={locale}`

유지보수, 안내, 주의 메시지를 반환한다.

#### 응답 예시
```json
{
  "data": {
    "airportCode": "GMP",
    "notices": [
      {
        "id": "notice_001",
        "type": "maintenance",
        "severity": "info",
        "title": "정기 점검 안내",
        "message": "일부 데이터가 잠시 갱신 중입니다.",
        "effectiveFrom": "2026-03-27T08:45:00Z",
        "effectiveUntil": "2026-03-27T09:15:00Z",
        "status": {
          "state": "maintenance",
          "label": "유지보수",
          "description": "일부 안내 데이터가 잠시 제공되지 않을 수 있습니다."
        }
      }
    ],
    "emptyState": {
      "isEmpty": false,
      "message": "현재 공지가 없습니다."
    }
  },
  "meta": {
    "requestId": "req_123",
    "generatedAt": "2026-03-27T09:00:00Z"
  }
}
```

#### 필드 설명
- `type`은 공지의 성격을 나타낸다.
- `severity`는 화면 우선순위 판단을 위한 값이다.
- `status`는 공지가 유지보수성 안내와 연결될 때 사용할 수 있다.
- `emptyState`는 공지가 없을 때의 안정적인 렌더링을 돕는다.
- `notices`가 비어 있어도 메인 히어로는 정상적으로 유지되어야 한다.
- `emptyState.message`는 공지 패널의 기본 빈 상태 문구다.

### 6.5 상태 요약
`GET /api/v1/airports/{airportCode}/status?locale={locale}`

메인 요약과 별개로 운영 상태만 갱신하고 싶을 때 사용하는 축약형 엔드포인트다.

#### 응답 예시
```json
{
  "data": {
    "airportCode": "GMP",
    "status": {
      "state": "maintenance",
      "label": "유지보수",
      "description": "일부 안내 데이터가 잠시 제공되지 않을 수 있습니다."
    },
    "freshness": {
      "state": "fresh",
      "lastUpdatedAt": "2026-03-27T08:58:00Z",
      "ageSeconds": 120,
      "staleAfterSeconds": 300
    },
    "maintenance": {
      "isMaintenance": true,
      "message": "현재 유지보수 중입니다.",
      "fallbackAction": "잠시 후 다시 확인해 주세요."
    }
  },
  "meta": {
    "requestId": "req_123",
    "generatedAt": "2026-03-27T09:00:00Z"
  }
}
```

#### 필드 설명
- 이 엔드포인트는 선택 사항이지만 상태만 빠르게 갱신해야 할 때 유용하다.
- `maintenance`는 별도 유지보수 오버레이를 그릴 수 있게 해준다.
- 이 응답만으로도 프론트엔드는 유지보수 문구와 공항 전환/언어 전환 유지 여부를 판단할 수 있어야 한다.
- 프론트엔드는 이 엔드포인트가 없어도 `wait-time-summary`만으로 기본 화면을 구성할 수 있어야 한다.

## 7. 권장 프론트엔드 구성
초기 화면은 보통 아래 엔드포인트 조합으로 구성할 수 있다.

- `GET /api/v1/airports?locale={locale}`
- `GET /api/v1/airports/{airportCode}/wait-time-summary?locale={locale}`
- `GET /api/v1/airports/{airportCode}/checkpoints?locale={locale}`
- `GET /api/v1/airports/{airportCode}/notices?locale={locale}`
- `GET /api/v1/airports/{airportCode}/status?locale={locale}`는 상태만 독립 갱신할 때 사용한다.

`wait-time-summary`는 메인 히어로와 상단 요약을 구성하기에 충분한 정보를 제공해야 한다.  
`checkpoints`는 보조 패널이 있을 때만 사용해도 되며, 비어 있어도 화면은 정상 렌더링되어야 한다.  
`notices`는 별도 호출 또는 향후 최적화를 위한 결합 응답 양쪽 모두를 허용하는 방향으로 유지한다.
- `status`는 메인 상태와 별도 갱신이 필요한 경우에만 추가로 호출한다.
- `airports`는 언어 전환과 공항 전환을 동시에 안정적으로 지원할 수 있어야 한다.

## 8. 안정성 규칙
- 열거형 값은 버전 없이 변경하지 않는다.
- 파괴적 변경보다 추가 중심으로 확장한다.
- 공항 코드는 안정적인 식별자로 유지한다.
- UI 레이아웃 결정을 API 응답에 넣지 않는다.
- 다만 메인 히어로와 보조 패널에 필요한 콘텐츠 존재 여부는 API에서 판별 가능해야 한다.
- 필드가 없으면 `null` 또는 생략으로 표현하고, 스키마는 최대한 유지한다.
- `GMP`와 `PUS`는 같은 형태의 응답을 유지하되, 데이터 내용만 달라질 수 있다.

## 9. 열려 있는 질문
- 공지(`notices`)를 항상 요약 응답에 포함할지, 별도 호출로만 유지할지 확정이 필요하다.
- 체크포인트가 없는 공항의 경우 보조 패널을 어떤 문구로 대체할지 최종 결정이 필요하다.
- `waitTimeLabel`을 백엔드에서 로컬라이즈할지, 프론트엔드에서 포맷할지 결정이 필요하다.
