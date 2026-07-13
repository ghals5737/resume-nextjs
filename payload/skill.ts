import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Backend',
  items: [
    { title: 'Kotlin' },
    { title: 'Java' },
    { title: 'Spring Boot' },
    { title: 'JPA' },
    { title: 'Node.js' },
    { title: 'TypeScript' },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [{ title: 'PostgreSQL' }, { title: 'Redis' }, { title: 'MySQL' }, { title: 'Oracle' }],
};

const infra: ISkill.Skill = {
  category: 'Infra / DevOps',
  items: [
    { title: 'AWS' },
    { title: 'Docker' },
    { title: 'Terraform' },
    { title: 'GitHub Actions' },
    { title: 'Jenkins' },
  ],
};

const observability: ISkill.Skill = {
  category: 'Observability / Test',
  items: [
    { title: 'Prometheus · Grafana' },
    { title: 'OpenTelemetry' },
    { title: 'Sentry' },
    { title: 'k6' },
    { title: 'Playwright · Maestro' },
  ],
};

const skill: ISkill.Payload = {
  disable: true,
  skills: [backend, database, infra, observability],
};

export default skill;
