#!/usr/bin/env bash
# DJ Link 프론트엔드 인프라 1회 생성: S3(비공개) + CloudFront(OAC)
# 사용법: ./infra/setup-frontend.sh            (맥 터미널, aws configure 완료 상태)
# 결과:   infra/.frontend.env 에 버킷·배포 ID 저장, 마지막에 접속 주소 출력
set -euo pipefail

REGION="ap-northeast-2"
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
BUCKET="${BUCKET:-djlink-web-$ACCOUNT_ID}"
ENV_FILE="$(dirname "$0")/.frontend.env"

if [[ -f "$ENV_FILE" ]]; then
  echo "이미 만들어져 있어요 ($ENV_FILE). 배포는 ./infra/deploy-frontend.sh 를 쓰세요."; exit 0
fi

echo "▶ 1/4 S3 버킷 생성: $BUCKET (퍼블릭 접근 차단)"
aws s3api create-bucket --bucket "$BUCKET" --region "$REGION" \
  --create-bucket-configuration LocationConstraint="$REGION" >/dev/null
aws s3api put-public-access-block --bucket "$BUCKET" --public-access-block-configuration \
  BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true

echo "▶ 2/4 CloudFront OAC 생성"
OAC_ID=$(aws cloudfront create-origin-access-control --origin-access-control-config \
  "Name=djlink-web-oac-$(date +%s),SigningProtocol=sigv4,SigningBehavior=always,OriginAccessControlOriginType=s3" \
  --query 'OriginAccessControl.Id' --output text)

echo "▶ 3/4 CloudFront 배포 생성 (몇 분 걸려요)"
CONFIG=$(cat <<JSON
{
  "CallerReference": "djlink-$(date +%s)",
  "Comment": "DJ Link frontend",
  "Enabled": true,
  "DefaultRootObject": "index.html",
  "PriceClass": "PriceClass_200",
  "Origins": { "Quantity": 1, "Items": [ {
    "Id": "s3-web",
    "DomainName": "$BUCKET.s3.$REGION.amazonaws.com",
    "OriginAccessControlId": "$OAC_ID",
    "S3OriginConfig": { "OriginAccessIdentity": "" }
  } ] },
  "DefaultCacheBehavior": {
    "TargetOriginId": "s3-web",
    "ViewerProtocolPolicy": "redirect-to-https",
    "CachePolicyId": "658327ea-f89d-4fab-a63d-7e88639e58f6",
    "Compress": true,
    "AllowedMethods": { "Quantity": 2, "Items": ["GET", "HEAD"] }
  }
}
JSON
)
read -r DIST_ID DIST_DOMAIN < <(aws cloudfront create-distribution --distribution-config "$CONFIG" \
  --query '[Distribution.Id, Distribution.DomainName]' --output text)

echo "▶ 4/4 버킷 정책: 이 CloudFront 배포만 읽기 허용"
aws s3api put-bucket-policy --bucket "$BUCKET" --policy "$(cat <<JSON
{
  "Version": "2012-10-17",
  "Statement": [ {
    "Sid": "AllowCloudFrontOAC",
    "Effect": "Allow",
    "Principal": { "Service": "cloudfront.amazonaws.com" },
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::$BUCKET/*",
    "Condition": { "StringEquals": { "AWS:SourceArn": "arn:aws:cloudfront::$ACCOUNT_ID:distribution/$DIST_ID" } }
  } ]
}
JSON
)"

cat > "$ENV_FILE" <<EOF
REGION=$REGION
BUCKET=$BUCKET
DIST_ID=$DIST_ID
DIST_DOMAIN=$DIST_DOMAIN
EOF

echo ""
echo "✅ 완료. 접속 주소: https://$DIST_DOMAIN  (배포 완료까지 5~10분)"
echo "   이제 ./infra/deploy-frontend.sh 로 화면을 올리세요."
