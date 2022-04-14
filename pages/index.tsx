import type { NextPage } from 'next';
import Head from 'next/head';

import styled from 'styled-components';

import Header from '../components/Header';
import HeroCard from '../components/HeroCard';

const Page = styled.div`
  min-height: calc(100vh - 2rem);
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 90vh;
  margin-inline: auto;
  padding-block: 2rem;
  width: min(calc(100vw - 2rem), 1280px);
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
    </Page>
  );
};

export default Home;
