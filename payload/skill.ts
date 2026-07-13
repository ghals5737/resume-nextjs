import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Backend',
  items: [
    { title: 'Kotlin', level: 3 },
    { title: 'Spring Boot', level: 3 },
    { title: 'JPA', level: 3 },
    { title: 'Java', level: 2 },
    { title: 'Node.js', level: 2 },
    { title: 'TypeScript', level: 2 },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    { title: 'PostgreSQL', level: 3 },
    { title: 'Redis', level: 3 },
    { title: 'MySQL', level: 2 },
    { title: 'Oracle', level: 2 },
  ],
};

const infra: ISkill.Skill = {
  category: 'Infra / DevOps',
  items: [
    { title: 'AWS', level: 3 },
    { title: 'Docker', level: 3 },
    { title: 'Terraform', level: 2 },
    { title: 'GitHub Actions', level: 2 },
    { title: 'Jenkins', level: 2 },
  ],
};

const observability: ISkill.Skill = {
  category: 'Observability / Test',
  items: [
    { title: 'Prometheus · Grafana', level: 2 },
    { title: 'OpenTelemetry', level: 2 },
    { title: 'Sentry', level: 2 },
    { title: 'k6', level: 2 },
    { title: 'Playwright · Maestro', level: 2 },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, infra, observability],
  tooltip: '1: 기초 수준\n2: 사용 경험\n3: Production 개발 가능 수준',
};

export default skill;
