import styled from 'styled-components';

const Wrapper = styled.div`
  animation: var(--animation-slide-in-up), var(--animation-fade-in);
  z-index: 9998;
`;

export default function HeroTextContent() {
  return (
    <Wrapper className="card brand column-left gap-4 max-width-600">
      <h1 className="font-14">
        Easily loop exercise demo videos during your classes.
      </h1>
      <div className="column-left gap-0">
        <span>Simultaneously loop up to 9 YouTube or Vimeo videos.</span>
        <span>Airplay from a tablet or computer to a TV in your studio.</span>
      </div>
      <div>
        <a
          href="https://app.classloops.com/sign-up"
          target="_blank"
          rel="noreferrer"
        >
          <button className="light">
            Get started
          </button>
        </a>
        {/* <button className="button-outlined button-with-icon">
          <span className="material-icons icon-sm icon-green">
            play_arrow
          </span>
          <span>See how it works</span>
        </button> */}
      </div>
    </Wrapper>
  );
};
