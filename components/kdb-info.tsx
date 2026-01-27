import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, TrendingUp, Leaf, Building2, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export function KdbInfoSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div className="space-y-4 max-w-2xl">
            <Badge variant="outline" className="border-primary/50 text-primary bg-primary/5">
              About KDB
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              대한민국과 함께 성장하는<br />
              <span className="text-primary">글로벌 금융리더</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              1954년 설립 이래 대한민국 경제발전의 역사와 함께해 온 KDB산업은행은
              대표 정책금융기관으로서 산업과 국민경제의 발전을 선도하고 있습니다.
            </p>
          </div>
          <Link href="https://www.kdb.co.kr" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-2">
              공식 홈페이지 방문 <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-white dark:bg-card border-none shadow-sm hover:shadow-md transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Building2 className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <CardTitle className="text-xl mb-2">정책금융 파트너</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">
                반도체, 이차전지 등 국가 첨단전략산업 육성과 기업 구조조정을 통해
                대한민국 산업 경쟁력을 강화합니다.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-card border-none shadow-sm hover:shadow-md transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                <TrendingUp className="h-6 w-6 text-indigo-600 dark:text-indigo-400 group-hover:text-white transition-colors" />
              </div>
              <CardTitle className="text-xl mb-2">혁신성장 지원</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">
                벤처·스타트업 생태계 조성과 유니콘 기업 육성을 위한 모험자본 공급으로
                미래 성장동력을 확보합니다.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-card border-none shadow-sm hover:shadow-md transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center mb-4 group-hover:bg-sky-600 transition-colors">
                <Globe className="h-6 w-6 text-sky-600 dark:text-sky-400 group-hover:text-white transition-colors" />
              </div>
              <CardTitle className="text-xl mb-2">글로벌 KDB</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">
                전 세계 주요 거점을 연결하는 글로벌 네트워크를 통해 우리 기업의
                해외 진출을 적극 지원합니다.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-card border-none shadow-sm hover:shadow-md transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                <Leaf className="h-6 w-6 text-green-600 dark:text-green-400 group-hover:text-white transition-colors" />
              </div>
              <CardTitle className="text-xl mb-2">ESG 경영 선도</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">
                녹색금융 확대와 사회적 책임 이행을 통해 지속가능한 미래를 만들어가는
                ESG 경영을 실천합니다.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#00366D] to-[#004d99] text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold">KDB의 미래, 당신과 함께합니다</h3>
              <p className="text-blue-100 max-w-xl">
                대한민국 경제의 든든한 버팀목, KDB 산업은행에서 당신의 꿈을 펼치세요.
                우리는 도전하는 인재를 기다립니다.
              </p>
            </div>
            <Link href="https://recruit.kdb.co.kr" target="_blank">
              <Button size="lg" className="bg-white text-[#00366D] hover:bg-blue-50 border-none font-semibold">
                채용 사이트 바로가기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
