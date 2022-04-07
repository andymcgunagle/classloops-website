import type { NextPage } from 'next';
import Head from 'next/head';

import styled from 'styled-components';

import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroCard from '../components/HeroCard';

const Page = styled.div`
  min-height: 100vh;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 90vh;
  margin-inline: auto;
  padding-block: var(--space-8);
  width: min(calc(100vw - var(--space-6) * 2), 1280px);

  @media (min-width: 1024px) {
    padding-block: var(--space-22);
  }
`;

const Home: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>ClassLoops</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Software that enables fitness studios to loop multiple exercise demo videos on a TV during their classes." />
      </Head>

      <Header />

      <main>
        <Section>
          <HeroCard />
        </Section>
      </main>

      <Footer />
    </Page>
  );
};

export default Home;
