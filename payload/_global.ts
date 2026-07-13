import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = '황호민 | 백엔드 개발자 이력서';
const description =
  '동시성 제어와 데이터 정합성을 구조로 풀어온 4년차 백엔드 엔지니어. 실패는 먼저 영속화하고, 복구는 분리한다.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: '황호민 이력서',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Homin',
        lastName: 'Hwang',
        username: 'ghals5737',
        gender: 'male',
      },
    },
  },
};
