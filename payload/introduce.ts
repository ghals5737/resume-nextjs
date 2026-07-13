import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '동시성 제어와 데이터 정합성을 구조로 풀어온 4년차 백엔드 엔지니어입니다. 결제-미등록 사고(6천 명)를 Redis 분산 락과 멱등 처리로 재발 0으로 만들었고, 결제-외부연동 흐름은 보상 트랜잭션과 실패 이벤트 영속화로 장애 시에도 최종 일관성으로 자동 수렴하도록 설계했습니다.',
    '"실패는 먼저 영속화하고, 복구는 분리한다"는 원칙을 세 회사에 걸쳐 적용하며, 전국 250여 개 병원·센터가 사용하는 의료 플랫폼에서 백엔드·인프라 전체를 1인 체제로 설계·운영하고 있습니다.',
  ],
  sign: '',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
