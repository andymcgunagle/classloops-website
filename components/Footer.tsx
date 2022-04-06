import LogoAndName from "./LogoAndName";

import styled from 'styled-components';

const Wrapper = styled.footer`
  background-color: var(--clr-brand-700);
  padding: var(--space-6);

  & > .inner-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     gap: var(--space-2);
  }

  & * {
    color: var(--clr-white);
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
