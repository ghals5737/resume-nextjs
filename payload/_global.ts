import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = '황호민 | 백엔드 개발자 이력서';
const description =
  '의료 플랫폼에서 핵심 API 응답을 최대 85% 단축하고, 1인 체제로 백엔드·인프라·QA 파이프라인 전체를 설계·운영하는 4년차 백엔드 엔지니어.';

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
