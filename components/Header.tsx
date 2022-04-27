import { useRef, useState } from "react";

import { useHandleClickOutside } from "../hooks/useHandleClickOutside";

import LogoAndName from "./LogoAndName";
import MainNav from "./MainNav";
import MenuButton from "./MenuButton";

import styled from 'styled-components';

const Wrapper = styled.header`
  animation: var(--animation-fade-in);
  margin-inline: auto;
  padding-bottom: 1rem;
  width: min(calc(100vw - 2rem), 1280px);

  @media only screen and (min-width: 768px) {
    padding-top: 0;
  }
`;

export default function Header() {
  const [showMainNav, setShowMainNav] = useState(false);

  const mainNavRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  useHandleClickOutside(mainNavRef, menuButtonRef, setShowMainNav);

  return (
    <Wrapper >
      <div className="inner-wrapper row-between items-center">
        <div>
          <LogoAndName />
          <MenuButton
            menuButtonRef={menuButtonRef}
            setShowMainNav={setShowMainNav}
            showMainNav={showMainNav}
          />
        </div>
        <MainNav
          mainNavRef={mainNavRef}
          showMainNav={showMainNav}
        />
      </div>
    </Wrapper>
  );
};
