import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; 2025 KDB Recruit Mate. All rights reserved. <br className="md:hidden" />
            본 서비스는 KDB 산업은행 공식 채용 홈페이지가 아닌, 취업 준비를 돕기 위한 보조 도구입니다.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="#" className="hover:text-foreground hover:underline">
            이용약관
          </Link>
          <Link href="#" className="hover:text-foreground hover:underline">
            개인정보처리방침
          </Link>
        </div>
      </div>
    </footer>
  );
}
