# 멀티에이전트 오케스트레이션 작업 기록 (260327)

## 목적
- 김포/김해 공항 출발 대기시간 대시보드 프로젝트에서 진행한 멀티에이전트 작업 흐름을 한 문서에 남긴다.
- 기획, 디자인, 백엔드, 프론트엔드, QA, Git/PR, 리뷰 자동화까지 어떤 역할을 어떻게 나눠서 수행했는지 기록한다.
- GitHub PR 리뷰와 `codex-fix` 자동 수정 workflow를 검증하는 과정에서 확인된 운영 이슈도 정리한다.

## 오케스트레이션 구성

### 운영 방식
- 메인 오케스트레이터가 전체 흐름을 조율했다.
- 단계별로 필요한 역할을 가진 서브에이전트를 병렬 또는 순차로 호출했다.
- 각 에이전트는 자신의 책임 범위만 다루도록 분리했다.
- 문서, 프론트엔드, API, Git/PR, QA를 분리해 충돌을 줄였다.

### 기본 역할 분리
- Planner Agent: 요구사항, 사용자 흐름, MVP 범위, 공항별 차이 정리
- Design Agent: UI 가이드, 디자인 시스템, 와이어프레임, 컴포넌트 기준 수립
- Backend Agent: 프론트엔드가 바로 사용할 API 스키마 정의
- Frontend Agent: Next.js/Tailwind 기반 UI 구현 및 표현 개선
- QA Agent: lint/build/dev 및 주요 동작 검증
- Git Agent: 브랜치, 커밋, PR 전략 정리
- PR Agent: PR 생성 및 리뷰 요청 흐름 연결
- Review Loop Agent: GitHub PR 리뷰 코멘트 반영

## 단계별 작업 기록

### 1. 초기 기획/디자인 문서화

#### 호출한 서브에이전트
- Planner Agent `/agent Singer`
- Design Agent `/agent Laplace`

#### 수행 내용
- `docs/product/requirements.md` 작성
- `docs/design/ui-guidelines.md` 작성
- `docs/design/design-system.md` 작성
- `docs/design/wireframes.md` 작성
- `docs/design/components.md` 작성

#### 주요 정리 항목
- GMP/PUS 공항 차이와 공통 레이아웃 원칙
- 사용자 흐름과 MVP 범위
- 한국어 기본 UI 방향
- 반응형 레이아웃 원칙
- 다크/라이트 모드 대응
- loading/empty/error/stale/maintenance 상태 명시

### 2. 초기 프론트엔드/백엔드 계약 정리

#### 호출한 서브에이전트
- Frontend Agent `/agent Ampere`
- Backend Agent `/agent Averroes`

#### 수행 내용
- `frontend/` 디렉터리 스캐폴딩
- Next.js App Router + Tailwind 기반 초기 화면 구성
- 공항 전환, 대기시간 카드, 상위 레이아웃 구현
- `docs/api/schema.md` 작성

#### 기술 기준
- `next@14.2.4`
- `react@18.2.0`
- `react-dom@18.2.0`

#### 초기 API 정리 항목
- 공항 목록
- 대기시간 요약
- 체크포인트 목록
- 공지/상태 응답 구조

### 3. 런타임/구성 이슈 수정

#### 수행 내용
- Next.js 14.2.4에서 `next.config.ts`를 지원하지 않는 문제 수정
- `frontend/next.config.mjs`로 전환
- App Router 필수 오류 경계 보강

#### 주요 파일
- `frontend/next.config.mjs`
- `frontend/app/error.tsx`
- `frontend/app/global-error.tsx`
- `frontend/app/not-found.tsx`

### 4. i18n 및 한국어 기본화

#### 호출한 서브에이전트
- Frontend i18n Agent `/agent Mill`

#### 수행 내용
- 모든 하드코딩 UI 문구를 번역 구조로 분리
- 간단한 자체 i18n 시스템 구현
- `ko`, `en` 번역 파일 추가
- 기본 로캘을 한국어로 설정
- UI 문구를 번역 키 기반으로 변경

#### 주요 파일
- `frontend/lib/i18n/index.ts`
- `frontend/lib/i18n/types.ts`
- `frontend/lib/i18n/ko.ts`
- `frontend/lib/i18n/en.ts`
- `frontend/app/layout.tsx`
- `frontend/app/page.tsx`
- `frontend/components/*`

### 5. 한국어 가독성/위계/UI 정제

#### 호출한 서브에이전트
- Frontend UI Refinement Agent `/agent Carver`

#### 수행 내용
- 한국어 자간 완화
- 제목, 공항명, 대기시간 숫자, 상태 배지, 체크포인트 카드 위계 강화
- 히어로 우선 레이아웃 강화
- `KO/EN` 및 테마 토글 개선

#### 후속 반영
- 한국어 우선 폰트 스택 보강
- 헤더와 히어로 위계 조정
- 상태 배지 표현 보정

### 6. 요구사항/API/디자인/프론트엔드 재정렬

#### 호출한 서브에이전트
- 기획 `/agent Kant`
- 디자인 `/agent McClintock`
- 백엔드 `/agent Kuhn`
- 프론트엔드 `/agent Jason`
- Git 관리 `/agent Curie`

#### 수행 내용
- `requirements.md`, `docs/design/*`, `schema.md` 재검토 및 보강
- GMP/PUS 차이를 데이터/문구 중심으로 정리
- 한국어 가독성 및 히어로 우선 구조 정렬
- Git 전략 초안 작성

### 7. QA 검증과 실행 가능 상태 확보

#### 수행 내용
- `npm run lint`
- `npm run build`
- `npm run dev`
- `HEAD / 200` 응답 확인

#### 확인된 이슈와 수정
- `missing required error components` 문제 수정
- Next.js `dev`와 `build`를 동시에 돌릴 때 `.next` 산출물이 꼬이는 현상 확인
- QA 종료 시 `dev` 서버 종료 및 포트 확인 규칙 추가

#### 문서 반영
- `docs/qa/workflow.md`에 아래 원칙 추가
- QA 에이전트가 직접 띄운 `dev` 서버는 검증 후 종료
- QA 종료 시 `3000/3001` 등 사용 포트 확인
- `build`와 `dev`를 동시에 장시간 유지하지 않음
- 최종 보고에 서버 종료 여부 명시

### 8. PR #1 리뷰 루프

#### PR
- PR #1: 요구사항/API/UI 정렬 및 QA 통과 관련 변경

#### 받은 주요 리뷰
- 메인 상태 모델 분기 부족
- 체크포인트 empty 상태 누락
- 라이트 모드 상태 배지 대비 부족
- 로캘 초기화 방식으로 인한 hydration mismatch 가능성

#### 반영 내용
- `loading/empty/error/stale/maintenance` 상태 분기 추가
- 체크포인트 empty 상태 카드 추가
- 상태 배지 색상 토큰을 테마별 CSS 변수로 조정
- 로캘은 기본 `ko`로 시작하고 마운트 후 localStorage 반영

#### 관련 커밋
- `743e4ef` `fix: 리뷰 반영 상태 처리와 배지 대비 개선`
- `4f2b1cb` `fix: 로캘 초기화 안정화와 리뷰 워크플로우 반영`

### 9. 플로팅 토글과 초기 테마 렌더 안정화

#### 호출한 서브에이전트
- Design Agent `/agent Pascal`
- Frontend Agent `/agent Rawls`

#### 디자인 역할
- 헤더 우측 상단의 언어/테마 토글을 하단 플로팅 보조 조작으로 옮기는 방향 정리
- 모바일/태블릿/데스크톱 배치 규칙 문서화

#### 프론트엔드 역할
- 헤더에서는 공항 선택만 남기고 언어/테마 토글을 하단 플로팅 그룹으로 이동
- 모바일은 하단 중앙, `sm` 이상은 하단 우측 배치
- 초기 렌더링 시 라이트/다크 모드가 뒤늦게 바뀌는 현상 수정

#### 테마 문제 원인과 해결
- 원인: 초기 HTML 렌더 후 `useEffect`에서 `localStorage`/시스템 테마를 읽으며 `data-theme`가 늦게 바뀜
- 해결: `frontend/app/layout.tsx`에서 hydration 전에 `documentElement.dataset.theme`와 `colorScheme`를 먼저 설정
- 추가 대응: 토글 UI는 마운트 후 렌더링해 초기 잘못된 상태 노출을 줄임

#### 관련 커밋
- `54bd4ea` `feat: 플로팅 토글과 테마 초기화 안정화`

#### 관련 PR
- PR #2: `플로팅 토글 전환과 초기 테마 렌더 안정화`

### 10. Git/PR 운영

#### 수행 내용
- 브랜치 전략 수립
- 커밋 단위 분리
- 한국어 PR 제목/본문 작성
- PR 생성 및 리뷰 요청

#### 생성/사용 브랜치 예시
- `feature-gmp-pus-dashboard-refine`
- `Feature/codex-fix-loop-test`
- `fix/codex-fix-workflow-debug`

#### 생성한 주요 PR
- PR #1: 요구사항/API/UI 정렬 및 QA 통과
- PR #2: 플로팅 토글 전환과 초기 테마 렌더 안정화
- PR #3: `codex-fix` 댓글 트리거 디버그 보강

## 코드리뷰 및 Codex 자동화

### GitHub PR 리뷰 경로
- GitHub의 `chatgpt-codex-connector[bot]`가 PR 리뷰 코멘트를 생성
- 이 경로는 저장소에 연결된 GitHub App/서비스 기반으로 동작하는 것으로 확인됨
- 일반 `@codex review` 코멘트로 재검토를 요청하는 흐름을 사용함

### `codex-fix` workflow 경로
- 별도의 GitHub Actions workflow `.github/workflows/codex-fix-from-pr-comment.yml`를 사용
- PR Conversation 코멘트에 `/codex-fix`를 달면 `issue_comment` 이벤트로 트리거
- workflow 내부에서 `openai/codex-action@v1`를 실행해 PR 리뷰/댓글을 읽고 자동 수정 시도

### workflow 보강 내용
- `issue_comment.created` 외에 `edited`도 지원
- `workflow_dispatch` 추가
- 트리거 확인 코멘트 추가
- 실패 시 PR 코멘트로 실패 사실을 남기도록 추가
- 수동 실행 시 `pr_number` 입력으로 PR 컨텍스트를 복원하도록 추가

#### 관련 커밋
- `d1c3149` `fix: codex-fix 워크플로우 디버그 보강`
- `5ab2391` `fix: codex-fix 워크플로우 디버그 보강`
- `9602506` `fix: workflow_dispatch 수동 실행 경로 보완`

#### 관련 PR
- PR #3: `codex-fix 댓글 트리거 디버그 보강`

## OpenAI API / 크레딧 이슈 기록

### 확인된 현상
- `/codex-fix` 댓글 자체는 정상적으로 트리거되었다.
- PR 정보 수집, 코멘트 수집, checkout 등 workflow 전반의 초기 단계도 정상적으로 통과했다.
- 실패 지점은 `Run Codex fix` 단계였다.

### 실제 오류
- `openai/codex-action@v1` 실행 중 아래 오류 발생
- `Quota exceeded. Check your plan and billing details.`

### 의미
- workflow/YAML 트리거 문제는 해소되었다.
- 남은 병목은 `OPENAI_API_KEY`가 연결된 OpenAI 계정의 quota/billing 상태다.
- 즉, GitHub PR 리뷰와는 별개로, `codex-fix` workflow는 OpenAI API 사용량과 결제 상태에 직접 영향을 받는다.

### 현재 판단
- GitHub의 PR 리뷰 코멘트 생성 경로와
- GitHub Actions의 `codex-fix` 자동 수정 경로는 분리해서 봐야 한다.

정리:
- PR 리뷰 봇: GitHub App/서비스 경로
- `codex-fix`: OpenAI API 키와 quota에 직접 의존

## 현재 산출물 요약

### 문서
- `docs/product/requirements.md`
- `docs/design/ui-guidelines.md`
- `docs/design/design-system.md`
- `docs/design/wireframes.md`
- `docs/design/components.md`
- `docs/api/schema.md`
- `docs/git/workflow.md`
- `docs/pr/workflow.md`
- `docs/qa/workflow.md`
- `docs/review/workflow.md`

### 프론트엔드
- Next.js App Router 기반 초기 대시보드
- 한국어 기본 i18n 구조
- 상태 분기 처리
- 체크포인트 empty 상태 처리
- 하단 플로팅 언어/테마 토글
- 초기 테마 렌더 안정화

## 남은 과제
- OpenAI quota/billing 복구 후 `codex-fix` workflow 재실행
- PR #2 기준 자동 수정 루프 재검증
- 실데이터 API 연동 시 상태 분기와 문구 밀도 재검증
- 작은 뷰포트/실기기에서 하단 플로팅 그룹 안전 영역 점검

## 참고
- 이 문서는 멀티에이전트 오케스트레이션 과정과 운영 이슈를 회고/운영 목적에 맞게 정리한 기록이다.
- 이후 유사한 workflow를 만들 때는 기본 브랜치 반영 시점, `workflow_dispatch` 경로, OpenAI quota 상태를 먼저 확인하는 것이 좋다.
