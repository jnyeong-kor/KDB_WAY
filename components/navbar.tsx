"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Briefcase, PenTool, MessageSquare, Home, Newspaper, GraduationCap, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
  {
    title: "산업은행 정보",
    href: "/about",
    icon: Building2,
    description: "KDB 비전 및 핵심 가치",
  },
  {
    title: "채용/후기",
    href: "/recruit",
    icon: Briefcase,
    description: "채용 공고 및 합격 후기",
  },
  {
    title: "필기 시험",
    href: "/exam",
    icon: PenTool,
    description: "데일리 경제/금융 퀴즈",
  },
  {
    title: "실전 모의고사",
    href: "/mock-exam",
    icon: GraduationCap,
    description: "실제 산업은행 필기시험 모의고사",
  },
  {
    title: "면접 대비",
    href: "/interview",
    icon: MessageSquare,
    description: "실전 모의 면접",
  },
  {
    title: "뉴스/이슈",
    href: "/news",
    icon: Newspaper,
    description: "KDB 및 금융권 최신 뉴스",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        {/* Desktop Logo & Nav */}
        <div className="mr-4 hidden md:flex items-center">
          <Link href="/" className="mr-8 flex items-center space-x-2">
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg tracking-tighter text-primary">KDB 산업은행</span>
              <span className="text-xs font-medium text-muted-foreground tracking-widest">Recruit Mate</span>
            </div>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary font-bold" : "text-foreground/70"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0 bg-background border-r-primary/20">
            <SheetHeader className="border-b pb-4 mb-4">
              <SheetTitle className="text-left">
                 <div className="flex flex-col leading-none">
                  <span className="font-bold text-xl tracking-tighter text-primary">KDB 산업은행</span>
                  <span className="text-sm font-medium text-muted-foreground tracking-widest">Recruit Mate</span>
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4 pr-6">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center p-2 rounded-md hover:bg-muted transition-colors"
              >
                <Home className="h-5 w-5 mr-3 text-primary" />
                <span className="font-medium">홈으로</span>
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center p-2 rounded-md hover:bg-muted transition-colors"
                >
                  <item.icon className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">{item.title}</span>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        {/* Mobile Logo (Center) */}
        <div className="flex md:hidden flex-1 justify-center">
           <Link href="/" className="flex items-center space-x-2">
             <span className="font-bold text-lg text-primary">KDB Recruit Mate</span>
           </Link>
        </div>

        {/* Right Actions */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          
        </div>
      </div>
    </header>
  );
}
