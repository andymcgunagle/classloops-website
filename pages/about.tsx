import { ReactElement } from "react";

import Head from "next/head";

import styled from "styled-components";

import Avatar from "../components/Avatar";
import FreeTrialButton from "../components/FreeTrialButton";
import Layout from "../components/Layout";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-inline: auto;
  width: min(calc(100vw - 2rem), 1280px);
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  animation: var(--animation-fade-in);
  border-radius: 0 0 var(--border-radius-8) var(--border-radius-8);
  border: 1px solid var(--color-brand);
  border-top: var(--border-width-10) solid var(--color-brand);
  box-shadow: var(--box-shadow-8);
  margin-inline: auto;
  max-width: 600px;
  padding: 2rem;
  
  & > * {
    color: var(--color-brand);
    overflow-wrap: break-word;
    hyphens: auto;
    text-align: justify;
    letter-spacing: 0.75px;
    line-height: 1.5;
    word-spacing: -0.75px;
  }
  
  & > ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    padding-left: 1rem;
    text-align: start;
    list-style-type: square;
  }

  @media only screen and (min-width: 768px) {
    & > * {
    text-align: start;
    letter-spacing: 0.33px;
    line-height: 1.75;
    word-spacing: 0px;
  }
  }
`;

export default function About() {
  return (
    <div>
      <Head>
        <title>About ClassLoops: Software for Group Fitness Studios</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Info about ClassLoops founder Andy McGunagle. ClassLoops is a software that enables group fitness studios to loop multiple exercise demo videos and stream them to a TV during their fitness classes." />
      </Head>
      <main>
        <Section>
          <Card>
            <h2 className="font-10 font-weight-10">
              Hi! I&apos;m Andy.
            </h2>
            <Avatar />
            <p>
              Before teaching myself web development and building ClassLoops, I was...
            </p>
            <ul>
              <li>
                A <span className="font-weight-8">kinesiology major</span> at Cal Poly San Luis Obispo
              </li>

              <li>
                A personal trainer at <span className="font-weight-8">Equinox</span>
              </li>

              <li>
                An Account Executive at both <span className="font-weight-8">Mindbody</span> and <span className="font-weight-8">Xplor Technologies</span>.
              </li>
            </ul>
            <p>
              During my time at Xplor, I had multiple fitness studio owners ask if I knew of any software that would enable them to play <span className="font-weight-8">multiple exercise demo videos on a TV during their classes</span>.
            </p>
            <p>
              We couldn&apos;t find anything that did exactly what they wanted. So, after only a few months of teaching myself how to code, I decided to try building the solution myself.
            </p>
            <p>
              Months later, with a lot more experience under my belt, I rebuilt the entire project from scratch using <span className="font-weight-8">top notch technologies</span> that optimize the web app&apos;s performance and user experience.
            </p>
            <p>
              I&apos;m really proud of how it turned out - especially the <span className="font-weight-8">custom branding editor</span>, which was the top feature request from the studio owners and managers I initially chatted with.
            </p>
            <p>
              If you have any questions, please don&apos;t hesitate to <a href="mailto:amcgunagle@gmail" className="font-weight-8 underline">email me</a>. I&apos;m always happy to help.
            </p>
            <p>
              My hope is that ClassLoops helps you provide even more value to your class attendees. <span className="font-weight-8">Thanks for everything you do to make the world a healthier and happier place 🙌</span>
            </p>
            <FreeTrialButton />
          </Card>
        </Section>
      </main>
    </div>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};
