const IMAGES = [
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg',
  'images/img4.jpg',
  'images/img5.jpg',
  'images/img6.jpg',
  'images/img7.jpg',
  'images/img8.jpg',
  'images/img9.jpg',
  'images/img10.jpg',
  'images/img11.jpg',
  'images/img12.jpg',
  'images/img13.jpg',
  'images/img14.jpg',
  'images/img15.jpg',
  'images/img16.jpg',
  'images/img17.jpg',
  'images/img18.jpg',
  'images/img19.jpg',
  'images/img20.jpg',
  'images/img21.jpg',
  'images/img22.jpg',
  'images/img23.jpg',
  'images/img24.jpg',
  'images/img25.jpg',
  'images/img26.jpg',
  'images/img27.jpg',
  'images/img28.jpg',
  'images/img29.jpg',
  'images/img30.jpg',
  'images/img31.jpg',
  'images/img32.jpg',
  'images/img33.jpg',
  'images/img34.jpg',
  'images/img35.jpg',
  'images/img36.jpg',
  'images/img37.jpg',
  'images/img38.jpg',
  'images/img39.jpg',
  'images/img40.jpg',
  'images/img41.jpg',
  'images/img42.jpg',
  'images/img43.jpg',
  'images/img44.jpg',
  'images/img45.jpg',
  'images/img46.jpg',
  'images/img47.jpg',
  'images/img48.jpg',
  'images/img49.jpg',
  'images/img50.jpg',
  'images/img51.jpg',
  'images/img52.jpg',
  'images/img53.jpg',
  'images/img54.jpg',
  'images/img56.jpg',
  'images/img57.jpg',
  'images/img58.jpg',
  'images/img59.jpg',
  'images/img60.jpg',
  'images/img61.jpg',
  'images/img62.jpg',
  'images/img63.jpg',
  'images/img64.jpg',
  'images/img65.jpg',
  'images/img66.jpg',
  'images/img67.jpg',
  'images/img68.jpg',
  'images/img69.jpg',
  'images/img70.jpg',
  'images/img71.jpg',
  'images/img72.jpg',
  'images/img73.jpg',
  'images/img74.jpg'
];

// ─── Hourly Report: 매시간 랜덤으로 뽑히는 인사이트 ──────────
const INSIGHTS = [
  {
    tag: "Tip",
    text: "Claude에게 역할을 먼저 부여하면 답변 품질이 확 올라간다. '당신은 10년 경력의 영상 감독입니다'처럼."
  },
  {
    tag: "Insight",
    text: "Sora, Kling, Wan — 지금 비주얼 AI 경쟁은 '얼마나 현실적이냐'에서 '얼마나 감독처럼 생각하냐'로 넘어가고 있다."
  },
  {
    tag: "Tip",
    text: "AI 이미지 프롬프트에 카메라 렌즈 정보를 넣어보자. '35mm, f1.8, golden hour' 만으로 분위기가 완전히 달라진다."
  },
  {
    tag: "Insight",
    text: "LLM의 진짜 경쟁력은 모델 성능보다 생태계. Claude의 MCP, OpenAI의 플러그인 — 누가 더 많은 툴을 연결하느냐가 승부처."
  },
  {
    tag: "Tip",
    text: "Midjourney에서 --style raw 파라미터를 쓰면 AI 특유의 과보정을 줄이고 훨씬 사진에 가까운 결과물이 나온다."
  },
  {
    tag: "Insight",
    text: "엔터테인먼트 업계에서 AI는 아직 '도구'지만, 1년 안에 '공동 제작자'로 크레딧에 오를 날이 온다."
  },
];

// ─── Weekly Letter 뉴스 데이터 ───────────────────────────────
// 매주 맨 위에 새 블록 추가
const NEWS = [
  {
    date: "2026-03-24",
    label: "Week 12",
    items: [
      {
        category: "LLM",
        title: "Claude Code Auto Mode 출시",
        body: "AI가 스스로 판단해서 허락 없이 실행하는 Auto Mode가 리서치 프리뷰로 공개. 에이전트 시대 본격화."
      },
      {
        category: "Visual AI",
        title: "Higgsfield 필름 대회 — 139개국 8,800편",
        body: "상금 50만 달러 규모. 우승작은 AI 영상이 스튜디오 예고편으로 착각받는 수준에 도달했음을 증명."
      },
      {
        category: "Visual AI",
        title: "Wan 2.2 vs LTX-2",
        body: "오픈소스 진영에서 Wan 2.2가 대부분 벤치마크 우세. LTX-2는 오디오-비디오 통합 모델로 별도 공개."
      }
    ]
  }
];
