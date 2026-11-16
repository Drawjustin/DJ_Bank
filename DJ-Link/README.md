# DJ Link

제주은행 미래내일 일경험 프로젝트 · DJ Bank 정책자금·지원사업 맞춤 추천과 일정관리 서비스

```
DJ-Link/
├─ frontend/   React + Vite (피그마 01~07 화면)
├─ infra/      AWS 배포 스크립트 (S3 + CloudFront)
└─ scripts/    기업마당 데이터 수집 스크립트
```

## AWS에 화면 올리기 (맥 터미널)

준비: AWS CLI 설치(`brew install awscli`) → `aws configure` (리전 `ap-northeast-2`)

```bash
./infra/setup-frontend.sh    # 처음 한 번: 비공개 S3 버킷 + CloudFront 생성
./infra/deploy-frontend.sh   # 화면 바꿀 때마다: 빌드 → 업로드 → 캐시 갱신
```

- 마지막에 나오는 `https://xxxx.cloudfront.net` 이 접속 주소입니다 (처음엔 5~10분 걸림).
- S3는 외부 공개를 막고 CloudFront(OAC)로만 읽게 되어 있습니다.
- 비용: 이 정도 트래픽이면 무료 범위 안입니다. 첫날 AWS Budgets 월 $5 알림을 꼭 걸어 두세요.
- 다음 단계에서 같은 CloudFront에 `/data/*`(공고 JSON)와 `/api/*`(Lambda)를 붙입니다. 설계서 2.2절 참고.
