# QA Workflow

## 목적
개발 에이전트가 만든 결과물이 실제로 동작 가능한지 검증한다.

---

## 기본 검증 순서

1. 의존성 확인
2. 타입 체크
3. 린트 검사
4. 빌드
5. 실행 가능 여부 확인
6. 핵심 사용자 흐름 확인

---

## Frontend Checks

- npm install
- npm run lint
- npm run build
- npm run dev 실행 가능 여부
- 주요 페이지 정상 렌더링
- 반응형 레이아웃 확인
- 다크/라이트 모드 동작 확인
- 언어 전환 기능 확인

---

## Backend Checks

- API schema 문서 검증
- 서버 실행 가능 여부
- health endpoint 확인
- 응답 구조 consistency 확인

---

## Error Handling

문제 발생 시:

1. 원인 분석
2. 수정 제안
3. 가능한 경우 자동 수정
4. 재검증

---

## 규칙

- QA 통과 전에는 Git 작업 금지
- 작은 문제는 자동 수정 가능
- 큰 구조 변경은 사용자 승인 필요
- 결과는 한국어로 요약

---

## Output Format

QA 에이전트는 다음을 보고한다:

1. 실행 결과 (성공/실패)
2. 발견된 문제
3. 수정 여부
4. 남은 리스크