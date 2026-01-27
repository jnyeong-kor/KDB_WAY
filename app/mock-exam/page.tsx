"use client";

import { useState, useEffect } from "react";
import { mockQuestions, MockQuestion } from "./data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Timer, CheckCircle2, XCircle, AlertCircle, PlayCircle, BarChart3, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import Link from "next/link";

export default function MockExamPage() {
  const [examStatus, setExamStatus] = useState<"intro" | "progress" | "result">("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
  const [score, setScore] = useState(0);

  // Timer logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (examStatus === "progress" && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && examStatus === "progress") {
      handleSubmit();
    }
    return () => clearInterval(timer);
  }, [examStatus, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleStart = () => {
    setExamStatus("progress");
    setTimeLeft(60 * 60);
    setAnswers({});
    setCurrentQuestionIndex(0);
  };

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [mockQuestions[currentQuestionIndex].id]: parseInt(value),
    }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    mockQuestions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        correctCount++;
      }
    });
    const finalScore = Math.round((correctCount / mockQuestions.length) * 100);
    setScore(finalScore);
    setExamStatus("result");
    localStorage.setItem("kdb_mock_exam_score", finalScore.toString());
  };

  const currentQuestion = mockQuestions[currentQuestionIndex];
  const progressPercentage = (Object.keys(answers).length / mockQuestions.length) * 100;

  // Intro Screen
  if (examStatus === "intro") {
    return (
      <div className="container max-w-4xl py-12 px-4 mx-auto">
        <Card className="w-full border-t-4 border-t-primary shadow-lg">
          <CardHeader className="text-center pb-8 pt-10">
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
              <Timer className="w-12 h-12 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold mb-2">KDB 산업은행 실전 모의고사</CardTitle>
            <CardDescription className="text-lg">
              실제 필기시험과 유사한 환경에서 실력을 점검해보세요.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 px-8 md:px-16">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-muted p-4 rounded-lg flex items-center gap-3">
                <div className="bg-background p-2 rounded-full shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold">문항 수</p>
                  <p className="text-sm text-muted-foreground">총 15문항 (경제/경영/금융/상식)</p>
                </div>
              </div>
              <div className="bg-muted p-4 rounded-lg flex items-center gap-3">
                <div className="bg-background p-2 rounded-full shadow-sm">
                  <Timer className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold">제한 시간</p>
                  <p className="text-sm text-muted-foreground">60분 (실제 시험 시간 배분 연습)</p>
                </div>
              </div>
            </div>
            
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>주의사항</AlertTitle>
              <AlertDescription>
                중간에 종료하면 기록이 저장되지 않습니다. 안정적인 환경에서 응시해주세요.
                문제는 경제학, 재무관리, 일반상식 등 고난도 문항이 포함되어 있습니다.
              </AlertDescription>
            </Alert>
          </CardContent>
          <CardFooter className="flex justify-center pb-10 pt-4">
            <Button size="lg" onClick={handleStart} className="w-full md:w-1/2 text-lg h-12 font-semibold shadow-md transition-all hover:scale-105">
              <PlayCircle className="mr-2 h-5 w-5" />
              시험 시작하기
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  // Result Screen
  if (examStatus === "result") {
    return (
      <div className="container max-w-5xl py-8 px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Score Card */}
          <Card className="md:w-1/3 h-fit sticky top-20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                시험 결과
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center py-6">
              <div className="relative w-40 h-40 mx-auto mb-4 flex items-center justify-center rounded-full border-8 border-primary/20">
                <div className="text-center">
                  <span className="text-4xl font-bold text-primary">{score}</span>
                  <span className="text-muted-foreground block text-sm">점</span>
                </div>
                <svg className="absolute top-0 left-0 w-full h-full -rotate-90">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="8"
                    strokeDasharray="283" // 2 * pi * r (approx)
                    strokeDashoffset={283 - (283 * score) / 100}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">
                  {score >= 70 ? "합격권입니다! 🎉" : "조금 더 노력이 필요해요 💪"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  (합격 예상 커트라인: 70점)
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full" onClick={handleStart}>
                <RotateCcw className="mr-2 h-4 w-4" />
                다시 응시하기
              </Button>
              <Link href="/" className="w-full">
                <Button variant="outline" className="w-full">메인으로 돌아가기</Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Review Section */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold mb-4">오답 노트 & 해설</h2>
            {mockQuestions.map((q, index) => {
              const userAnswer = answers[q.id];
              const isCorrect = userAnswer === q.answer;
              
              return (
                <Card key={q.id} className={`border-l-4 ${isCorrect ? "border-l-green-500" : "border-l-red-500"}`}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant={isCorrect ? "default" : "destructive"} className={isCorrect ? "bg-green-600 hover:bg-green-700" : ""}>
                          {isCorrect ? "정답" : "오답"}
                        </Badge>
                        <Badge variant="outline">{q.category}</Badge>
                      </div>
                      <span className="text-sm text-muted-foreground font-mono">Q{index + 1}</span>
                    </div>
                    <CardTitle className="text-lg leading-relaxed">
                      {q.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-2">
                    <div className="space-y-2">
                      {q.options.map((opt, i) => (
                        <div 
                          key={i} 
                          className={`p-3 rounded-md text-sm border flex items-center justify-between ${
                            i === q.answer 
                              ? "bg-green-50 border-green-200 text-green-800 font-medium" 
                              : i === userAnswer && !isCorrect
                                ? "bg-red-50 border-red-200 text-red-800"
                                : "bg-background border-transparent"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full border flex items-center justify-center text-xs shrink-0 bg-white">
                              {i + 1}
                            </span>
                            {opt}
                          </span>
                          {i === q.answer && <CheckCircle2 className="w-4 h-4 text-green-600" />}
                          {i === userAnswer && !isCorrect && <XCircle className="w-4 h-4 text-red-600" />}
                        </div>
                      ))}
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg mt-4 text-sm">
                      <p className="font-semibold mb-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> 해설
                      </p>
                      <p className="text-muted-foreground leading-relaxed">{q.explanation}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Progress Screen (Exam Mode)
  return (
    <div className="container max-w-6xl py-6 px-4 h-[calc(100vh-80px)] flex flex-col">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6 bg-card p-4 rounded-lg shadow-sm border">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold text-primary">KDB Mock Exam</span>
          <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
            <Badge variant="outline">{currentQuestion.category}</Badge>
            <span>문항 {currentQuestionIndex + 1} / {mockQuestions.length}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className={`flex items-center gap-2 font-mono text-xl font-bold ${timeLeft < 300 ? "text-red-500 animate-pulse" : "text-primary"}`}>
            <Timer className="w-5 h-5" />
            {formatTime(timeLeft)}
          </div>
          <Button variant="destructive" size="sm" onClick={handleSubmit}>
            제출하기
          </Button>
        </div>
      </div>

      <div className="flex gap-6 flex-1 overflow-hidden">
        {/* Sidebar (Question Map) - Hidden on mobile */}
        <Card className="hidden lg:flex w-64 flex-col h-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">문제 목록</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-4 gap-2">
              {mockQuestions.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`h-10 w-10 rounded-md text-sm font-medium transition-colors border ${
                    currentQuestionIndex === idx
                      ? "bg-primary text-primary-foreground border-primary"
                      : answers[q.id] !== undefined
                      ? "bg-primary/20 text-primary border-primary/20"
                      : "hover:bg-muted text-muted-foreground"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <div className="w-full space-y-2">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>진행률</span>
                <span>{Math.round(progressPercentage)}%</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
          </CardFooter>
        </Card>

        {/* Main Question Area */}
        <Card className="flex-1 flex flex-col h-full shadow-md">
          <CardHeader className="pb-4 border-b">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <span className="text-sm font-medium text-muted-foreground block mb-1">
                  Question {currentQuestionIndex + 1}
                </span>
                <CardTitle className="text-xl md:text-2xl leading-relaxed">
                  {currentQuestion.question}
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto pt-6 px-6 md:px-10">
            <RadioGroup
              value={answers[currentQuestion.id]?.toString()}
              onValueChange={handleAnswer}
              className="space-y-4"
            >
              {currentQuestion.options.map((option, idx) => (
                <div key={idx} className={`flex items-start space-x-3 rounded-lg border p-4 transition-colors hover:bg-muted/50 cursor-pointer ${answers[currentQuestion.id] === idx ? "border-primary bg-primary/5" : ""}`}>
                  <RadioGroupItem value={idx.toString()} id={`opt-${idx}`} className="mt-1" />
                  <Label htmlFor={`opt-${idx}`} className="text-base font-normal leading-relaxed cursor-pointer w-full">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
          <CardFooter className="border-t p-6 flex justify-between bg-muted/10">
            <Button
              variant="outline"
              onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentQuestionIndex === 0}
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> 이전
            </Button>
            
            {currentQuestionIndex < mockQuestions.length - 1 ? (
              <Button onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}>
                다음 <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                제출 및 결과 확인
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
