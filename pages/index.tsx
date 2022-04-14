import { ReactElement } from 'react';

import Head from 'next/head';

import styled from 'styled-components';

import HeroCard from '../components/HeroCard';
import Layout from '../components/Layout';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 90vh;
  margin-inline: auto;
  padding-block: 1rem;
  width: min(calc(100vw - 2rem), 1280px);
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>ClassLoops: Software for Group Fitness Studios</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Software that enables group fitness studios to loop multiple exercise demo videos and stream them to a TV during their fitness classes." />
      </Head>
      <main>
        <Section>
          <HeroCard />
        </Section>
      </main>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};
