import { useState } from "react";

import LogoAndName from "./LogoAndName";
import MainNav from "./MainNav";
import MenuButton from "./MenuButton";

import styled from 'styled-components';

const Wrapper = styled.header`
  animation: var(--animation-slide-in-down), var(--animation-fade-in);
  padding: var(--space-6);
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
