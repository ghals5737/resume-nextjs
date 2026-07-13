/* eslint-disable react/jsx-props-no-spreading */
import { Container } from 'reactstrap';

import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { Career } from '../component/career';
import { Footer } from '../component/footer';
import { Profile } from '../component/profile';
import { Style } from '../component/common/Style';
import Payload from '../payload';
import career from '../payload/career';

function CareerPage() {
  return (
    <>
      <NextSeo
        {...Payload._global.seo}
        title="황호민 | 경력기술서"
        openGraph={{ ...Payload._global.seo.openGraph, title: '황호민 | 경력기술서' }}
      />
      <Head>
        <title>황호민 | 경력기술서</title>
        <link rel="shortcut icon" href={Payload._global.favicon} />
      </Head>
      <Container style={Style.global}>
        <div className="nav-resume-links text-right mt-3">
          <a href="./">← 이력서로</a>
        </div>
        <Profile.Component payload={{ ...Payload.profile, image: undefined }} />
        <div className="mt-4">
          <h2 style={Style.blue}>경력기술서</h2>
        </div>
        <Career.Component payload={career} />
        <Footer.Component payload={Payload.footer} />
      </Container>
    </>
  );
}

export default CareerPage;
