#!/bin/bash

# GitHub 원격 연결 및 브랜치 설정 스크립트
# 사용법: ./scripts/connect-github.sh <REPO_URL> <BRANCH_NAME>

REPO_URL=$1
BRANCH_NAME=${2:-main}

if [ -z "$REPO_URL" ]; then
    echo "사용법: ./scripts/connect-github.sh https://github.com/owner/repo.git [branch]"
    echo "예시: ./scripts/connect-github.sh https://github.com/jnyeong-kor/KDB_WAY.git main"
    exit 1
fi

# Git 초기화 확인
if [ ! -d ".git" ]; then
    git init
fi

# origin 설정 확인 및 업데이트
if git remote | grep -q "origin"; then
    echo ">>> 기존 origin URL을 갱신합니다..."
    git remote set-url origin "$REPO_URL"
else
    echo ">>> 새로운 origin을 추가합니다..."
    git remote add origin "$REPO_URL"
fi

# 원격 연결 확인
echo ">>> 원격 저장소 연결 확인 중..."
git remote -v

# 브랜치 설정 및 업스트림 연결
echo ">>> 브랜치($BRANCH_NAME) 설정 및 업스트림 연결 중..."
git branch -M "$BRANCH_NAME"
git push -u origin "$BRANCH_NAME"

echo ">>> 완료! 이제 'sync-to-github.ps1'을 사용하여 업데이트할 수 있습니다."
