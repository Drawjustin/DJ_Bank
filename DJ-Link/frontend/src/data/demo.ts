/**
 * 07 대시보드 정책자금 알림에 쓰는 요약 값.
 * 지금은 피그마 시안 숫자 그대로(데모 회사 기준)이고,
 * 다음 단계에서 GET /api/recommendations 결과로 바꾼다.
 */
export const POLICY_SUMMARY = {
  matchCount: 7,
  maxAmountLong: '3억 2,000만원',
  maxAmountShort: '3.2억원',
  newCount: 3,
  urgentCount: 2,
  urgentDday: 6,
};
