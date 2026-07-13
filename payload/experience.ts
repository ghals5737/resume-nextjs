import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주)휴브알엔씨',
      positions: [
        {
          title: 'Backend Engineer',
          startedAt: '2025-01',
          descriptions: [
            '전국 250여 개 병원·센터가 사용하는 의료 진단 플랫폼(신경심리검사 SNSB-3 · 아동 발성 분석)의 백엔드·인프라를 1인 체제로 설계·운영',
            '검사 이용권 코인 정합성 확보 — 즉시 차감 대신 PENDING 선기록, 조건부 UPDATE(멱등) 상태 전이 + 배치 스윕으로 정합성 붕괴 VOC 해결',
            '리포트 렌더 9초 → 1.5초 (83%↓) — CPU 집약 렌더를 SQS·전용 ECS 워커로 격리, 완료 이벤트는 EventBridge 룰 분기 (OTel·Prometheus·Grafana로 측정)',
            'E2E 테스트 자동화 — QA 외주 TC 문서를 AI로 스크립트 변환·축적(웹 Playwright·모바일 Maestro), 배포 후 버그 월 10건 → 1건 (90%↓)',
          ],
          skillKeywords: [
            'Kotlin',
            'Spring Boot',
            'JPA',
            'PostgreSQL',
            'Redis',
            'AWS',
            'Docker',
            'Terraform',
            'GitHub Actions',
          ],
        },
      ],
    },
    {
      title: '스윗코리아',
      positions: [
        {
          title: 'Backend Engineer',
          startedAt: '2023-05',
          endedAt: '2024-06',
          descriptions: [
            'B2B 협업툴 SaaS(Slack 대체) — 서드파티 연동 플러그인 · 오픈 API · 보안/컴플라이언스 담당',
            '폐쇄망 고객사 감사 로그 파이프라인 — 마스킹·솔트 해시 배치 + DMZ 역방향 프록시 3중 통제 + 전송 실패 DB 영속화로 연간 감사 요건 충족',
            '외부 API(Jira) 연동 10초 → 1.8초 (82%↓) — 지연 원인이 429 재시도 증폭임을 특정, 동시 요청 수 제한 + 부분 실패 격리',
            '서드파티 토큰 연쇄 접근 취약점 선제 발견 — 민감 작업 재인증(step-up) 적용으로 차단',
          ],
          skillKeywords: ['Node.js', 'TypeScript', 'OAuth 2.0', 'JWT', 'GCP', 'Splunk'],
        },
      ],
    },
    {
      title: '웅진씽크빅',
      positions: [
        {
          title: 'Backend Engineer',
          startedAt: '2021-08',
          endedAt: '2023-04',
          descriptions: [
            '10년 운영된 통합 LMS(히스토리 누적 100억 건+, 피크 수천 RPS) 백엔드 성능·안정성 개선',
            '결제-등록 정합성 사고(6천 명) 해소 — 비관적 락을 Redis 분산 락(Redisson, 오더 단위)으로 이전 + 상태값 조건부 체크로 멱등 보장, 재발 0',
            '대용량 히스토리(100억 건+) 조회 20초 → 1초 (95%↓) — 생성시간(연/월) Range 파티셔닝으로 range pruning',
            '회원·과목 조회 3초 → 1.4초 (53%↓) — EXPLAIN으로 풀 스캔 원인 특정, 복합 인덱스(leftmost prefix) 설계',
          ],
          skillKeywords: ['Java', 'Spring Boot', 'JPA', 'Oracle', 'MySQL', 'Redisson', 'Spring Batch'],
        },
      ],
    },
  ],
};

export default experience;
