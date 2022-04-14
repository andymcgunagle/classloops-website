import styled from 'styled-components';

import Screenshot from './Screenshot';

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

  & > span.material-icons-round {
    display: flex;
    justify-content: center;
    align-items: center;

    animation: var(--animation-spin);
    background-color: var(--color-brand);
    border-radius: var(--border-radius-full);
    color: var(--color-brand-light);
    height: 4rem;
    width: 4rem;
    font-size: 3rem;
  }
`;

export default function HeroCard() {
  return (
    <Card>
      <span className="material-icons-round">loop</span>
      <h2 className="font-10 font-weight-10">
        Easily loop exercise demo videos during your classes.
      </h2>
      <Screenshot />
      <p>
        Simultaneously loop up to 9 <span className="font-weight-10">YouTube</span> or <span className="font-weight-10">Vimeo</span> videos.
      </p>
      <p>
        <span className="font-weight-10">Airplay</span> from a phone, tablet, or computer to a TV in your studio.
      </p>
      <p>
        Add your own <span className="font-weight-10">custom branding</span> in minutes.
      </p>
      <a
        href="https://app.classloops.com/sign-up"
        target="_blank"
        rel="noreferrer"
      >
        <button>
          Free Trial
        </button>
      </a>
    </Card>
  );
};
