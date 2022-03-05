import type { NextPage } from 'next';
import Head from 'next/head';

import Footer from './../components/_resuables/Footer';
import Header from '../components/_resuables/Header';
import HeroImages from './../components/HeroImages';
import HeroTextContent from './../components/HeroTextContent';
import Section from '../components/_resuables/Section';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Write title here</title>
        <meta name="description" content="Write description here" />
      </Head>

      <Header />

      <main>
        <Section
          additionalContentWrapperStyles="lg:min-h-[65vh] grid place-items-center lg:grid-cols-2 lg:gap-4"
          additionalSectionStyles="min-h-[40vh] md:min-h-[30vh] lg:min-h-[80vh]"
        >
          <HeroTextContent />
          <HeroImages />
        </Section>

        <Section
          additionalSectionStyles="bg-gray-900 text-gray-50"
        >
          <div className="content-wrapper">
            HELLO, WORLD!
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
