# GitHub 자동 동기화 스크립트
# 사용법: .\sync-to-github.ps1 "커밋 메시지"

param (
    [string]$CommitMessage = "Trae 자동 업데이트: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
)

$GIT_PATH = "C:\Program Files\Git\cmd\git.exe"

Write-Host ">>> GitHub에 변경 사항 업로드 중..." -ForegroundColor Cyan

# 1. 변경 사항 추가
& $GIT_PATH add .

# 2. 커밋
$status = & $GIT_PATH status --porcelain
if (-not $status) {
    Write-Host ">>> 변경 사항이 없습니다." -ForegroundColor Yellow
    exit
}

& $GIT_PATH commit -m "$CommitMessage"

# 3. 푸시
& $GIT_PATH push origin main

Write-Host ">>> 업로드 완료!" -ForegroundColor Green
