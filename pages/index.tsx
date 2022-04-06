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
  gap: var(--space-16);
  
  height: 100vh;
  margin: 0 auto;
  padding: var(--space-6) var(--space-4);
  padding-bottom: var(--space-16);
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-12);

    height: calc(100vh - var(--space-14));
    padding: 0 var(--space-4);
    padding-bottom: var(--space-12);
    max-width: var(--breakpoint-8);
  }
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ClassLoops</title>
        <meta name="description" content="Software that enables fitness studios to loop multiple exercise demo videos on a TV during their classes." />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
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
