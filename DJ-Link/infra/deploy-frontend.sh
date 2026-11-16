#!/usr/bin/env bash
# DJ Link 프론트엔드 배포: 빌드 → S3 업로드 → CloudFront 캐시 갱신
# 사용법: ./infra/deploy-frontend.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ENV_FILE="$ROOT/infra/.frontend.env"
[[ -f "$ENV_FILE" ]] || { echo "먼저 ./infra/setup-frontend.sh 를 실행하세요."; exit 1; }
source "$ENV_FILE"

echo "▶ 빌드"
cd "$ROOT/frontend"
npm ci --silent
npm run build

echo "▶ 업로드 → s3://$BUCKET"
# 해시가 붙은 정적 파일은 오래 캐시, index.html은 항상 새로 받기
aws s3 sync dist "s3://$BUCKET" --delete --exclude index.html \
  --cache-control "public,max-age=31536000,immutable"
aws s3 cp dist/index.html "s3://$BUCKET/index.html" \
  --cache-control "no-cache" --content-type "text/html; charset=utf-8"

echo "▶ CloudFront 캐시 갱신"
aws cloudfront create-invalidation --distribution-id "$DIST_ID" --paths "/index.html" >/dev/null

echo "✅ 배포 완료: https://$DIST_DOMAIN"
