"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ExternalLink, Calendar, Tag, RefreshCw, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  category: "Economy" | "Recruit" | "ESG" | "Digital" | "Policy" | "Issue";
  date: string;
  source: string;
  url: string;
  isBreaking?: boolean;
}

const initialNewsData: NewsItem[] = [
  {
    id: "1",
    title: "산업은행, 2026년 상반기 경제전망 발표 '성장률 2.3% 예상'",
    summary: "산업은행 미래전략연구소는 2026년 국내 경제성장률을 2.3%로 전망했습니다. 반도체 수출 호조 지속과 내수 회복세가 성장을 견인할 것으로 분석했습니다.",
    category: "Economy",
    date: "2026.01.28",
    source: "KDB 미래전략연구소",
    url: "https://search.naver.com/search.naver?where=news&query=산업은행+경제전망+2026",
    isBreaking: true
  },
  {
    id: "2",
    title: "강석훈 회장, '2026년은 AI 전환의 원년... 초격차 금융 선도'",
    summary: "강석훈 산업은행 회장은 신년사를 통해 2026년을 'AI 대전환(AX)의 원년'으로 선포하고, 전행적인 디지털 혁신과 AI 기반 금융 솔루션 확대를 주문했습니다.",
    category: "Issue",
    date: "2026.01.02",
    source: "금융뉴스",
    url: "https://search.naver.com/search.naver?where=news&query=강석훈+산업은행+신년사"
  },
  {
    id: "3",
    title: "산업은행, 부산 본점 이전 관련 특별법 국회 통과 기대감 고조",
    summary: "여야 합의로 산업은행 부산 이전을 위한 한국산업은행법 개정안 논의가 급물살을 타고 있습니다. 2월 임시국회 내 처리가 유력하다는 관측입니다.",
    category: "Policy",
    date: "2026.01.25",
    source: "정치부",
    url: "https://search.naver.com/search.naver?where=news&query=산업은행법+개정안"
  },
  {
    id: "4",
    title: "2026년 상반기 신입행원 채용 사전 안내",
    summary: "2026년도 상반기 신입행원 채용이 3월 초 공고될 예정입니다. 올해는 데이터·AI 직군 채용 비중을 30%까지 확대할 계획입니다.",
    category: "Recruit",
    date: "2026.01.15",
    source: "KDB 채용",
    url: "https://recruit.kdb.co.kr"
  },
  {
    id: "5",
    title: "KDB NextRound, 'CES 2026' 혁신상 수상 기업 투자 설명회 개최",
    summary: "라스베이거스에서 열린 CES 2026에서 혁신상을 수상한 국내 스타트업들을 초청하여 대규모 투자 유치 설명회를 개최했습니다.",
    category: "Digital",
    date: "2026.01.20",
    source: "벤처스퀘어",
    url: "https://search.naver.com/search.naver?where=news&query=CES+2026+산업은행"
  },
  {
    id: "6",
    title: "산업은행, 국내 최초 '수소경제 활성화 펀드' 2조원 조성 완료",
    summary: "탄소중립 목표 달성을 위해 2조원 규모의 수소경제 활성화 펀드 조성을 완료하고, 본격적인 투자 집행에 나섭니다.",
    category: "ESG",
    date: "2026.01.10",
    source: "ESG데일리",
    url: "https://search.naver.com/search.naver?where=news&query=산업은행+수소펀드"
  },
  {
    id: "7",
    title: "글로벌 금융시장 변동성 확대... 산은, 비상대응체계 가동",
    summary: "미국 연준의 금리 정책 변화 가능성에 대비하여 24시간 모니터링 체제를 가동하고 외화 유동성 관리를 강화합니다.",
    category: "Economy",
    date: "2026.01.27",
    source: "국제금융",
    url: "https://search.naver.com/search.naver?where=news&query=산업은행+금융시장+대응"
  },
  {
    id: "8",
    title: "KDB생명 매각 재추진... '2026년 내 매각 완료 목표'",
    summary: "경영 정상화 성과를 바탕으로 KDB생명 매각 절차를 재개합니다. 복수의 금융지주사가 인수에 관심을 보이고 있는 것으로 알려졌습니다.",
    category: "Issue",
    date: "2026.01.05",
    source: "M&A뉴스",
    url: "https://search.naver.com/search.naver?where=news&query=KDB생명+매각"
  },
   {
    id: "9",
    title: "산업은행-유럽투자은행(EIB), 녹색금융 협력 강화 MOU 체결",
    summary: "유럽투자은행(EIB)과 녹색금융 및 기후변화 대응을 위한 포괄적 업무협약을 체결하고, 공동 투자 프로젝트를 발굴하기로 했습니다.",
    category: "ESG",
    date: "2026.01.18",
    source: "금융외교",
    url: "https://search.naver.com/search.naver?where=news&query=산업은행+EIB"
  },
  {
    id: "10",
    title: "차세대 모바일뱅킹 앱 'KDB Smart 3.0' 베타 서비스 오픈",
    summary: "사용자 경험(UX)을 대폭 개선하고 AI 챗봇 기능을 강화한 차세대 모바일뱅킹 앱의 베타 서비스가 시작되었습니다.",
    category: "Digital",
    date: "2026.01.22",
    source: "디지털금융",
    url: "https://search.naver.com/search.naver?where=news&query=KDB+Smart+3.0"
  }
];

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>(initialNewsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  useEffect(() => {
    // Set initial last updated time
    const now = new Date();
    setLastUpdated(now.toLocaleTimeString());
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate API fetch delay and "Real-time" update effect
    setTimeout(() => {
      const now = new Date();
      setLastUpdated(now.toLocaleTimeString());
      setIsRefreshing(false);
      // In a real scenario, this would fetch new data.
      // Here we just update the timestamp to simulate freshness.
    }, 1000);
  };

  const filteredNews = news.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(news.map((item) => item.category)));

  return (
    <div className="container px-4 py-8 md:py-12 mx-auto">
      <div className="flex flex-col space-y-4 md:space-y-6">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
                KDB 뉴스룸
                <Badge variant="destructive" className="animate-pulse text-xs font-normal px-2 py-0.5">
                  LIVE
                </Badge>
              </h1>
              <p className="text-muted-foreground mt-1">
                2026년 산업은행과 금융권의 최신 이슈를 실시간으로 확인하세요.
              </p>
            </div>
            <div className="flex items-center text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
              <span className="mr-2">최근 업데이트: {lastUpdated}</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-6 w-6 rounded-full hover:bg-muted"
                onClick={handleRefresh}
                disabled={isRefreshing}
              >
                <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
                <span className="sr-only">새로고침</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Alert for Breaking News */}
        {news.some(n => n.isBreaking) && (
          <Alert variant="destructive" className="bg-destructive/5 border-destructive/20">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>속보 (Breaking News)</AlertTitle>
            <AlertDescription className="font-medium">
              {news.find(n => n.isBreaking)?.title}
            </AlertDescription>
          </Alert>
        )}

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between sticky top-[65px] z-40 bg-background/95 backdrop-blur py-2 border-b md:border-none">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="뉴스 검색..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            <Button 
              variant={selectedCategory === null ? "default" : "outline"} 
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              전체
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.length > 0 ? (
            filteredNews.map((news) => (
              <Card key={news.id} className="flex flex-col h-full hover:shadow-lg transition-all duration-200 border-l-4 border-l-transparent hover:border-l-primary group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {news.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {news.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl line-clamp-2 leading-tight">
                    <Link href={news.url} target="_blank" className="group-hover:text-primary transition-colors">
                      {news.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="line-clamp-3 text-sm">
                    {news.summary}
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-0 flex justify-between items-center text-xs text-muted-foreground border-t p-4 mt-auto">
                  <span className="flex items-center">
                    <Tag className="h-3 w-3 mr-1" />
                    {news.source}
                  </span>
                  <Link 
                    href={news.url} 
                    target="_blank" 
                    className="flex items-center hover:text-primary transition-colors font-medium group-hover:underline underline-offset-4"
                  >
                    자세히 보기 <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-muted-foreground bg-muted/20 rounded-lg">
              검색 결과가 없습니다.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
