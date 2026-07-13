import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주)휴브알엔씨',
      positions: [
        {
          title: 'Backend Engineer · 백엔드·인프라 1인 담당',
          startedAt: '2025-01',
          descriptions: [
            '> 전국 250여 개 병원·센터가 사용하는 의료 진단 플랫폼(신경심리검사 SNSB-3 · 아동 발성 분석). 지연·오류가 즉각 의료 현장 VOC로 이어지는 서비스.',
            '## 검사 이용권 코인 정합성 확보 — 상태 기반 최종 일관성 설계',
            '> 외부 분석 서버 장애·타임아웃 시 "코인만 차감되고 결과는 없는" 정합성 붕괴 VOC 반복 — 차감(DB)과 외부 호출(HTTP)은 한 트랜잭션으로 묶을 수 없는 이질적 자원',
            '코인을 즉시 차감하지 않고 요청·사용 내역을 PENDING으로 DB 선기록 후 외부 호출 — 잔여 코인은 COMPLETE 건만 집계',
            '미확정 PENDING은 배치가 FAIL로 전이 — 현재 상태 조건부 UPDATE(멱등)라 완료 이벤트와 배치가 경합해도 이중 전이 없음',
            '→ 정합성 불일치 VOC 해결 · 장애 시에도 최종 일관성으로 자동 수렴',
            '## 리포트 렌더 9초 → 1.5초 · 피크 서버 다운 제거 — 렌더 워커 분리 + 이벤트 드리븐 후처리',
            '> 일 평균 1,500건의 CPU 집약 PDF 렌더가 API 서버 내부에서 앱 트래픽과 자원을 경합 — 건당 9초 지연과 피크 서버 다운 반복',
            '렌더를 SQS + 전용 ECS 워커로 격리 — API는 즉시 응답, 워커 수로 동시 렌더를 통제해 OOM 차단',
            '완료 이벤트는 EventBridge 룰 분기 — SNS 푸시(FCM/APNS)·Lambda 정리, 실패는 DLQ 격리',
            '→ 렌더 9초 → 1.5초 (83%↓, OTel·Prometheus·Grafana로 측정) · 피크 서버 다운·관련 VOC 0',
            '## E2E 테스트 자동화 — 배포 후 버그 월 10건 → 1건',
            '> 1인 개발 체제에서 배포마다 전체 기능을 수동 회귀 검증 — 의료 현장 특성상 오류 1건의 신뢰 비용이 큼',
            'QA 외주 TC 문서를 AI로 E2E 스크립트 변환·축적(웹 Playwright · 모바일 Maestro) + TC 이력 대시보드 직접 개발',
            '검증 환경 게이트로 운영 직배포 차단',
            '→ 배포 후 버그 월 10건 → 1건 (90%↓) · 수동 QA 1시간/일 제거',
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
            '> B2B 협업툴 SaaS(Slack 대체) — 서드파티 연동 플러그인 · 오픈 API 개발',
            '## 폐쇄망 고객사 감사 로그 파이프라인 — 마스킹 배치 + Splunk 전송',
            '> 연간 보안 감사 고객사가 액션 로그를 요구 — 개인정보 원본 반출 불가 + 폐쇄망 접근 불가의 이중 제약',
            '5분 주기 배치 가공 — 이름·이메일 마스킹, IP는 고객사 제공 솔트 해시(행위 추적은 가능, 원본 유추 불가)',
            'DMZ 역방향 프록시 경유 — 상호 인증서 + API 토큰 + IP 화이트리스트 3중 통제 · 전송 실패는 DB 영속화',
            '→ 연간 감사 요건 충족 · 전송 실패 전량 추적·복구 체계 확보',
            '## 외부 API(Jira) 연동 10초 → 1.8초 — 동시성 제한 + 부분 실패 격리',
            '> Promise.all 10건 동시 호출이 Jira rate limit(429)에 걸려 재시도 누적 — 원인은 처리량 부족이 아닌 429 재시도 증폭',
            '5개씩 동시 요청 수 제한 + allSettled로 부분 실패 격리, 수신 후 정렬로 순서 보장',
            '→ 응답 10초 → 1.8초 (82%↓) · 429 재시도 없이 안정 운영',
            '## 서드파티 토큰 연쇄 접근 취약점 선제 발견',
            '> Swit 토큰이 무효화되지 않고 남으면 연결된 서드파티 앱 토큰까지 연쇄 접근 가능한 경로 발견',
            '민감 작업 구간에 재인증(step-up) 강제 — B2B는 보안 우선으로 팀 합의',
            '→ 취약점 선제 차단 · 인앱 플러그인 정식 제공',
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
            '> 10년 운영된 통합 LMS(학습 관리 시스템) — 히스토리 누적 100억 건+, 피크 수천 RPS. 레거시 성능·안정성 개선 담당(선임 1명과 협업)',
            '## 결제-등록 정합성 사고(6천 명) 해소 — 비관적 락 → Redis 분산 락 + 멱등 처리',
            '> SELECT FOR UPDATE 락 대기가 스레드 풀·커넥션을 고갈 → 수신 요청이 처리 전 유실, 약 6,000명 결제-미등록 사고',
            '동시성 제어를 DB에서 Redis 분산 락(Redisson, 오더 단위)으로 이전 — 배치 2중화 인스턴스 간 상호배제, 오더 단위 락으로 병렬성 유지',
            '락 만료·재시도로 인한 이중 실행은 등록 상태값 조건부 체크로 멱등 보장',
            '→ 누락 6,000명 수동 복구 · 재발 0',
            '## 대용량 히스토리(100억 건+) 조회 20초 → 1초 — 생성시간 Range 파티셔닝',
            '> 전체 스캔이 DB 버퍼풀을 가득 채워 시스템 프리징 — 조회 키 분산·신규 데이터 위주라 캐싱은 부적합',
            '생성시간(연/월) Range 파티셔닝 — 기간 조건 쿼리가 필요한 파티션만 읽도록(range pruning) 개선',
            '→ 조회 20초 → 1초 이하 (95%↓) · 프리징·관련 VOC 0',
            '## 회원·과목 조회 쿼리 최적화 3초 → 1.4초 — 복합 인덱스',
            'EXPLAIN으로 풀 스캔 원인 특정 — 과목-회원-시간 복합 인덱스(leftmost prefix) 설계',
            '→ 조회 3초 → 1.4초 (53%↓) · Full Scan 제거',
          ],
          skillKeywords: [
            'Java',
            'Spring Boot',
            'JPA',
            'Oracle',
            'MySQL',
            'Redisson',
            'Spring Batch',
          ],
        },
      ],
    },
  ],
};

export default experience;
