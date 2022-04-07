import styled from 'styled-components';

import Screenshot from './Screenshot';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-6);

  animation: var(--animation-fade-in);
  margin-inline: auto;
  max-width: 600px;
  position: relative;
  text-align: center;
  
  & > * {
    color: var(--clr-brand-700);
  }

  & > span.material-icons-round {
    display: flex;
    justify-content: center;
    align-items: center;

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

export default function HeroCard() {
  return (
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
  );
};
