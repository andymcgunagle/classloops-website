import { useEffect } from 'react';

import { useRouter } from 'next/router';

import styled from 'styled-components';

const Wrapper = styled.button`
  position: absolute;
  top: 1.75rem;
  right: 1rem;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export default function MenuButton({
  setShowMainNav,
  showMainNav,
}: MenuButtonProps) {
  const { events } = useRouter();

  useEffect(() => {
    events.on('routeChangeComplete', () => setShowMainNav(false));
  }, [events, setShowMainNav]);

  return (
    <Wrapper
      onClick={() => setShowMainNav(!showMainNav)}
      className="shape circle large"
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
};