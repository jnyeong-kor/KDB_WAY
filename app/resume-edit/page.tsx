"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Upload, FileText, CheckCircle2, AlertTriangle, Sparkles, RefreshCcw, Brain, ShieldCheck, Database, Zap, Plus, Trash2, ChevronDown, ChevronUp, GraduationCap, Award, Briefcase, TrendingUp, Lock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Types
type AnalysisResult = {
  score: number;
  confidence: number;
  summary: string;
  strengths: string[];
  weaknesses: string[];
  corrections: { original: string; suggestion: string; reason: string }[];
};

type ResumeItem = {
  id: string;
  title: string;
  content: string;
  analysis: AnalysisResult | null;
  isExpanded: boolean;
};

type SpecData = {
  school: string;
  major: string;
  gpa: string;
  english: string;
  license: string;
  experience: string;
};

// KDB Default Questions
const KDB_QUESTIONS = [
  { id: "1", title: "지원동기 및 입사 후 포부 (700자)", content: "", analysis: null, isExpanded: true },
  { id: "2", title: "금융권 역량 개발 노력 (금융/디지털 분야) (1000자)", content: "", analysis: null, isExpanded: false },
  { id: "3", title: "기존의 방식에 얽매이지 않고 창의적으로 문제를 해결한 경험 (700자)", content: "", analysis: null, isExpanded: false },
  { id: "4", title: "KDB산업은행의 디지털 전환(DT)을 위한 제언 (1000자)", content: "", analysis: null, isExpanded: false },
];

export default function ResumeEditPage() {
  const [activeTab, setActiveTab] = useState("resume");
  const [resumeMode, setResumeMode] = useState("items"); // 'full' | 'items'

  // Resume State
  const [resumeText, setResumeText] = useState("");
  const [fullAnalysisResult, setFullAnalysisResult] = useState<AnalysisResult | null>(null);
  const [resumeItems, setResumeItems] = useState<ResumeItem[]>(KDB_QUESTIONS);

  // Spec State
  const [specData, setSpecData] = useState<SpecData>({
    school: "",
    major: "",
    gpa: "",
    english: "",
    license: "",
    experience: "",
  });

  // Analysis State
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [analysisStep, setAnalysisStep] = useState("");
  const [mockExamScore, setMockExamScore] = useState<number>(0);
  
  // Load Mock Exam Score
  useEffect(() => {
    const savedScore = localStorage.getItem("kdb_mock_exam_score");
    if (savedScore) {
      setMockExamScore(parseInt(savedScore, 10));
    }
  }, []);

  // Handlers
  const handleSpecChange = (field: keyof SpecData, value: string) => {
    setSpecData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setResumeText(event.target?.result as string);
      };
      reader.readAsText(file);
    }
  };

  const updateResumeItem = (id: string, field: "title" | "content", value: string) => {
    setResumeItems(items => items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const toggleItemExpansion = (id: string) => {
    setResumeItems(items => items.map(item => item.id === id ? { ...item, isExpanded: !item.isExpanded } : item));
  };

  // Simulation Logic
  const startAnalysis = () => {
    setIsAnalyzing(true);
    if (resumeMode === "full") setFullAnalysisResult(null);
    setProgress(0);
    setAnalysisStep("KDB 인재상 매칭 엔진 가동 중...");

    const steps = [
      { p: 15, text: "지원자 스펙(Spec) 데이터 정규화 처리 중..." },
      { p: 30, text: "자소서 문맥 내 '금융 전문성' 키워드 추출 중..." },
      { p: 50, text: "역대 서류 합격자 데이터와 유사도 비교 분석..." },
      { p: 75, text: "필기 전형 합격 확률 시뮬레이션 계산 중..." },
      { p: 90, text: "종합 합격 예측 리포트 생성 중..." },
      { p: 100, text: "분석 완료!" }
    ];

    let currentStepIndex = 0;
    const interval = setInterval(() => {
      if (currentStepIndex >= steps.length) {
        clearInterval(interval);
        finishAnalysis();
        return;
      }
      const step = steps[currentStepIndex];
      setProgress(step.p);
      setAnalysisStep(step.text);
      currentStepIndex++;
    }, 600);
  };

  const finishAnalysis = () => {
    setIsAnalyzing(false);
    
    // Generate Mock Analysis Result
    const mockResult: AnalysisResult = {
      score: 89,
      confidence: 99.8,
      summary: "산업은행의 핵심 가치인 '정책금융 역할'과 '디지털 혁신'에 대한 이해도가 높습니다. 특히 작성하신 경험 항목들이 직무 역량과 잘 연결되어 있습니다.",
      strengths: ["금융 전문성 키워드 활용 우수", "구체적인 문제 해결 과정 서술", "논리적인 문단 구성"],
      weaknesses: ["일부 문항 소제목 부재", "수치적 성과 표현 다소 부족", "입사 후 포부의 구체성 보완 필요"],
      corrections: [
        {
            original: "금융 지식을 쌓기 위해 노력했습니다.",
            suggestion: "재무위험관리사(FRM) 자격 취득 및 핀테크 공모전 입상을 통해 실무 중심의 금융 지식을 체계적으로 함양했습니다.",
            reason: "단순한 노력보다는 구체적인 자격증이나 성과를 명시하여 전문성을 증명하는 것이 효과적입니다."
        }
      ]
    };

    if (resumeMode === "full") {
      setFullAnalysisResult(mockResult);
    } else {
      setResumeItems(items => items.map(item => item.content.trim() ? { ...item, analysis: mockResult, isExpanded: true } : item));
    }
    
    // Auto-switch to Report tab if specs are filled
    if (specData.school || specData.major) {
        setActiveTab("report");
    }
  };

  // Probability Calculation Logic
  const calculateProbability = () => {
    // 1. Resume Score (Max 40)
    const resumeScoreRaw = resumeMode === "full" 
        ? (fullAnalysisResult?.score || 0) 
        : (resumeItems.find(i => i.analysis)?.analysis?.score || 0);
    const resumePoints = (resumeScoreRaw / 100) * 40;

    // 2. Spec Score (Max 30) - Simple Logic
    let specPoints = 10; // Base
    if (specData.gpa && parseFloat(specData.gpa) >= 3.5) specPoints += 5;
    if (specData.gpa && parseFloat(specData.gpa) >= 4.0) specPoints += 5;
    if (specData.english && parseInt(specData.english) >= 850) specPoints += 5;
    if (specData.license) specPoints += 5;
    
    // 3. Mock Exam Score (Max 30)
    // Map exam score (0-100) to points (0-30)
    const examPoints = (mockExamScore / 100) * 30;

    const totalProb = Math.min(Math.round(resumePoints + specPoints + examPoints), 99);
    
    return {
        total: totalProb,
        resume: Math.round((resumePoints / 40) * 100),
        spec: Math.round((specPoints / 30) * 100),
        exam: mockExamScore
    };
  };

  const prob = calculateProbability();

  return (
    <div className="container py-10 max-w-7xl mx-auto">
      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-[#00366D] dark:text-blue-400">AI 합격 예측 & 자소서 첨삭</h1>
            <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 border-0 px-3 py-1">KDB Special</Badge>
        </div>
        <p className="text-muted-foreground flex items-center gap-2">
          <Database className="w-4 h-4" /> KDB 합격 데이터 기반 서류/필기 종합 분석
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-2xl grid-cols-3 h-12">
                <TabsTrigger value="resume" className="text-base">1. 자기소개서 작성</TabsTrigger>
                <TabsTrigger value="spec" className="text-base">2. 이력서(Spec) 등록</TabsTrigger>
                <TabsTrigger value="report" className="text-base font-bold text-[#00366D]">3. 합격 예측 리포트</TabsTrigger>
            </TabsList>
        </div>

        {/* Tab 1: Resume Edit */}
        <TabsContent value="resume" className="mt-0 space-y-6">
            <div className="flex justify-end mb-4">
                 <div className="bg-slate-100 p-1 rounded-lg flex text-sm font-medium">
                    <button 
                        onClick={() => setResumeMode("items")}
                        className={`px-4 py-1.5 rounded-md transition-all ${resumeMode === "items" ? "bg-white text-[#00366D] shadow-sm" : "text-slate-500"}`}
                    >
                        문항별 작성 (KDB형)
                    </button>
                    <button 
                        onClick={() => setResumeMode("full")}
                        className={`px-4 py-1.5 rounded-md transition-all ${resumeMode === "full" ? "bg-white text-[#00366D] shadow-sm" : "text-slate-500"}`}
                    >
                        전체 작성 (자유형)
                    </button>
                 </div>
            </div>

            {resumeMode === "items" ? (
                 <div className="space-y-6">
                    {resumeItems.map((item, index) => (
                        <Card key={item.id} className={`border-slate-200 shadow-sm transition-all duration-200 ${item.isExpanded ? 'ring-2 ring-blue-500/20' : ''}`}>
                            <CardHeader className="p-4 pb-2 cursor-pointer hover:bg-slate-50 transition-colors rounded-t-xl" onClick={() => toggleItemExpansion(item.id)}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 flex-1">
                                        <Badge variant="outline" className="bg-[#00366D] text-white border-none">{index + 1}번 문항</Badge>
                                        <span className="font-medium text-slate-700 truncate flex-1">{item.title}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {item.analysis && <Badge className="bg-green-500 hover:bg-green-600 text-xs">분석 완료</Badge>}
                                        {item.isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                                    </div>
                                </div>
                            </CardHeader>
                            {item.isExpanded && (
                                <CardContent className="p-4 pt-2 space-y-4 animate-in slide-in-from-top-2 duration-200">
                                    <div className="bg-blue-50/50 p-3 rounded-md text-sm text-slate-600 mb-2 border border-blue-100">
                                        <span className="font-bold text-[#00366D]">💡 작성 가이드:</span> KDB산업은행의 핵심 가치인 '도전', '성장', '상생'을 녹여내세요. 구체적인 경험(STAR 기법) 위주로 작성하는 것이 좋습니다.
                                    </div>
                                    <Textarea 
                                        placeholder="내용을 입력하세요." 
                                        value={item.content}
                                        onChange={(e) => updateResumeItem(item.id, 'content', e.target.value)}
                                        className="min-h-[250px] resize-none bg-white text-base leading-relaxed"
                                    />
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-muted-foreground">{item.content.length}자 / 권장 700~1000자</span>
                                        {item.analysis && (
                                            <div className="text-sm font-medium text-[#00366D]">
                                                AI 점수: {item.analysis.score}점
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Mini Analysis Result for Item */}
                                    {item.analysis && (
                                        <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                                            <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                                                <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500"/> AI 핵심 피드백
                                            </h4>
                                            <ul className="space-y-1 text-sm text-slate-600">
                                                {item.analysis.corrections.slice(0, 1).map((c, i) => (
                                                    <li key={i} className="flex gap-2">
                                                        <span className="text-red-500 font-bold shrink-0">수정 제안:</span>
                                                        {c.suggestion}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </CardContent>
                            )}
                        </Card>
                    ))}
                 </div>
            ) : (
                <Card className="h-full border-slate-200 shadow-md">
                    <CardHeader>
                        <CardTitle>전체 자기소개서 입력</CardTitle>
                        <CardDescription>자유 양식으로 작성된 자소서를 붙여넣으세요.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <Textarea
                            placeholder="자기소개서 내용을 입력하세요."
                            className="min-h-[500px] resize-none text-base leading-relaxed p-6 bg-slate-50"
                            value={resumeText}
                            onChange={(e) => setResumeText(e.target.value)}
                        />
                    </CardContent>
                </Card>
            )}

            <Button 
                className="w-full h-14 text-lg font-bold bg-[#00366D] hover:bg-[#002855] shadow-xl mt-4"
                onClick={startAnalysis}
                disabled={isAnalyzing}
            >
                {isAnalyzing ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        {analysisStep} ({progress}%)
                    </>
                ) : (
                    <>
                        <Zap className="mr-2 h-5 w-5 fill-yellow-400 text-yellow-100" />
                        AI 자소서 분석 및 합격 예측 시작
                    </>
                )}
            </Button>
        </TabsContent>

        {/* Tab 2: Spec Input */}
        <TabsContent value="spec" className="mt-0">
             <Card className="border-slate-200 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                        <Briefcase className="w-6 h-6 text-[#00366D]" />
                        이력서 정보 등록
                    </CardTitle>
                    <CardDescription>
                        정확한 합격 확률 예측을 위해 스펙 정보를 입력해주세요. (입력된 정보는 저장되지 않습니다)
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label className="flex items-center gap-2"><GraduationCap className="w-4 h-4"/> 학교명</Label>
                            <Input placeholder="예) 한국대학교" value={specData.school} onChange={(e) => handleSpecChange('school', e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label className="flex items-center gap-2"><GraduationCap className="w-4 h-4"/> 전공</Label>
                            <Input placeholder="예) 경제학과, 경영학과" value={specData.major} onChange={(e) => handleSpecChange('major', e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label className="flex items-center gap-2"><Award className="w-4 h-4"/> 학점 (GPA)</Label>
                            <Input placeholder="예) 4.0 / 4.5" value={specData.gpa} onChange={(e) => handleSpecChange('gpa', e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> 어학 점수</Label>
                            <Input placeholder="예) 토익 900, 오픽 IH" value={specData.english} onChange={(e) => handleSpecChange('english', e.target.value)} />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label className="flex items-center gap-2"><Award className="w-4 h-4"/> 자격증</Label>
                            <Input placeholder="예) AFPK, 신용분석사, 투운사 (콤마로 구분)" value={specData.license} onChange={(e) => handleSpecChange('license', e.target.value)} />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label className="flex items-center gap-2"><Briefcase className="w-4 h-4"/> 인턴/경력 사항</Label>
                            <Textarea placeholder="관련 인턴 및 경력 사항을 간단히 입력해주세요." className="resize-none" value={specData.experience} onChange={(e) => handleSpecChange('experience', e.target.value)} />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="bg-slate-50 p-6">
                    <Button className="w-full bg-[#00366D] hover:bg-[#002855]" onClick={() => setActiveTab("report")}>
                        입력 완료 및 결과 보기
                    </Button>
                </CardFooter>
             </Card>
        </TabsContent>

        {/* Tab 3: Report */}
        <TabsContent value="report" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Prediction Card */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="border-none shadow-xl bg-gradient-to-br from-[#00366D] to-[#0056b3] text-white overflow-hidden relative">
                         <div className="absolute top-0 right-0 p-8 opacity-10">
                            <TrendingUp className="w-64 h-64 text-white" />
                         </div>
                        <CardHeader>
                            <CardTitle className="text-2xl flex items-center gap-2">
                                <Sparkles className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                                KDB 산업은행 종합 합격 예측
                            </CardTitle>
                            <CardDescription className="text-blue-100">
                                AI 자소서 분석, 스펙 점수, 모의고사 성적을 종합한 결과입니다.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8 relative z-10">
                            <div className="flex items-end gap-2">
                                <span className="text-7xl font-black tracking-tighter text-white">{prob.total}%</span>
                                <span className="text-xl text-blue-100 mb-2 font-medium">합격 확률</span>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <div className="flex justify-between text-sm font-medium text-blue-100">
                                        <span>서류 전형 예측 (자소서 + 스펙)</span>
                                        <span>{Math.round((prob.resume + prob.spec) / 2)}%</span>
                                    </div>
                                    <Progress value={(prob.resume + prob.spec) / 2} className="h-2 bg-blue-900/30" indicatorClassName="bg-yellow-400" />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex justify-between text-sm font-medium text-blue-100">
                                        <span>필기 전형 예측 (모의고사 기반)</span>
                                        <span>{mockExamScore}%</span>
                                    </div>
                                    <Progress value={mockExamScore} className="h-2 bg-blue-900/30" indicatorClassName="bg-green-400" />
                                </div>
                            </div>

                            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20">
                                <h4 className="font-bold flex items-center gap-2 mb-2">
                                    <Brain className="w-4 h-4" /> AI 종합 코멘트
                                </h4>
                                <p className="text-sm leading-relaxed text-blue-50">
                                    {prob.total >= 80 ? 
                                        "매우 높은 합격 가능성이 예측됩니다! 자소서의 직무 적합도가 뛰어나며, 모의고사 성적도 안정권입니다. 면접 준비에 집중하세요." :
                                     prob.total >= 60 ?
                                        "합격 가능성이 있습니다. 자소서에서 수치적 성과를 조금 더 보완하고, 필기 시험 점수를 10점 정도 더 올린다면 안정권에 진입할 것입니다." :
                                        "현재 상태로는 다소 노력이 필요합니다. 특히 필기 시험(모의고사) 점수 향상과 자소서의 경험 구체화가 시급합니다."
                                    }
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Detailed Analysis Breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="border-slate-200">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-blue-600"/> 자소서 분석 점수
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-3xl font-bold text-slate-800">{prob.resume}</span>
                                    <Badge variant="outline" className={prob.resume >= 80 ? "text-green-600 bg-green-50" : "text-yellow-600 bg-yellow-50"}>
                                        {prob.resume >= 80 ? "우수" : "보통"}
                                    </Badge>
                                </div>
                                <p className="text-xs text-muted-foreground">KDB 인재상 매칭도 및 논리 구조 분석 결과</p>
                            </CardContent>
                        </Card>
                        <Card className="border-slate-200">
                             <CardHeader className="pb-2">
                                <CardTitle className="text-base flex items-center gap-2">
                                    <Award className="w-4 h-4 text-purple-600"/> 스펙 경쟁력
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-3xl font-bold text-slate-800">{prob.spec}</span>
                                    <Badge variant="outline" className={prob.spec >= 80 ? "text-green-600 bg-green-50" : "text-slate-600 bg-slate-50"}>
                                        {prob.spec >= 80 ? "상위 10%" : "평균"}
                                    </Badge>
                                </div>
                                <p className="text-xs text-muted-foreground">학점, 어학, 자격증 가산점 합산 결과</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Side Panel: Action Items */}
                <div className="space-y-6">
                    <Card className="h-full border-slate-200 shadow-sm bg-slate-50/50">
                        <CardHeader>
                            <CardTitle className="text-lg">🚀 합격 확률 높이기</CardTitle>
                            <CardDescription>AI가 제안하는 부족한 점 보완 전략</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {mockExamScore < 70 && (
                                <div className="p-3 bg-white rounded-lg border border-red-100 shadow-sm">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-sm text-red-600">필기 점수 경고</h4>
                                            <p className="text-xs text-slate-600 mt-1">
                                                모의고사 점수가 합격권(80점) 대비 부족합니다. 경제/금융 상식 파트를 집중 학습하세요.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                             {!specData.license && (
                                <div className="p-3 bg-white rounded-lg border border-yellow-100 shadow-sm">
                                    <div className="flex items-start gap-3">
                                        <Lock className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-sm text-yellow-600">자격증 보완 필요</h4>
                                            <p className="text-xs text-slate-600 mt-1">
                                                금융권 필수 자격증(AFPK, 투운사 등)이 입력되지 않았습니다. 가산점을 위해 취득을 권장합니다.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="p-3 bg-white rounded-lg border border-blue-100 shadow-sm">
                                <div className="flex items-start gap-3">
                                    <FileText className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-sm text-blue-600">자소서 소제목 활용</h4>
                                        <p className="text-xs text-slate-600 mt-1">
                                            각 문항별로 핵심 내용을 요약하는 소제목을 달아 가독성을 높이세요.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">
                                <RefreshCcw className="w-4 h-4 mr-2" /> 분석 결과 업데이트
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
