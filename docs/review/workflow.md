# Review Workflow

## 목적
GitHub PR에서 생성된 Codex 코드 리뷰를 기반으로,
로컬 멀티에이전트가 자동으로 수정 → 검증 → 재검토까지 이어지도록 한다.

---

## 전체 흐름

PR 생성  
→ Codex 리뷰  
→ 리뷰 코멘트 수집  
→ 수정 (Frontend / Backend / Docs)  
→ QA 검증  
→ push  
→ 재검토 (@codex review)  
→ 반복  

---

## Review Types

리뷰 코멘트는 다음 유형으로 분류한다:

### 1. Frontend
- UI 가독성
- 레이아웃 문제
- 스타일/테마
- 상태 표현 (empty/loading 등)

### 2. Backend
- API 구조 문제
- 응답 형식 불일치
- 데이터 모델 문제

### 3. Docs
- requirements/design/api 문서와 구현 불일치
- 설명 부족

### 4. QA
- 빌드 실패
- 타입 오류
- lint 오류
- 실행 불가

---

## Agent Responsibilities

### Review Triage Agent
- PR 리뷰 코멘트를 수집한다
- 유형별로 분류한다
- 우선순위를 지정한다 (P1 / P2 / P3)

### Frontend Fix Agent
- UI/UX 관련 문제를 수정한다
- docs/design/* 기준으로 정합성을 맞춘다

### Backend Fix Agent
- API 및 데이터 구조 문제를 수정한다
- docs/api/schema.md 기준으로 정합성을 맞춘다

### Docs Agent
- 코드 변경으로 인해 어긋난 문서를 수정한다

### QA Agent
- 수정 후 검증 수행
  - npm run lint
  - npm run build
  - npm run dev
  - 주요 UI 동작 확인

### Git Agent
- 변경사항 정리
- 커밋 단위 분리
- 커밋 메시지 작성
- 승인 후 commit / push

---

## Review Loop Rules

- QA 통과 전에는 push 금지
- 작은 수정은 자동 반영 가능
- 구조 변경은 사용자 승인 필요
- 모든 결과는 한국어로 작성

---

## Manual Review Request

자동 리뷰 외에도 필요 시:

    @codex review

    이전 리뷰 반영 후 재검토 부탁해.
    특히 아래를 다시 봐줘:
    - 라이트 모드 대비
    - GMP/PUS 차이 UI 반영
    - 체크포인트 empty 상태 처리
    - 문서와 구현 정합성

---

## When to Re-request Review

- UI 구조 변경
- 상태 처리 로직 변경
- API 계약 수정
- QA 결과 개선 후

---

## Output Expectations

1. 반영한 리뷰 항목  
2. 반영하지 않은 항목과 이유  
3. QA 결과 (성공/실패)  
4. 남은 리스크  
5. 추가 개선 제안