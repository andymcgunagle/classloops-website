import LogoAndName from "./LogoAndName";

import styled from 'styled-components';

const Wrapper = styled.footer`
  background-color: var(--color-brand-700);
  padding: 1rem;
  
  & > .inner-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  & * {
    color: var(--color-white);
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <div className="inner-wrapper">
        <LogoAndName />
        <a href="https://www.andymcgunagle.com/" target="_blank" rel="noreferrer">
          Created by Andy McGunagle
        </a>
      </div>
    </Wrapper>
  );
};
