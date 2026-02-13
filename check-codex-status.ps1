# GitHub CLI가 설치되어 있는지 확인
$ghAvailable = Get-Command gh -ErrorAction SilentlyContinue

if (-not $ghAvailable) {
    Write-Host ">>> GitHub CLI (gh)가 설치되어 있지 않습니다. 설치를 권장합니다." -ForegroundColor Yellow
    Write-Host ">>> Git 브랜치를 통해 수동으로 확인 중..." -ForegroundColor Cyan
}

# 원격 정보 업데이트
Write-Host ">>> GitHub에서 최신 Codex 상태를 가져오는 중..." -ForegroundColor Cyan
& git fetch origin --prune

# Codex가 생성한 최근 브랜치 확인
$codexBranches = git branch -r | Select-String "origin/codex/auto-fix-"

if ($codexBranches) {
    $latestCodexBranch = $codexBranches[0].ToString().Trim()
    Write-Host "`n[!] AI Codex의 새로운 자동 수정 제안이 발견되었습니다!" -ForegroundColor Green
    Write-Host "브랜치명: $latestCodexBranch" -ForegroundColor White
    
    # 현재 브랜치와 비교
    $currentBranch = git rev-parse --abbrev-ref HEAD
    Write-Host "`n>>> 현재 브랜치($currentBranch)와의 차이점 요약:" -ForegroundColor Yellow
    & git diff --stat $currentBranch $latestCodexBranch
    
    Write-Host "`n상세 내용을 확인하려면 다음 명령어를 실행하세요:" -ForegroundColor Gray
    Write-Host "git diff $currentBranch $latestCodexBranch" -ForegroundColor Cyan
    Write-Host "`n수정 사항을 반영(Merge)하려면 다음 명령어를 실행하세요:" -ForegroundColor Gray
    Write-Host "git merge $latestCodexBranch" -ForegroundColor Cyan
} else {
    Write-Host "`n>>> 현재 새로운 Codex 자동 수정 제안이 없습니다." -ForegroundColor Gray
}

# GitHub CLI가 있다면 PR 목록도 표시
if ($ghAvailable) {
    Write-Host "`n>>> 열려 있는 Codex PR 목록:" -ForegroundColor Yellow
    & gh pr list --label "autofix"
}
