import type { NextPage } from 'next';
import Head from 'next/head';

import styled from 'styled-components';

import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroImages from './../components/HeroImages';
import HeroTextContent from './../components/HeroTextContent';

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  
  height: calc(100vh - var(--space-14));
  margin: 0 auto;
  max-width: var(--breakpoint-8);
  padding: 0 var(--space-6);
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
    padding-bottom: var(--space-12);
  }
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ClassLoops</title>
        <meta name="description" content="Software that enables fitness studios to loop multiple exercise demo videos on a TV during their classes." />
      </Head>

      <Header />

      <Main>
        <HeroTextContent />
        <HeroImages />
      </Main>

      <Footer />
    </div>
  );
};

export default Home;
