/**
 * 재단법인 청구중고등학교 장학재단 웹사이트 데이터 정의
 */

const FOUNDATION_DATA = {
  info: {
    name: "재단법인 청구중고등학교 장학재단",
    englishName: "Cheonggu Middle & High School Scholarship Foundation",
    foundingDate: "1982년 10월 15일",
    registrationNo: "504-82-04921",
    competentAuthority: "대구광역시교육청 (공익법인의 설립·운영에 관한 법률 제4조)",
    address: "대구광역시 수성구 달구벌대로 2519 (청구고등학교 내 장학재단 사무국)",
    phone: "053-740-0000",
    fax: "053-740-0009",
    email: "scholarship@cheonggu.or.kr",
    bankAccount: {
      bank: "대구은행",
      number: "505-10-123456-7",
      holder: "재단법인 청구중고등학교 장학재단"
    },
    motto: "청구의 빛나는 역사 위에 청년의 웅지와 미래를 세운다"
  },

  // 주요 재단 통계
  stats: {
    accumulatedScholarship: 3850000000, // 누적 장학금 38.5억원
    beneficiaryStudents: 4820,         // 수혜 학생 4,820명
    endowmentFund: 5200000000,          // 기본재산 52억원
    foundingYear: 1982
  },

  // 이사진 소개
  boardMembers: [
    {
      role: "이사장",
      name: "김 청 구",
      photo: "images/chairman_official.jpg",
      term: "2024.03 ~ 2028.02",
      career: "청구고등학교 제18회 졸업 / 前 대한상공회의소 부회장 / ㈜청구글로벌 회장",
      message: "미래를 이끌어갈 청구의 인재들이 경제적 어려움 없이 학업과 꿈에 매진할 수 있도록 든든한 디딤돌이 되겠습니다."
    },
    {
      role: "상임이사",
      name: "박 재 성",
      term: "2023.03 ~ 2027.02",
      career: "청구고등학교 제24회 졸업 / 前 경북대학교 경영대학 초빙교수 / 공인회계사"
    },
    {
      role: "이사",
      name: "이 정 민",
      term: "2024.03 ~ 2028.02",
      career: "청구고등학교 제22회 졸업 / 법무법인 율정 대표변호사"
    },
    {
      role: "이사",
      name: "최 동 훈",
      term: "2023.03 ~ 2027.02",
      career: "청구중·고등학교 총동창회 수석부회장 / ㈜한국신소재 대표이사"
    },
    {
      role: "이사",
      name: "한 성 준",
      term: "2024.03 ~ 2028.02",
      career: "청구고등학교 제27회 졸업 / 대구지역 의료원 원장"
    },
    {
      role: "이사 (당연직)",
      name: "정 호 진",
      term: "재임 기간 중",
      career: "현 청구고등학교 교장"
    },
    {
      role: "감사 (회계)",
      name: "윤 승 기",
      term: "2024.03 ~ 2026.02",
      career: "공인회계사 윤승기사무소 대표 / 세무회계 전문가"
    },
    {
      role: "감사 (법률)",
      name: "강 민 석",
      term: "2024.03 ~ 2026.02",
      career: "법무법인 대경 파트너 변호사"
    }
  ],

  // 정관 (Articles of Incorporation)
  articlesOfIncorporation: [
    {
      chapter: "제1장 총칙",
      articles: [
        {
          no: "제1조 (명칭)",
          content: "본 재단은 '재단법인 청구중고등학교 장학재단'(이하 '법인'이라 한다)이라 칭하며, 영문으로는 'Cheonggu Middle & High School Scholarship Foundation'이라 칭한다."
        },
        {
          no: "제2조 (목적)",
          content: "본 법인은 「공익법인의 설립·운영에 관한 법률」의 규정에 따라, 청구중학교 및 청구고등학교 재학생과 졸업생 중 학업성적이 우수하거나 품행이 바른 학생, 예·체능 특기자 및 경제적 지원이 필요한 유능한 인재를 발굴·육성하여 국가와 사회에 이바지할 유능한 인재를 양성함을 목적으로 한다."
        },
        {
          no: "제3조 (사무소의 소재지)",
          content: "본 법인의 주사무소는 대구광역시 수성구 달구벌대로 2519 (청구고등학교 내)에 둔다."
        },
        {
          no: "제4조 (사업)",
          content: "본 법인은 제2조의 목적을 달성하기 위하여 다음 각 호의 사업을 수행한다.<br>1. 청구중·고등학교 재학생에 대한 장학금 지급<br>2. 본교 졸업생 중 국내외 대학(원) 진학자에 대한 학업 장려금 지급<br>3. 예·체능 및 과학·학술 특기 학생에 대한 특별 장학금 및 육성 지원<br>4. 교육환경 개선 및 학생 복지 증진 지원 사업<br>5. 기타 본 법인의 목적 달성에 필요한 부대사업"
        }
      ]
    },
    {
      chapter: "제2장 재산 및 회계",
      articles: [
        {
          no: "제5조 (재산의 구분)",
          content: "본 법인의 재산은 기본재산과 보통재산으로 구분하여 관리한다. 기본재산은 법인의 설립 시 출연한 재산과 이사회에서 기본재산으로 정한 재산으로 하며, 그 목록은 정관 별표와 같다."
        },
        {
          no: "제6조 (재산의 처분 및 취득)",
          content: "본 법인의 기본재산을 매도, 증여, 임대, 교환 또는 담보로 제공하거나 의무의 부담 및 권리의 포기를 하고자 할 때에는 이사회의 의결을 거쳐 주무관청의 허가를 받아야 한다."
        },
        {
          no: "제7조 (회계연도 및 공시)",
          content: "본 법인의 회계연도는 정부의 회계연도에 따른다. 당해 연도의 사업실적 및 결산서는 회계연도 종료 후 3개월 이내에 감사의 감사를 거쳐 이사회의 승인을 얻은 후 주무관청에 보고하며, 관련 법령에 따라 웹사이트 및 국세청 홈택스에 투명하게 공시한다."
        }
      ]
    },
    {
      chapter: "제3장 임원",
      articles: [
        {
          no: "제8조 (임원의 정수)",
          content: "본 법인은 다음 각 호의 임원을 둔다.<br>1. 이사 7인 이상 11인 이내 (이사장 1인, 상임이사 1인 포함)<br>2. 감사 2인"
        },
        {
          no: "제9조 (임원의 임기)",
          content: "이사의 임기는 4년, 감사의 임기는 2년으로 하되 연임할 수 있다. 단, 보선된 임원의 임기는 전임자의 잔여기간으로 한다."
        },
        {
          no: "제10조 (임원의 선임 및 해임)",
          content: "임원은 이사회에서 선출하여 주무관청의 승인을 받아 취임한다. 결원이 생긴 때에는 2개월 이내에 보선하여야 한다."
        }
      ]
    },
    {
      chapter: "제4장 이사회",
      articles: [
        {
          no: "제11조 (이사회의 기능)",
          content: "이사회는 본 법인의 최고 의결기관으로서 다음 사항을 심의·의결한다.<br>1. 법인의 예산, 결산, 차입금 및 재산의 취득·처분과 관리에 관한 사항<br>2. 정관의 변경에 관한 사항<br>3. 법인의 해산에 관한 사항<br>4. 임원의 선출 및 해임에 관한 사항<br>5. 장학생 선발 기준 및 장학금 지급 규정에 관한 사항<br>6. 기타 법령이나 정관에 의하여 이사회의 권한에 속하는 사항"
        }
      ]
    }
  ],

  // 연혁
  history: [
    { year: "2025", text: "누적 장학생 4,800명 돌파 및 청구 글로벌 미래인재 장학금 신설" },
    { year: "2024", text: "제14대 김청구 이사장 취임 및 기본재산 50억원 확충" },
    { year: "2020", text: "온라인 장학시스템 개편 및 동문 1인 1구좌 소액 정기후원 활성화" },
    { year: "2015", text: "장학기금 30억원 달성 및 청구 드림 동행 복지장학 신설" },
    { year: "2002", text: "장학재단 창립 20주년 기념 장학생 동문 멘토링 프로그램 발족" },
    { year: "1995", text: "특기적성 및 예체능 우수 학생 지원 사업으로 장학 범위 확대" },
    { year: "1982", text: "재단법인 청구중고등학교 장학재단 설립 인가 (초대 이사장 취임)" }
  ],

  // 장학사업 종류
  scholarships: [
    {
      id: "academic",
      title: "청구 인재 육성 장학금",
      target: "학업 성적이 우수하고 학교생활에 모범이 되는 재학생",
      benefit: "분기별 150만 원 (연간 600만 원 및 교재비 지원)",
      desc: "지적 호기심과 탁월한 학문적 탐구 역량을 갖춘 청구의 우수 인재를 발굴하여 차세대 리더로 양성합니다."
    },
    {
      id: "talent",
      title: "특기 적성 우수 장학금",
      target: "과학, 문학, 예·체능 등 특기 분야에서 전국 단위 입상 실적이 있는 학생",
      benefit: "연간 200만 ~ 400만 원 및 훈련/연구비 차등 지원",
      desc: "다양한 분야에서 남다른 잠재력과 재능을 발휘하는 학생들의 재능 계발과 꿈의 실현을 응원합니다."
    },
    {
      id: "welfare",
      title: "청구 드림 동행 장학금",
      target: "가정 형편이 곤란하여 학업 유지가 어려운 재학생 및 복지 사각지대 학생",
      benefit: "수업료 전액 및 매월 생활안정 학습보조비 30만 원",
      desc: "환경에 굴하지 않고 묵묵히 정진하는 청구인들이 경제적 사유로 꿈을 포기하지 않도록 따뜻하게 동행합니다."
    },
    {
      id: "alumni",
      title: "대학 진학 비전 장학금",
      target: "본교 졸업예정자 중 국내외 우수 대학에 진학하여 학문 발전에 기여할 학생",
      benefit: "입학축하금 및 첫 학기 등록금 (최대 500만 원)",
      desc: "청구의 품을 떠나 더 넓은 세상으로 도약하는 청구인들의 숭고한 시작을 격려합니다."
    }
  ],

  // 기부 내역 (Donation Records)
  donations: [
    { id: 1, date: "2026-03-02", donor: "청구고 제21회 동기회", category: "동문 단체", amount: 15000000, purpose: "모교 개교기념 장학기금", status: "완료" },
    { id: 2, date: "2026-02-24", donor: "김청구 (18회)", category: "개인 동문", amount: 20000000, purpose: "인재육성 특별기금", status: "완료" },
    { id: 3, date: "2026-02-18", donor: "㈜청구엔지니어링", category: "기업 후원", amount: 10000000, purpose: "이공계 특기장학", status: "완료" },
    { id: 4, date: "2026-02-05", donor: "박재성 (24회)", category: "개인 동문", amount: 5000000, purpose: "드림동행 장학금", status: "완료" },
    { id: 5, date: "2026-01-20", donor: "익명 후원자 (청구 동문)", category: "개인 동문", amount: 3000000, purpose: "학습기자재 및 도서지원", status: "완료" },
    { id: 6, date: "2026-01-15", donor: "청구중·고 총동창회 골프회", category: "동문 모임", amount: 6500000, purpose: "체육특기생 육성기금", status: "완료" },
    { id: 7, date: "2025-12-28", donor: "이정민 (22회)", category: "개인 동문", amount: 5000000, purpose: "법·사회과학 인재장학", status: "완료" },
    { id: 8, date: "2025-12-20", donor: "대구 청구장학회 후원모임", category: "후원회", amount: 12000000, purpose: "2026년 정기장학금", status: "완료" },
    { id: 9, date: "2025-11-14", donor: "정문식 (15회 원로동문)", category: "개인 동문", amount: 30000000, purpose: "기본재산 전입 출연", status: "완료" },
    { id: 10, date: "2025-10-15", donor: "청구고 제30회 졸업 30주년", category: "동문 단체", amount: 25000000, purpose: "졸업 30주년 기념 모교 장학금", status: "완료" },
    { id: 11, date: "2025-09-08", donor: "최동훈 (25회)", category: "개인 동문", amount: 5000000, purpose: "특기장학금", status: "완료" },
    { id: 12, date: "2025-08-17", donor: "청구 축구후원동문회", category: "동문 단체", amount: 8000000, purpose: "축구부 체육장학금", status: "완료" },
    { id: 13, date: "2025-07-02", donor: "한성준 (27회)", category: "개인 동문", amount: 3000000, purpose: "의약학 비전장학", status: "완료" },
    { id: 14, date: "2025-06-11", donor: "㈜대경정밀", category: "기업 후원", amount: 10000000, purpose: "기술인재 장학금", status: "완료" },
    { id: 15, date: "2025-05-05", donor: "청구 사랑 동문 장학회", category: "동문 모임", amount: 4500000, purpose: "소년소녀가장 드림장학", status: "완료" }
  ],

  // 명예의 전당 (구간별 후원자)
  hallOfFame: [
    {
      tier: "청구 아너스 클럽 (1억 원 이상)",
      donors: ["정문식 (15회)", "김청구 (18회)", "㈜청구글로벌", "청구고 제18회 동기회 일동"]
    },
    {
      tier: "청구 비전 클럽 (5천만 원 이상)",
      donors: ["이원탁 (16회)", "박재성 (24회)", "㈜청구엔지니어링", "청구고 제21회 동기회", "청구고 제30회 졸업 30주년 추진위"]
    },
    {
      tier: "청구 드림 클럽 (1천만 원 이상)",
      donors: ["최동훈 (25회)", "이정민 (22회)", "한성준 (27회)", "윤승기 회계법인", "㈜대경정밀", "청구 축구후원회", "강민석 변호사", "익명 후원자 4인"]
    }
  ],

  // 결산서 공시 (Financial Statements & Disclosure)
  financialReports: [
    {
      year: "2025",
      title: "2025회계연도 세입·세출 결산서 및 감사보고서",
      date: "2026-02-28",
      totalIncome: 412500000,
      totalExpense: 398200000,
      scholarshipPaid: 245000000,
      studentsCount: 168,
      auditorOpinion: "적정 (회계감사기준에 따라 적정하게 표시됨)",
      auditors: "공인회계사 윤승기, 변호사 강민석",
      balanceSheet: {
        totalAssets: 5241000000,
        basicAssets: 5000000000,
        ordinaryAssets: 241000000,
        totalLiabilities: 12500000,
        netAssets: 5228500000
      },
      incomeStatement: {
        donationsIncome: 185000000,
        interestIncome: 198000000,
        otherIncome: 29500000,
        scholarshipExpense: 245000000,
        programExpense: 88200000,
        operationExpense: 65000000
      }
    },
    {
      year: "2024",
      title: "2024회계연도 세입·세출 결산서 및 감사보고서",
      date: "2025-02-27",
      totalIncome: 389000000,
      totalExpense: 374500000,
      scholarshipPaid: 230000000,
      studentsCount: 154,
      auditorOpinion: "적정 (적법하고 정확하게 결산됨)",
      auditors: "공인회계사 윤승기, 변호사 강민석",
      balanceSheet: {
        totalAssets: 5128000000,
        basicAssets: 4800000000,
        ordinaryAssets: 328000000,
        totalLiabilities: 11000000,
        netAssets: 5117000000
      },
      incomeStatement: {
        donationsIncome: 162000000,
        interestIncome: 195000000,
        otherIncome: 32000000,
        scholarshipExpense: 230000000,
        programExpense: 81500000,
        operationExpense: 63000000
      }
    },
    {
      year: "2023",
      title: "2023회계연도 세입·세출 결산서 및 감사보고서",
      date: "2024-02-28",
      totalIncome: 365200000,
      totalExpense: 352000000,
      scholarshipPaid: 215000000,
      studentsCount: 142,
      auditorOpinion: "적정 (회계처리 준칙 준수)",
      auditors: "공인회계사 윤승기, 변호사 강민석",
      balanceSheet: {
        totalAssets: 4985000000,
        basicAssets: 4700000000,
        ordinaryAssets: 285000000,
        totalLiabilities: 9500000,
        netAssets: 4975500000
      },
      incomeStatement: {
        donationsIncome: 148000000,
        interestIncome: 188000000,
        otherIncome: 29200000,
        scholarshipExpense: 215000000,
        programExpense: 77000000,
        operationExpense: 60000000
      }
    },
    {
      year: "2022",
      title: "2022회계연도 세입·세출 결산서 및 감사보고서",
      date: "2023-02-25",
      totalIncome: 341000000,
      totalExpense: 335000000,
      scholarshipPaid: 205000000,
      studentsCount: 135,
      auditorOpinion: "적정",
      auditors: "공인회계사 윤승기, 변호사 강민석",
      balanceSheet: {
        totalAssets: 4850000000,
        basicAssets: 4600000000,
        ordinaryAssets: 250000000,
        totalLiabilities: 8000000,
        netAssets: 4842000000
      },
      incomeStatement: {
        donationsIncome: 135000000,
        interestIncome: 178000000,
        otherIncome: 28000000,
        scholarshipExpense: 205000000,
        programExpense: 73000000,
        operationExpense: 57000000
      }
    }
  ],

  // 공지사항
  notices: [
    {
      id: 1,
      tag: "선발공고",
      title: "2026학년도 1학기 청구 인재육성 및 드림동행 장학생 선발 공고",
      date: "2026-03-03",
      views: 428,
      author: "장학재단 사무국",
      content: `2026학년도 1학기 재단법인 청구중고등학교 장학재단 장학생 선발을 다음과 같이 공고합니다.

1. 선발 분야 및 인원
 - 청구 인재육성 장학생: 고등학교 30명, 중학교 20명
 - 청구 드림동행(생활복지) 장학생: 고등학교 25명, 중학교 15명
 - 특기적성(체육/예술/과학) 장학생: 중·고등 15명

2. 접수 기간
 - 2026년 3월 10일(화) ~ 2026년 3월 27일(금) 17:00까지

3. 접수 방법
 - 교내 장학재단 사무국 직접 방문 제출 또는 우편 접수
 - 제출 서식은 [열린마당 > 서식자료실]에서 다운로드 가능

4. 문의
 - 장학재단 사무국 (053-740-0000)`
    },
    {
      id: 2,
      tag: "공시안내",
      title: "2025회계연도 공익법인 세입·세출 결산서 및 회계감사 결과 공시 안내",
      date: "2026-02-28",
      views: 312,
      author: "장학재단 사무국",
      content: `상속세 및 증여세법 제50조의3 및 공익법인의 설립·운영에 관한 법률에 따라, 2025회계연도 세입세출 결산서 및 공인회계사 감사보고서를 홈페이지 [결산공시] 메뉴 및 국세청 홈택스에 공시하였음을 알려드립니다.`
    },
    {
      id: 3,
      tag: "기부감사",
      title: "청구고 제21회 동기회 모교 장학기금 1,500만 원 쾌척에 감사드립니다",
      date: "2026-02-25",
      views: 520,
      author: "이사장 김청구",
      content: `모교 개교기념을 맞이하여 후배들을 위한 장학기금 1,500만 원을 흔쾌히 기탁해주신 청구고 제21회 동기회 회원 여러분께 머리 숙여 깊은 감사의 인사를 올립니다. 전달해주신 귀한 정성은 후배들의 꿈과 학업 지원에 투명하고 소중하게 쓰이도록 하겠습니다.`
    },
    {
      id: 4,
      tag: "재단소식",
      title: "2025년도 제2차 정기이사회 심의 결과 안내",
      date: "2025-12-18",
      views: 295,
      author: "이사회 간사",
      content: `2025년 12월 15일 개최된 제2차 정기이사회에서 2026년도 장학생 선발 계획안 및 세입·세출 예산안이 원안 가결되었음을 알려드립니다.`
    }
  ],

  // 서식 자료실
  resources: [
    { id: 1, title: "[서식1] 2026학년도 장학생 지원신청서 및 개인정보 동의서", ext: "HWP / PDF", size: "142 KB", date: "2026-03-02" },
    { id: 2, title: "[서식2] 장학생 추천서 (담임교사 및 지도교사용)", ext: "HWP / PDF", size: "98 KB", date: "2026-03-02" },
    { id: 3, title: "[서식3] 기부금 약정서 및 기부금영수증 발급 신청서", ext: "HWP / PDF", size: "85 KB", date: "2026-01-10" },
    { id: 4, title: "[정관] 재단법인 청구중고등학교 장학재단 정관 전문(최신개정본)", ext: "PDF", size: "320 KB", date: "2025-03-15" }
  ]
};
