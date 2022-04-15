import { ReactElement } from 'react';

import Head from 'next/head';

import HeroSection from '../components/HeroSection';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ClassLoops: Software for Group Fitness Studios</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Software that enables group fitness studios to loop multiple exercise demo videos and stream them to a TV during their fitness classes." />
      </Head>
      <main>
        <HeroSection />
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
