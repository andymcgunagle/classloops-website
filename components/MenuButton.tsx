import { useEffect } from 'react';

import { useRouter } from 'next/router';

import styled from 'styled-components';

const Wrapper = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 1rem;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export default function MenuButton({
  setShowMainNav,
  showMainNav,
  menuButtonRef,
}: MenuButtonProps) {
  const { events } = useRouter();

  useEffect(() => {
    events.on('routeChangeComplete', () => setShowMainNav(false));
  }, [events, setShowMainNav]);

  return (
    <Wrapper
      className="shape circle large"
      onClick={() => setShowMainNav(!showMainNav)}
      ref={menuButtonRef}
    >
      <span className="material-icons-round">
        {showMainNav ? 'close' : 'menu'}
      </span>
    </Wrapper>
  );
}

interface MenuButtonProps {
  setShowMainNav: React.Dispatch<React.SetStateAction<boolean>>,
  showMainNav: boolean,
  menuButtonRef: React.RefObject<HTMLButtonElement>,
};