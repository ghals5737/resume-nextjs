import { faEnvelope, faPhone, faPen } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';
import image from '../asset/photo.jpg';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: '황호민',
    small: '(4년차 백엔드 개발자)',
  },
  contact: [
    {
      title: 'ghals5737@gmail.com',
      link: 'mailto:ghals5737@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '010-5493-5737',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/ghals5737',
      icon: faGithub,
    },
    {
      title: 'blog.hhm.io.kr',
      link: 'https://blog.hhm.io.kr/blog',
      icon: faPen,
    },
  ],
};

export default profile;
