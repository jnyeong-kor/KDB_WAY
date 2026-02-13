# KDB_WAY Project

이 프로젝트는 산업은행(KDB) 채용 준비를 돕기 위한 AI 기반 분석 플랫폼입니다. Trae IDE와 GitHub, AI Codex를 연동한 자동화 워크플로우를 통해 개발되고 있습니다.

## 🚀 Trae-GitHub-Codex 워크플로우

이 프로젝트는 실시간 코드 개선 시스템을 포함하고 있습니다.

1.  **연결**: `./scripts/connect-github.sh <URL>`를 실행하여 저장소를 연결합니다.
2.  **개발**: Trae IDE에서 코드를 수정합니다.
3.  **동기화**: `.\sync-to-github.ps1 "커밋 메시지"`를 실행하여 GitHub로 자동 푸시합니다.
4.  **AI 분석**: GitHub Actions가 자동으로 코드를 스캔하고 개선 사항을 제안합니다.
5.  **반영**: `git pull origin main`을 통해 AI의 개선 사항을 로컬로 가져옵니다.

상세 설계는 [docs/github-codex-workflow.md](docs/github-codex-workflow.md)를 참조하세요.

## 🛠 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 결과를 확인할 수 있습니다.

## 📁 주요 구조

-   `app/`: 페이지 및 라우팅 (Next.js App Router)
-   `components/`: 재사용 가능한 UI 컴포넌트
-   `scripts/`: 자동화 및 연결 스크립트
-   `docs/`: 프로젝트 설계 및 워크플로우 문서

---
*Generated with Trae & Codex Integration*
