import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: true,
  list: [
    {
      title: 'MyKafka',
      descriptions: [
        { content: 'Kafka의 저장·전송 핵심(append-only log · sparse index · zero-copy)을 Kotlin/Netty로 직접 구현한 로그 브로커' },
        { content: '3모듈(protocol/client/broker) 분리 · JitPack 배포 · 임베드 브로커 지원' },
        {
          content: 'https://github.com/ghals5737/mykafka',
          href: 'https://github.com/ghals5737/mykafka',
        },
      ],
    },
  ],
};

export default openSource;
