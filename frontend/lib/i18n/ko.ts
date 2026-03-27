import type { AppTranslations } from "@/lib/i18n/types";

export const ko = {
  metadataTitle: "GMP / PUS 출발 대기시간 안내",
  metadataDescription: "김포와 김해 국제공항의 출발 대기시간을 확인하는 반응형 안내 화면입니다.",
  page: {
    kicker: "출발 안내",
    title: "김포와 김해 출발 대기시간 대시보드",
    airportContextTitle: "공항 정보",
    airportContextBody: "공항별 라벨과 대기 정보는 데이터에 두어 공유 레이아웃을 유지합니다.",
    quickStatusTitle: "간단 상태",
    quickStatusBody: "지금은 정적 화면입니다. 이후 백엔드와 연결해도 UI 구조는 그대로 유지됩니다.",
    checkpointsTitle: "체크포인트",
    layoutNotesTitle: "레이아웃 참고",
    layoutNotes: [
      "모바일에서는 조작 요소가 히어로 카드 위에 쌓입니다.",
      "태블릿에서는 히어로를 가운데에 두고 보조 패널을 함께 보여줍니다.",
      "데스크톱에서는 히어로를 중심으로 한 2열 레이아웃을 사용합니다."
    ]
  },
  airportSwitcher: {
    ariaLabel: "공항 선택",
    gmpHint: "김포",
    pusHint: "김해"
  },
  languageSwitcher: {
    ariaLabel: "언어 선택",
    koLabel: "KO",
    enLabel: "EN"
  },
  themeToggle: {
    switchToLight: "라이트 모드로 전환",
    switchToDark: "다크 모드로 전환"
  },
  waitTimeCard: {
    waitLabel: "예상 대기시간",
    lastUpdatedLabel: "마지막 업데이트",
    operationalNoteLabel: "운영 참고"
  },
  airports: {
    GMP: {
      code: "GMP",
      name: "김포국제공항",
      terminalLabel: "국내선 및 단거리 출발",
      waitTime: "18분",
      waitLabel: "예상 대기시간",
      status: "원활",
      tone: "smooth",
      freshnessLabel: "방금 갱신됨",
      updatedAt: "2026-03-27T08:45:00+09:00",
      summary: "현재 흐름은 안정적입니다. 출퇴근 시간대에는 여유 시간을 조금 더 두는 것이 좋습니다.",
      note: "오전 시간에는 체크포인트 A가 B보다 조금 더 빠르게 움직입니다.",
      checkpoints: [
        { name: "체크포인트 A", wait: "12분", note: "현재 가장 빠른 동선입니다." },
        { name: "체크포인트 B", wait: "21분", note: "이용객이 많아 다소 느립니다." },
        { name: "특별 지원", wait: "5분", note: "대기 인원이 적습니다." }
      ]
    },
    PUS: {
      code: "PUS",
      name: "김해국제공항",
      terminalLabel: "국제선 출발 중심",
      waitTime: "27분",
      waitLabel: "예상 대기시간",
      status: "보통 혼잡",
      tone: "moderate",
      freshnessLabel: "4분 전 갱신",
      updatedAt: "2026-03-27T08:41:00+09:00",
      summary: "국제선 출발 수요가 보통 수준이며 주요 체크포인트는 안정적으로 운영되고 있습니다.",
      note: "보안검색 전 서류 확인에 여유 시간을 두는 것이 좋습니다.",
      checkpoints: [
        { name: "국제선 라인", wait: "24분", note: "출발 승객이 가장 많이 이용하는 동선입니다." },
        { name: "패스트 트랙", wait: "9분", note: "수용 인원은 적지만 현재 운영 중입니다." },
        { name: "가족 지원", wait: "15분", note: "짧은 시간대의 변동이 있습니다." }
      ]
    }
  }
} satisfies AppTranslations;
