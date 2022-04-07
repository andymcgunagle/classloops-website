import type { NextPage } from 'next';
import Head from 'next/head';

import styled from 'styled-components';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Screenshot from '../components/Screenshot';

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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-6);

  margin-inline: auto;
  max-width: 600px;
  position: relative;
  text-align: center;
  
  & > * {
    color: var(--clr-brand-700);
  }

  & > span.material-icons-round {
    animation: var(--animation-spin);
    background-color: var(--clr-brand-700);
    border-radius: var(--border-radius-full);
    color: var(--clr-brand-50);
    height: var(--space-12);
    width: var(--space-12);
  }

  @media (min-width: 1024px) {
    gap: var(--space-4);
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
          <Card className="card">
            <span className="material-icons-round font-20">loop</span>
            <h2 className="font-14 font-weight-10">
              Easily loop exercise demo videos during your classes.
            </h2>
            <Screenshot />
            <p className="font-6">
              Simultaneously loop up to 9 <span className="font-weight-10">YouTube</span> or <span className="font-weight-10">Vimeo</span> videos.
            </p>
            <p className="font-6">
              <span className="font-weight-10">Airplay</span> from a phone, tablet, or computer to a TV in your studio.
            </p>
            <p className="font-6">
              Add your own <span className="font-weight-10">custom branding</span> in minutes.
            </p>
            <a
              href="https://app.classloops.com/sign-up"
              target="_blank"
              rel="noreferrer"
            >
              <button className="font-6">
                Free Trial
              </button>
            </a>
          </Card>
        </Section>
      </main>

      <Footer />
    </Page>
  );
};

export default Home;
