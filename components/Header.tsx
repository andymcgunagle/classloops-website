import { useState } from "react";

import LogoAndName from "./LogoAndName";
import MainNav from "./MainNav";
import MenuButton from "./MenuButton";

import styled from 'styled-components';

const Wrapper = styled.header`
  animation: var(--animation-fade-in);
  margin-inline: auto;
  padding-block: 1rem;
  width: min(calc(100vw - 2rem), 1280px);

  @media only screen and (min-width: 768px) {
    padding-block: 0;
  }
`;

export default function Header() {
  const [showMainNav, setShowMainNav] = useState(false);

  return (
    <Wrapper >
      <div className="inner-wrapper row-between items-center">
        <div>
          <LogoAndName />
          <MenuButton setShowMainNav={setShowMainNav} showMainNav={showMainNav} />
        </div>
        <MainNav showMainNav={showMainNav} />
      </div>
    </Wrapper>
  );
};
