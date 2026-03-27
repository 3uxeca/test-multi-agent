# Git Workflow

## 목적
개발 에이전트가 생성한 변경사항을 일관된 방식으로 정리하고 관리한다.

---

## Branch Naming

- feature/{기능명}
- fix/{버그명}
- refactor/{리팩토링명}
- chore/{기타 작업}

### 예시
- feature/ui-refinement
- feature/i18n-support
- fix/header-layout-bug

---

## Commit Rules

- 커밋 메시지는 한글로 작성한다
- prefix를 사용한다

### Prefix

- feat: 기능 추가
- fix: 버그 수정
- refactor: 구조 개선
- style: UI/스타일 변경
- docs: 문서 수정
- chore: 설정/기타

### 예시

- feat: 공항 선택 UI 추가
- style: 대기시간 카드 가독성 개선
- fix: 다크모드 색상 오류 수정

---

## Commit Strategy

- 기능 단위로 커밋한다
- 너무 큰 변경은 여러 커밋으로 나눈다
- 불필요한 파일은 포함하지 않는다
- 빌드/실행이 깨지는 상태로 커밋하지 않는다

---

## Pull Request Rules

PR에는 반드시 포함:

### 1. 목적
- 무엇을 위해 작업한 내용인지

### 2. 변경 내용
- 무엇이 변경되었는지

### 3. 변경 이유
- 왜 변경했는지

### 4. 확인 포인트
- 리뷰 시 확인해야 할 사항

---

## Agent Rules

Git 관리 에이전트는:

1. 변경사항을 먼저 분석한다
2. 커밋 단위를 제안한다
3. 커밋 메시지를 작성한다
4. PR 초안을 작성한다

### 중요 규칙
- QA 검증이 완료된 후에만 Git 작업을 진행한다
- commit/push는 사용자 승인 후 수행한다
- 위험한 작업은 사전에 설명하고 승인받는다