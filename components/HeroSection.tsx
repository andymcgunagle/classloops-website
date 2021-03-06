import FreeTrialButton from './FreeTrialButton';
import Screenshot from './Screenshot';
import WatchDemoButton from './WatchDemoButton';

import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: calc(90vh - 1rem);
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
  position: relative;
  text-align: center;
  
  & > * {
    color: var(--color-brand);
  }
`;

const Icon = styled.span`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;

  animation: var(--animation-spin);
  background-color: var(--color-brand);
  border-radius: var(--border-radius-full);
  color: var(--color-brand-light);
  height: 4rem !important;
  width: 4rem !important;
  font-size: 3rem !important;
`;

const Container = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function HeroSection() {


  return (
    <Section>
      <Card>
        <Icon className="material-icons-round">loop</Icon>
        <h2 className="font-10 font-weight-8">
          Easily loop exercise demo videos during your classes.
        </h2>
        <Screenshot />
        <ul>
          <li>
            Simultaneously loop up to 12 <span className="font-weight-8">YouTube</span> or <span className="font-weight-8">Vimeo</span> videos.
          </li>
          <li>
            <span className="font-weight-8">Airplay</span> or <span className="font-weight-8">Chromecast</span> from a phone, tablet, or computer to a TV in your studio.
          </li>
          <li>
            <span className="font-weight-8">1000+</span> high-quality exercise demo videos preloaded.
          </li>
          <li>
            <span className="font-weight-8">Add your own videos</span> using their YouTube or Vimeo links - no uploading required.
          </li>
          <li>
            Add your own <span className="font-weight-8">custom branding</span> in minutes.
          </li>
        </ul>
        <Container>
          <WatchDemoButton />
          <FreeTrialButton />
        </Container>
      </Card>
    </Section>
  );
};
