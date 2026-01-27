import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Eye, Tag, ChevronRight, AlertCircle, ExternalLink } from "lucide-react";
import { jobPostings, reviews } from "./data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function RecruitPage() {
  return (
    <div className="container py-10 px-4 max-w-5xl">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">채용/후기 게시판</h1>
        <p className="text-muted-foreground">
          KDB 산업은행의 최신 채용 소식과 합격자들의 생생한 후기를 확인하세요.
        </p>
      </div>

      <Alert className="mb-8 bg-muted/50">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>현재 진행 중인 채용 공고가 없습니다 (2026.01.28 기준)</AlertTitle>
        <AlertDescription className="mt-2 flex flex-col sm:flex-row sm:items-center gap-4">
          <p>
            새로운 공고가 올라오면 가장 먼저 알려드리겠습니다. 아래 목록은 참고용 지난 공고입니다.
          </p>
          <Button size="sm" variant="outline" className="w-fit" asChild>
            <Link href="https://recruit.kdb.co.kr/index.jsp" target="_blank">
              <ExternalLink className="mr-2 h-3 w-3" />
              공식 채용 홈페이지 바로가기
            </Link>
          </Button>
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="posting" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="posting">채용 공고</TabsTrigger>
          <TabsTrigger value="review">합격 후기</TabsTrigger>
        </TabsList>

        {/* 채용 공고 탭 */}
        <TabsContent value="posting" className="space-y-4">
          <div className="grid gap-4">
            {jobPostings.map((job) => (
              <Card 
                key={job.id} 
                className={cn(
                  "transition-all cursor-pointer group",
                  job.status === "closed" ? "opacity-75 hover:opacity-100 hover:shadow-md" : "hover:shadow-md hover:border-primary/50"
                )}
              >
                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant={job.dday === "마감" ? "secondary" : "default"} className={cn("px-2 py-0.5", job.dday !== "마감" && "bg-primary hover:bg-primary/90")}>
                        {job.dday}
                      </Badge>
                      <Badge variant="outline" className="text-muted-foreground">
                        {job.type}
                      </Badge>
                      {job.isNew && (
                        <span className="text-xs font-bold text-red-500 animate-pulse">NEW</span>
                      )}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {job.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="h-3 w-3" /> 마감일: {job.endDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" /> 조회수: {job.views.toLocaleString()}
                      </span>
                    </CardDescription>
                  </div>
                  <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground group-hover:text-primary">
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    모집 부문: <span className="font-medium text-foreground">{job.department}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* 합격 후기 탭 */}
        <TabsContent value="review" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {reviews.map((review) => (
              <Card key={review.id} className="flex flex-col hover:bg-muted/50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{review.category}</Badge>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                  <CardTitle className="line-clamp-1 text-lg leading-tight">
                    {review.title}
                  </CardTitle>
                  <CardDescription>
                    작성자: {review.author}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {review.content}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {review.tags.map((tag, index) => (
                      <span key={index} className="inline-flex items-center text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
                        <Tag className="h-3 w-3 mr-1" /> {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="w-full md:w-auto">
              후기 더 보기
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

