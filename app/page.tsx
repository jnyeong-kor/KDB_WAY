import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, PenTool, MessageSquare, ArrowRight, CheckCircle2, TrendingUp, Users, BookOpen, Newspaper } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { KdbInfoSection } from "@/components/kdb-info";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full bg-[#f8f9fc] dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center space-y-10 py-32 md:py-48 lg:py-56 overflow-hidden">
        {/* Modern Gradient Background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-white to-transparent dark:from-blue-900/20 dark:via-slate-950 dark:to-slate-950"></div>
        
        {/* Floating 3D Orbs - Optimized with GPU acceleration */}
        <div className="absolute top-1/4 left-1/4 -z-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse will-change-transform"></div>
        <div className="absolute bottom-1/4 right-1/4 -z-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000 will-change-transform"></div>
        
        {/* Grid Pattern - Simplified for performance */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="container px-4 md:px-6 space-y-8 relative z-10 text-center mx-auto">
          <div className="flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700">
             <Badge variant="outline" className="px-6 py-2 text-sm md:text-base border-primary/30 bg-white/50 backdrop-blur-md text-primary shadow-sm">
               <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
               예비 산업은행원을 위한 가이드
             </Badge>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00366D] via-blue-600 to-indigo-600 dark:from-blue-400 dark:via-indigo-400 dark:to-white drop-shadow-sm">
                WAY TO KDB
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-300 text-lg md:text-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 font-medium">
              대한민국 대표 정책금융기관 <span className="font-bold text-[#00366D] dark:text-blue-400">KDB 산업은행</span>.<br className="hidden md:block" />
              합격의 순간까지, 가장 확실한 로드맵을 제시합니다.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 pt-8">
            <Link href="/recruit">
              <Button size="lg" className="h-14 px-8 text-lg font-bold bg-[#00366D] hover:bg-[#002855] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-full">
                채용 정보 확인하기 <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/exam">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-2 border-[#00366D]/10 hover:bg-white/50 backdrop-blur-sm hover:border-[#00366D]/30 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-full bg-white/80">
                필기 실력 테스트
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - Optimized Glassmorphism */}
      <section className="py-12 relative z-20 -mt-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border border-white/20 dark:border-slate-800 shadow-2xl rounded-3xl p-10 md:p-14 transition-all duration-300">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-slate-200 dark:divide-slate-800">
              <div className="space-y-2 group cursor-default">
                <h3 className="text-4xl md:text-5xl font-black text-[#0056B3] dark:text-blue-400 group-hover:scale-105 transition-transform duration-300 will-change-transform">1954</h3>
                <p className="text-sm md:text-base text-slate-500 font-semibold tracking-wide uppercase">Since</p>
              </div>
              <div className="space-y-2 group cursor-default">
                <h3 className="text-4xl md:text-5xl font-black text-[#0056B3] dark:text-blue-400 group-hover:scale-105 transition-transform duration-300 will-change-transform">No.1</h3>
                <p className="text-sm md:text-base text-slate-500 font-semibold tracking-wide uppercase">Policy Bank</p>
              </div>
              <div className="space-y-2 group cursor-default">
                <h3 className="text-4xl md:text-5xl font-black text-[#0056B3] dark:text-blue-400 group-hover:scale-105 transition-transform duration-300 will-change-transform">Global</h3>
                <p className="text-sm md:text-base text-slate-500 font-semibold tracking-wide uppercase">Leader</p>
              </div>
              <div className="space-y-2 group cursor-default">
                <h3 className="text-4xl md:text-5xl font-black text-[#0056B3] dark:text-blue-400 group-hover:scale-105 transition-transform duration-300 will-change-transform">ESG</h3>
                <p className="text-sm md:text-base text-slate-500 font-semibold tracking-wide uppercase">Sustainable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KDB Info Section */}
      <KdbInfoSection />

      {/* Features Section - 3D Cards */}
      <section className="container px-4 md:px-6 py-24 md:py-32 mx-auto">
        <div className="mb-16 md:text-center space-y-6">
          <Badge variant="secondary" className="mb-4 text-[#00366D] bg-blue-50 hover:bg-blue-100 px-4 py-1.5 rounded-full text-sm font-semibold mx-auto w-fit block">
            Success Roadmap
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            합격을 위한 <span className="text-[#00366D] dark:text-blue-400 relative">
              3단계 솔루션
              <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-200/50 -z-10 rounded-sm"></span>
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-2xl mx-auto">
            서류 준비부터 최종 면접까지, 각 단계별로 최적화된 맞춤형 가이드를 경험해보세요.
          </p>
        </div>
        
        <div className="grid gap-10 md:grid-cols-3">
          {/* Feature 1 */}
          <Link href="/recruit" className="group h-full">
            <Card className="h-full relative overflow-hidden border-none bg-white dark:bg-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-[2rem] will-change-transform">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-50 dark:from-blue-900/10"></div>
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-all duration-300 group-hover:scale-110">
                <Briefcase className="h-32 w-32 text-[#0056B3]" />
              </div>
              <CardHeader className="pt-10 px-8">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0056B3]/10 text-[#0056B3] group-hover:bg-[#0056B3] group-hover:text-white transition-all duration-300 shadow-lg">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2 group-hover:text-[#0056B3] transition-colors">채용/후기 게시판</CardTitle>
                <CardDescription className="text-base">
                  최신 채용 흐름을 파악하고 합격자들의 데이터를 기반으로 전략을 세우세요.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-10">
                <ul className="space-y-4">
                  <li className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-300">
                    <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    실시간 채용 공고 업데이트
                  </li>
                  <li className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-300">
                    <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    직무별 합격 자소서 분석
                  </li>
                  <li className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-300">
                    <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    현직자 멘토링 Q&A
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Link>
          
          {/* Feature 2 */}
          <Link href="/exam" className="group h-full">
            <Card className="h-full relative overflow-hidden border-none bg-white dark:bg-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-[2rem] will-change-transform">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-transparent opacity-50 dark:from-indigo-900/10"></div>
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-all duration-300 group-hover:scale-110">
                <PenTool className="h-32 w-32 text-indigo-600" />
              </div>
              <CardHeader className="pt-10 px-8">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-lg">
                  <BookOpen className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">필기 미니 시험</CardTitle>
                <CardDescription className="text-base">
                  매일 업데이트되는 금융/경제 고난도 퀴즈로 필기 전형을 완벽하게 대비하세요.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-10">
                <ul className="space-y-4">
                  <li className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-300">
                    <div className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    CPA 1차 수준 고난도 문제
                  </li>
                  <li className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-300">
                    <div className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    상세한 해설 및 오답 노트
                  </li>
                  <li className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-300">
                    <div className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    나의 학습 성취도 분석
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Link>

          {/* Feature 3 */}
          <Link href="/interview" className="group h-full">
            <Card className="h-full relative overflow-hidden border-none bg-white dark:bg-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-[2rem] will-change-transform">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-transparent to-transparent opacity-50 dark:from-teal-900/10"></div>
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-all duration-300 group-hover:scale-110">
                <MessageSquare className="h-32 w-32 text-teal-600" />
              </div>
              <CardHeader className="pt-10 px-8">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-lg">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2 group-hover:text-teal-600 transition-colors">면접 트레이닝</CardTitle>
                <CardDescription className="text-base">
                  실전 같은 시뮬레이션과 AI 분석으로 면접장에서의 자신감을 높여드립니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-10">
                <ul className="space-y-4">
                  <li className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-300">
                    <div className="h-6 w-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3 shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    빈출 면접 질문 데이터베이스
                  </li>
                  <li className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-300">
                    <div className="h-6 w-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3 shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    모범 답안 및 답변 팁
                  </li>
                  <li className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-300">
                    <div className="h-6 w-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3 shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    모의 면접 시뮬레이션
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* News Section */}
      <section className="container px-4 md:px-6 py-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">KDB 주요 뉴스 & 이슈</h2>
            <p className="text-slate-500 text-lg">산업은행과 금융권의 최신 소식을 놓치지 마세요.</p>
          </div>
          <Link href="/news">
            <Button variant="outline" className="hidden md:flex rounded-full px-6 border-slate-300 hover:bg-slate-50 hover:text-[#00366D] font-medium transition-colors">
              뉴스 더보기 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              badge: "Economy", badgeColor: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
              title: "산업은행, 새해 첫 글로벌본드 30억 달러 발행 성공",
              desc: "전 세계 투자자들의 높은 관심 속에 3년, 5년, 10년물 등 총 30억 달러 규모의 글로벌본드 발행에 성공하며 한국물에 대한 신뢰를 확인했습니다.",
              date: "2026.01.22"
            },
            {
              badge: "Global", badgeColor: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
              title: "베트남 하노이지점 설립 본인가(License) 획득",
              desc: "신남방 정책의 핵심 거점인 베트남 하노이에 지점 설립 본인가를 획득하여, 국내 기업의 베트남 진출 및 현지 인프라 사업 지원을 강화합니다.",
              date: "2026.01.20"
            },
            {
              badge: "Recruit", badgeColor: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
              title: "2026년 상반기 신입행원 채용 대비 전략 가이드",
              desc: "2026년 경영목표 달성을 위한 상반기 채용 트렌드 분석과 직무별 핵심 역량 가이드를 제공합니다. 예비 산은인을 위한 필독서!",
              date: "2026.01.20"
            },
            {
              badge: "Industry", badgeColor: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
              title: "산업 AI 전환(AX) 지원을 위한 업무협약 체결",
              desc: "한국산업기술기획평가원과 손잡고 대한민국 산업 전반의 AI 전환을 촉진하기 위한 금융 지원 및 기술 협력 생태계를 조성합니다.",
              date: "2026.01.16"
            }
          ].map((news, i) => (
            <Card key={i} className="group border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden hover:-translate-y-1">
              <CardHeader className="pb-4">
                <Badge variant="secondary" className={`w-fit mb-3 px-3 py-1 ${news.badgeColor}`}>{news.badge}</Badge>
                <CardTitle className="text-lg leading-snug line-clamp-2 group-hover:text-[#00366D] transition-colors">
                  {news.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 mt-3 text-sm leading-relaxed">
                  {news.desc}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-xs font-medium text-muted-foreground pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Newspaper className="h-3 w-3 mr-2" /> {news.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
