import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Ticketing MSA — 선착순 예매 시스템',
      startedAt: '2026-05',
      where: '개인 학습 프로젝트',
      descriptions: [
        {
          content:
            '고동시성·읽기쓰기 비대칭 도메인을 MSA(게이트웨이 · 대기열 · command/query 분리, CQRS)로 설계',
        },
        {
          content:
            'Kafka·Redis를 매니지드에 의존하지 않고 직접 구현(MyKafka·MyRedis) — "왜 이 구조인가"를 코드로 검증',
          descriptions: [
            { content: 'length-prefix 와이어 프로토콜 · segment + sparse index · zero-copy(transferTo)' },
            { content: '대기열 3대 다중화 시 초과 입장 race를 리더 선출(SET NX)로 해결 — activeCount ≤ slot 보장' },
          ],
        },
        {
          content:
            'k6 부하테스트로 동시 100요청에서 정확히 좌석 수만큼만 성공(중복·초과 0) — 정합성을 측정으로 검증',
        },
        {
          content: 'https://github.com/ghals5737/ticketing',
          href: 'https://github.com/ghals5737/ticketing',
        },
      ],
    },
  ],
};

export default project;
