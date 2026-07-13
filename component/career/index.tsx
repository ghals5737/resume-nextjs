import { PropsWithChildren } from 'react';
import { Badge, Col, Row } from 'reactstrap';
import { EmptyRowCol } from '../common';
import { ICareer } from './ICareer';

import archCoin from '../../asset/career/arch-05-coin-state.png';
import archReport from '../../asset/career/arch-01-pdf-eventdriven.png';
import archQa from '../../asset/career/arch-03-qa.png';
import archSplunk from '../../asset/career/arch-06-splunk-pipeline.png';

const NAVY = '#1F3A5F';
const BLUE = '#2E5C8A';

const IMAGES: Record<string, { src: string; alt: string }> = {
  coin: { src: archCoin, alt: '검사 이용권 코인 정합성 — 상태 머신 + 배치 스윕' },
  report: { src: archReport, alt: '리포트 렌더 — 워커 분리 + 이벤트 드리븐' },
  qa: { src: archQa, alt: 'QA 자동화 — E2E + TC 이력 대시보드' },
  splunk: { src: archSplunk, alt: '폐쇄망 감사 로그 파이프라인 — 마스킹 배치 + Splunk' },
};

export const Career = {
  Component: ({ payload }: PropsWithChildren<{ payload: ICareer.Payload }>) => {
    if (payload.disable) {
      return null;
    }
    return (
      <div className="mt-4">
        <EmptyRowCol>
          {payload.list.map((company, index) => (
            <CompanyBlock key={index.toString()} company={company} />
          ))}
        </EmptyRowCol>
      </div>
    );
  },
};

function CompanyBlock({ company }: { company: ICareer.Company }) {
  return (
    <div className="mt-5 avoid-break-header">
      <Row>
        <Col>
          <h3 style={{ color: NAVY, borderBottom: `2px solid ${BLUE}`, paddingBottom: '0.4rem' }}>
            {company.name}{' '}
            <Badge color="info" style={{ fontSize: '45%', verticalAlign: 'middle' }}>
              {company.period}
            </Badge>
          </h3>
          <div
            className="avoid-break"
            style={{
              backgroundColor: '#EEF3F9',
              borderLeft: `4px solid ${BLUE}`,
              padding: '8px 14px',
              fontSize: '0.92em',
              marginBottom: '0.8rem',
            }}
          >
            {company.meta.map((m, index) => (
              <div key={index.toString()}>
                <span style={{ color: NAVY, fontWeight: 600 }}>{m.label}</span> {m.value}
              </div>
            ))}
          </div>
          <p style={{ color: 'gray' }}>{company.overview}</p>
          {company.lines.map((line, index) => renderLine(line, index))}
        </Col>
      </Row>
    </div>
  );
}

function renderLine(line: string, index: number) {
  const key = index.toString();
  if (line.startsWith('img:')) {
    const image = IMAGES[line.substring(4)];
    if (!image) {
      return null;
    }
    return (
      <div key={key} className="text-center avoid-break" style={{ margin: '0.8rem 0 1.2rem' }}>
        <img src={image.src} alt={image.alt} style={{ maxWidth: '100%' }} />
      </div>
    );
  }
  if (line.startsWith('### ')) {
    return (
      <h5 key={key} style={{ color: BLUE, fontWeight: 700, marginTop: '1.6rem' }}>
        {line.substring(4)}
      </h5>
    );
  }
  if (line.startsWith('**') && line.endsWith('**')) {
    return (
      <div key={key} style={{ color: NAVY, fontWeight: 600, marginTop: '0.8rem' }}>
        {line.substring(2, line.length - 2)}
      </div>
    );
  }
  if (line.startsWith('- ')) {
    return (
      <ul key={key} style={{ marginBottom: '0.2rem' }}>
        <li>{line.substring(2)}</li>
      </ul>
    );
  }
  if (line.startsWith('→')) {
    return (
      <div
        key={key}
        className="avoid-break"
        style={{
          backgroundColor: '#F5F7FA',
          borderLeft: `3px solid ${BLUE}`,
          color: NAVY,
          fontWeight: 500,
          padding: '3px 10px',
          margin: '0.4rem 0 0.6rem',
        }}
      >
        {line}
      </div>
    );
  }
  return (
    <p key={key} style={{ marginBottom: '0.4rem' }}>
      {line}
    </p>
  );
}
