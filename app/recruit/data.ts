export interface JobPosting {
  id: number;
  title: string;
  type: "신입" | "인턴" | "경력";
  department: string;
  dday: string;
  endDate: string;
  views: number;
  isNew: boolean;
  status: "open" | "closed" | "upcoming";
}

export interface Review {
  id: number;
  title: string;
  category: "서류" | "필기" | "면접" | "최종";
  author: string;
  date: string;
  content: string;
  tags: string[];
}

export const jobPostings: JobPosting[] = [
  {
    id: 1,
    title: "2025년 하반기 신입행원(5급) 채용",
    type: "신입",
    department: "전직무",
    dday: "마감",
    endDate: "2025.09.20",
    views: 25400,
    isNew: false,
    status: "closed",
  },
  {
    id: 2,
    title: "2025년 제2차 청년인턴 채용",
    type: "인턴",
    department: "금융일반",
    dday: "마감",
    endDate: "2025.07.15",
    views: 11200,
    isNew: false,
    status: "closed",
  },
  {
    id: 3,
    title: "2025년 상반기 신입행원(5급) 채용",
    type: "신입",
    department: "일반/디지털",
    dday: "마감",
    endDate: "2025.04.10",
    views: 18500,
    isNew: false,
    status: "closed",
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    title: "2025 하반기 신입행원 최종 합격 후기 (비전공자)",
    category: "최종",
    author: "합격자A",
    date: "2025.12.20",
    content: "경제학 비전공자로서 필기 시험 준비가 가장 힘들었습니다. 하지만 매일 신문 스크랩을 하고...",
    tags: ["비전공자", "필기공부법", "면접팁"],
  },
  {
    id: 2,
    title: "산업은행 청년인턴 서류 합격 자소서 공유",
    category: "서류",
    author: "인턴준비생",
    date: "2026.01.15",
    content: "지원동기에 산업은행의 정책금융 역할을 강조했습니다. 특히 최근 이슈인 반도체 클러스터 지원과 관련하여...",
    tags: ["자소서", "지원동기", "청년인턴"],
  },
  {
    id: 3,
    title: "필기 시험(직무지식) 복원 및 후기",
    category: "필기",
    author: "경제학도",
    date: "2025.10.25",
    content: "미시경제학에서는 게임이론 문제가 까다롭게 나왔고, 거시경제학은 IS-LM 모형 응용 문제가 출제되었습니다...",
    tags: ["필기시험", "전공시험", "경제학"],
  },
  {
    id: 4,
    title: "1차 면접(PT/토론) 준비 과정 및 팁",
    category: "면접",
    author: "말하기고수",
    date: "2025.11.05",
    content: "PT 면접은 주제를 받고 30분 준비 후 발표하는 형식이었습니다. 저는 ESG 경영 관련 주제를 선택했고...",
    tags: ["PT면접", "토론면접", "면접스터디"],
  },
  {
    id: 5,
    title: "IT 직군 코딩테스트 난이도 분석",
    category: "필기",
    author: "개발자지망",
    date: "2025.10.28",
    content: "알고리즘 문제는 총 4문제가 나왔고, 난이도는 프로그래머스 레벨 2~3 정도였습니다. SQL 문제도 1문제...",
    tags: ["IT직군", "코딩테스트", "디지털"],
  },
];
