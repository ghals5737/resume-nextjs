import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '전국 병원·대학 연구진이 실시간으로 사용하는 의료 플랫폼에서 핵심 API 응답을 최대 85% 단축하고, 1인 체제로 백엔드·인프라·QA 파이프라인 전체를 직접 설계·운영하고 있는 4년차 백엔드 엔지니어입니다. 단순 기능 구현보다 병목을 찾고 구조를 바꾸는 일에서 동기를 얻으며, 매 회사에서 성능·배포·운영 체계를 직접 설계하고 개선해왔습니다.',
  ],
  sign: '',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
