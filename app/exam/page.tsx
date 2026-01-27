"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { examQuestions } from "./data";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ExamPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(new Array(examQuestions.length).fill(null));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = examQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / examQuestions.length) * 100;

  const handleOptionSelect = (value: string) => {
    if (isSubmitted) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = parseInt(value);
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < examQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // 모든 문제를 풀지 않았어도 제출 가능하게 할지, 경고를 띄울지는 선택 사항
    // 여기서는 그냥 제출 처리
    setIsSubmitted(true);
    setCurrentQuestionIndex(0); // 결과 확인을 위해 첫 문제로 이동
  };

  const handleRetry = () => {
    setSelectedAnswers(new Array(examQuestions.length).fill(null));
    setIsSubmitted(false);
    setCurrentQuestionIndex(0);
  };

  const calculateScore = () => {
    let score = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === examQuestions[index].answer) {
        score += 1;
      }
    });
    return score;
  };

  if (isSubmitted) {
    const score = calculateScore();
    const isPass = score >= 7; // 7점 이상 합격 기준 예시

    return (
      <div className="container max-w-3xl py-10 px-4 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">시험 결과</h1>
          <div className="flex flex-col items-center justify-center space-y-2">
            <span className="text-6xl font-extrabold text-primary">{score * 10}점</span>
            <span className="text-muted-foreground">총 {examQuestions.length}문제 중 {score}문제 정답</span>
          </div>
          <div className={cn("inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold", isPass ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400")}>
            {isPass ? "합격입니다! 🎉" : "아쉽네요, 다시 도전해보세요!"}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold border-b pb-2">문제 해설</h2>
          {examQuestions.map((q, index) => {
            const userAnswer = selectedAnswers[index];
            const isCorrect = userAnswer === q.answer;

            return (
              <Card key={q.id} className={cn("border", isCorrect ? "border-border" : "border-destructive/50")}>
                <CardHeader>
                  <CardTitle className="flex items-start gap-2 text-base">
                    {isCorrect ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    )}
                    <span>{index + 1}. {q.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    {q.options.map((option, optIndex) => (
                      <div
                        key={optIndex}
                        className={cn(
                          "p-3 rounded-md text-sm border",
                          optIndex === q.answer
                            ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900" // 정답 표시
                            : optIndex === userAnswer && !isCorrect
                            ? "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-900" // 내가 고른 오답
                            : "bg-background border-transparent"
                        )}
                      >
                        <span className={cn("font-medium mr-2", optIndex === q.answer ? "text-green-600 dark:text-green-400" : optIndex === userAnswer && !isCorrect ? "text-destructive" : "")}>
                          {optIndex + 1})
                        </span>
                        {option}
                      </div>
                    ))}
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg text-sm">
                    <span className="font-bold text-primary block mb-1">해설</span>
                    {q.explanation}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center gap-4 pt-4">
          <Button onClick={handleRetry} size="lg" className="w-full sm:w-auto">
            <RotateCcw className="mr-2 h-4 w-4" /> 다시 풀기
          </Button>
          <Link href="/">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              메인으로
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl py-10 px-4 flex flex-col min-h-[calc(100vh-4rem)] mx-auto">
      <div className="mb-8 space-y-2">
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>Question {currentQuestionIndex + 1} / {examQuestions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="flex-1 flex flex-col">
        <CardHeader>
          <div className="mb-2 inline-flex">
            <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {currentQuestion.category}
            </span>
          </div>
          <CardTitle className="text-xl leading-relaxed">
            Q. {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <RadioGroup
            value={selectedAnswers[currentQuestionIndex]?.toString() ?? ""}
            onValueChange={handleOptionSelect}
            className="space-y-3"
          >
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={index.toString()}
                  id={`option-${index}`}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={`option-${index}`}
                  className={cn(
                    "flex flex-1 items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all",
                    selectedAnswers[currentQuestionIndex] === index ? "border-primary bg-primary/5" : ""
                  )}
                >
                  <span className="flex items-center">
                    <span className={cn("mr-3 flex h-6 w-6 items-center justify-center rounded-full border text-xs font-medium", selectedAnswers[currentQuestionIndex] === index ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/30")}>
                      {index + 1}
                    </span>
                    {option}
                  </span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex justify-between pt-6 border-t bg-muted/20">
          <Button
            variant="ghost"
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> 이전
          </Button>
          
          {currentQuestionIndex === examQuestions.length - 1 ? (
            <Button 
              onClick={handleSubmit} 
              className="bg-primary hover:bg-primary/90"
              disabled={selectedAnswers.includes(null)} // 모든 문제를 풀어야 제출 가능 (선택 사항)
            >
              제출하기 <CheckCircle2 className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleNext} disabled={selectedAnswers[currentQuestionIndex] === null}>
              다음 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

