import LogoAndName from "./LogoAndName";

import styled from 'styled-components';

const Wrapper = styled.footer`
  background-color: var(--clr-brand-900);
  padding: var(--space-6);

  & * {
    color: var(--clr-white);
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <div className="inner-wrapper column-right">
        <LogoAndName />
        <a href="https://www.andymcgunagle.com/" target="_blank" rel="noreferrer">
          Created by Andy McGunagle
        </a>
      </div>
    </Wrapper>
  );
};
