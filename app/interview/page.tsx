"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { interviewQuestions } from "./data";
import { ArrowLeft, ArrowRight, Lightbulb, MessageSquare, Eye, EyeOff, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function InterviewPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showModelAnswer, setShowModelAnswer] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const currentQuestion = interviewQuestions[currentIndex];

  const handleNext = () => {
    if (currentIndex < interviewQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      resetState();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      resetState();
    }
  };

  const resetState = () => {
    setUserAnswer("");
    setShowModelAnswer(false);
    setFeedback(null);
  };

  const handleSubmit = () => {
    // 실제 AI 분석 로직이 들어갈 자리
    // 여기서는 간단한 피드백 시뮬레이션
    if (userAnswer.length < 50) {
      setFeedback("답변이 너무 짧습니다. 구체적인 경험이나 근거를 덧붙여 보세요.");
    } else {
      setFeedback("좋은 답변입니다! 키워드가 잘 포함되어 있는지 모범 답안과 비교해 보세요.");
    }
  };

  return (
    <div className="container py-10 px-4 max-w-4xl min-h-[calc(100vh-4rem)] flex flex-col mx-auto">
      <div className="mb-8 space-y-2 text-center md:text-left">
        <h1 className="text-3xl font-bold tracking-tight">면접 트레이닝</h1>
        <p className="text-muted-foreground">
          실전 면접 질문에 직접 답변해보며 실력을 키우세요.
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center">
        <div className="w-full flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-muted-foreground">
            Question {currentIndex + 1} / {interviewQuestions.length}
          </span>
          <Badge variant="outline" className="text-primary border-primary">
            {currentQuestion.category}
          </Badge>
        </div>

        <Card className="w-full border-2 border-primary/20 shadow-lg">
          <CardHeader className="bg-primary/5 border-b border-primary/10 pb-8 pt-8">
            <CardTitle className="text-xl md:text-2xl font-bold leading-relaxed text-center">
              " {currentQuestion.question} "
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <label htmlFor="answer" className="text-sm font-medium flex items-center gap-2">
                <MessageSquare className="h-4 w-4" /> 나의 답변 입력
              </label>
              <Textarea
                id="answer"
                placeholder="여기에 답변을 입력하고 연습해 보세요..."
                className="min-h-[200px] resize-none text-base p-4 focus-visible:ring-primary"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
              <div className="flex justify-end">
                 <Button 
                  size="sm" 
                  onClick={handleSubmit}
                  disabled={!userAnswer.trim()}
                  className="gap-2"
                >
                  <CheckCircle2 className="h-4 w-4" /> 답변 점검하기
                </Button>
              </div>
            </div>

            {feedback && (
               <div className="bg-muted p-4 rounded-lg text-sm animate-in fade-in slide-in-from-top-2">
                <span className="font-bold block mb-1">💡 피드백</span>
                {feedback}
              </div>
            )}

            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setShowModelAnswer(!showModelAnswer)}
              >
                {showModelAnswer ? (
                  <><EyeOff className="mr-2 h-4 w-4" /> 모범 답안 숨기기</>
                ) : (
                  <><Eye className="mr-2 h-4 w-4" /> 모범 답안 및 팁 보기</>
                )}
              </Button>

              {showModelAnswer && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-5 duration-300">
                  <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                    <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" /> 모범 답안 예시
                    </h3>
                    <p className="text-sm leading-relaxed text-foreground/90">
                      {currentQuestion.modelAnswer}
                    </p>
                  </div>
                  
                  <div className="bg-secondary/50 p-6 rounded-lg">
                    <h3 className="font-bold mb-3 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-yellow-500" /> 답변 팁
                    </h3>
                    <ul className="space-y-2">
                      {currentQuestion.tips.map((tip, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-between bg-muted/20 border-t p-6">
            <Button
              variant="ghost"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> 이전 질문
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentIndex === interviewQuestions.length - 1}
            >
              다음 질문 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

