import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '../components/_reusables/Header';
import HeroImages from './../components/HeroImages';
import HeroTextContent from './../components/HeroTextContent';

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Classloops</title>
        <meta name="description" content="Write description here" />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-evenly gap-8 content-wrapper h-[80%] md:grid md:grid-cols-2 md:gap-24">
        <HeroTextContent />
        <HeroImages />
      </main>
    </div>
  );
};

export default Home;
