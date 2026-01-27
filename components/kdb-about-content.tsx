"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Building2,
  Globe2,
  TrendingUp,
  Leaf,
  History,
  Users,
  Network,
  ArrowRight,
  ExternalLink,
  Landmark,
  Target,
  Award
} from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function KdbAboutContent() {
  return (
    <div className="container px-4 md:px-6 py-12 max-w-7xl mx-auto space-y-16">
      
      {/* 1. Vision & Mission Section */}
      <section className="text-center space-y-6">
        <Badge variant="outline" className="px-4 py-1 text-sm border-primary/30 bg-primary/5 text-primary mb-4">
          KDB Way
        </Badge>
        <h2 className="text-4xl font-bold tracking-tight text-primary">대한민국과 함께 성장하는<br/>글로벌 금융리더</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          산업은행은 대한민국의 경제발전을 이끌어온 대표 정책금융기관으로서,<br/>
          이제는 세계를 무대로 더 큰 도약을 준비하고 있습니다.
        </p>
        
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {[
            {
              icon: Landmark,
              title: "정책금융 파트너",
              desc: "첨단전략산업 육성 및 기업 경쟁력 강화 지원"
            },
            {
              icon: TrendingUp,
              title: "혁신성장 지원",
              desc: "벤처·스타트업 육성 및 유니콘 기업 발굴"
            },
            {
              icon: Globe2,
              title: "글로벌 KDB",
              desc: "해외 진출 지원 및 글로벌 네트워크 확장"
            },
            {
              icon: Leaf,
              title: "ESG 경영",
              desc: "녹색금융 주도 및 지속가능한 사회적 책임 이행"
            }
          ].map((item, i) => (
            <Card key={i} className="bg-muted/30 border-none shadow-sm hover:shadow-md transition-all">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-white shadow-sm mb-4 text-primary">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* 2. Detailed Info Tabs */}
      <section>
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">About KDB</h2>
          <p className="text-muted-foreground mt-2">산업은행의 어제와 오늘, 그리고 조직을 소개합니다.</p>
        </div>

        <Tabs defaultValue="history" className="w-full">
          <TabsList className="grid w-full max-w-2xl grid-cols-3 mx-auto mb-10 h-12">
            <TabsTrigger value="history" className="text-base">연혁 (History)</TabsTrigger>
            <TabsTrigger value="organization" className="text-base">조직도 (Organization)</TabsTrigger>
            <TabsTrigger value="subsidiary" className="text-base">자회사 (Network)</TabsTrigger>
          </TabsList>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr] items-start max-w-4xl mx-auto relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
              
              {/* 2020s */}
              <div className="md:text-right space-y-4">
                <Badge className="mb-2">2020 ~ 현재</Badge>
                <h3 className="text-xl font-bold">글로벌 & 디지털 혁신</h3>
                <ul className="space-y-2 text-muted-foreground text-sm inline-block text-left md:text-right">
                  <li><strong>2022</strong> GCF 협력사업 승인</li>
                  <li><strong>2021</strong> KDB 실리콘밸리 출범</li>
                  <li><strong>2020</strong> KDB 인도네시아 출범</li>
                  <li><strong>2020</strong> 기간산업안정기금 설치</li>
                </ul>
              </div>
              <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white z-10 my-1">
                <History className="w-4 h-4" />
              </div>
              <div className="md:col-start-3" />

              {/* 2010s */}
              <div className="md:col-start-1" />
              <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground z-10 my-1">
                <div className="w-2 h-2 rounded-full bg-current" />
              </div>
              <div className="space-y-4">
                <Badge variant="secondary" className="mb-2">2010 ~ 2019</Badge>
                <h3 className="text-xl font-bold">통합과 성장</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li><strong>2019</strong> KDB NextRise 개최 (스타트업 페어)</li>
                  <li><strong>2016</strong> GCF 이행기구 인증 획득</li>
                  <li><strong>2014</strong> 통합 산업은행 출범 (정책금융공사 합병)</li>
                </ul>
              </div>

              {/* 1950s - 2000s */}
              <div className="md:text-right space-y-4">
                <Badge variant="outline" className="mb-2">1954 ~ 2009</Badge>
                <h3 className="text-xl font-bold">설립과 기반 구축</h3>
                <ul className="space-y-2 text-muted-foreground text-sm inline-block text-left md:text-right">
                  <li><strong>2009</strong> 산은금융지주 출범</li>
                  <li><strong>2001</strong> 여의도 본점 이전</li>
                  <li><strong>1954</strong> 한국산업은행 설립</li>
                </ul>
              </div>
              <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground z-10 my-1">
                <div className="w-2 h-2 rounded-full bg-current" />
              </div>
              <div className="md:col-start-3" />
            </div>
          </TabsContent>

          {/* Organization Tab */}
          <TabsContent value="organization" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="border-none bg-slate-900/5 dark:bg-slate-900/50">
              <CardContent className="p-8">
                <div className="flex flex-col items-center space-y-8">
                  {/* Top Level */}
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-4 bg-[#00366D] text-white rounded-xl shadow-lg w-48 text-center font-bold text-lg ring-4 ring-blue-100 dark:ring-blue-900">
                      회장 (Chairman)
                    </div>
                    <div className="h-8 w-px bg-slate-300 dark:bg-slate-600" />
                    <div className="flex gap-4">
                      <div className="p-3 bg-slate-800 text-white shadow-sm rounded-lg w-32 text-center text-sm font-medium">이사회</div>
                      <div className="p-3 bg-slate-800 text-white shadow-sm rounded-lg w-32 text-center text-sm font-medium">감사</div>
                    </div>
                  </div>
                  
                  <div className="h-8 w-px bg-slate-300 dark:bg-slate-600" />

                  {/* Executives */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
                    <div className="p-3 bg-slate-700 text-white rounded-lg text-center text-sm font-medium">
                      전무이사
                    </div>
                    <div className="p-3 bg-slate-700 text-white rounded-lg text-center text-sm font-medium">
                      준법감시인 / CISO
                    </div>
                    <div className="p-3 bg-slate-700 text-white rounded-lg text-center text-sm font-medium">
                      경영협의회
                    </div>
                  </div>

                  <div className="h-8 w-px bg-slate-300 dark:bg-slate-600" />

                  {/* Business Divisions (Groups) */}
                  <div className="w-full">
                    <h3 className="text-center font-bold text-lg mb-6 text-[#00366D] dark:text-blue-400">주요 사업 부문 (9개 부문)</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 text-sm">
                      <div className="p-3 bg-[#00366D] text-white rounded-lg text-center hover:bg-[#004d99] transition-colors shadow-md">
                        <span className="block font-semibold mb-1">혁신성장금융</span>
                        <span className="text-xs text-blue-200">벤처금융, 넥스트라운드</span>
                      </div>
                      <div className="p-3 bg-[#00366D] text-white rounded-lg text-center hover:bg-[#004d99] transition-colors shadow-md">
                        <span className="block font-semibold mb-1">기업금융</span>
                        <span className="text-xs text-blue-200">산업금융, 구조조정</span>
                      </div>
                      <div className="p-3 bg-[#00366D] text-white rounded-lg text-center hover:bg-[#004d99] transition-colors shadow-md">
                        <span className="block font-semibold mb-1">글로벌사업</span>
                        <span className="text-xs text-blue-200">해외점포, 무역금융</span>
                      </div>
                      <div className="p-3 bg-[#00366D] text-white rounded-lg text-center hover:bg-[#004d99] transition-colors shadow-md">
                        <span className="block font-semibold mb-1">자본시장</span>
                        <span className="text-xs text-blue-200">발행시장, M&A, PE</span>
                      </div>
                      <div className="p-3 bg-[#00366D] text-white rounded-lg text-center hover:bg-[#004d99] transition-colors shadow-md">
                        <span className="block font-semibold mb-1">지역성장</span>
                        <span className="text-xs text-blue-200">지역투자, 해양금융</span>
                      </div>
                       <div className="p-3 bg-slate-600 text-white rounded-lg text-center hover:bg-slate-700 transition-colors shadow-md">
                        <span className="block font-semibold mb-1">심사평가</span>
                        <span className="text-xs text-slate-300">심사, 신용평가</span>
                      </div>
                      <div className="p-3 bg-slate-600 text-white rounded-lg text-center hover:bg-slate-700 transition-colors shadow-md">
                        <span className="block font-semibold mb-1">리스크관리</span>
                        <span className="text-xs text-slate-300">IT·AI 본부, 여신감리</span>
                      </div>
                      <div className="p-3 bg-slate-600 text-white rounded-lg text-center hover:bg-slate-700 transition-colors shadow-md">
                        <span className="block font-semibold mb-1">기획관리</span>
                        <span className="text-xs text-slate-300">인사, 미래전략연구소</span>
                      </div>
                      <div className="p-3 bg-slate-600 text-white rounded-lg text-center hover:bg-slate-700 transition-colors shadow-md">
                        <span className="block font-semibold mb-1">재무·지원</span>
                         <span className="text-xs text-slate-300">재무기획, 자금, 총무</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Subsidiaries Tab */}
          <TabsContent value="subsidiary" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "KDB 캐피탈", desc: "여신전문금융회사", icon: Building2 },
                { name: "KDB 인프라자산운용", desc: "인프라 투자 전문", icon: Network },
                { name: "KDB 인베스트먼트", desc: "기업 구조조정 전문", icon: TrendingUp },
                { name: "KDB 생명", desc: "생명보험 서비스", icon: Users },
              ].map((sub, i) => (
                <Card key={i} className="group hover:border-primary/50 transition-all cursor-default">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                      <sub.icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">{sub.name}</CardTitle>
                    <CardDescription>{sub.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Official Links Footer */}
      <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#00366D] to-[#004d99] text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">더 자세한 정보가 필요하신가요?</h3>
          <p className="text-blue-100">산업은행 공식 홈페이지에서 투명한 경영공시와 최신 소식을 확인하세요.</p>
        </div>
        <div className="flex gap-4">
          <Link href="https://www.kdb.co.kr" target="_blank">
            <Button size="lg" className="bg-white text-[#00366D] hover:bg-blue-50 border-none font-semibold">
              공식 홈페이지 <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="https://recruit.kdb.co.kr" target="_blank">
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white">
              채용 홈페이지 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
