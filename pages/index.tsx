import type { NextPage } from 'next';
import Head from 'next/head';

import Footer from './../components/_reusables/Footer';
import Header from '../components/_reusables/Header';
import HeroImages from './../components/HeroImages';
import HeroTextContent from './../components/HeroTextContent';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Classloops</title>
        <meta name="description" content="Software that enables fitness studios to loop multiple exercise demo videos on a TV during their classes." />
      </Head>

      <Header />

      <main className="bg-white content-wrapper grid gap-8 space-y-2 md:space-y-0 md:grid md:grid-cols-2 md:items-center md:gap-24 md:min-h-[calc(100vh-6rem)] md:pb-44 xl:pb-28 xl:min-h-[calc(100vh-6rem)]">
        <HeroTextContent />
        <HeroImages />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
