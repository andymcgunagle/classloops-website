import Link from 'next/link';
import styled from 'styled-components';
import FreeTrialButton from './FreeTrialButton';

const Nav = styled.nav<{ showMainNav: boolean; }>`
  display: ${props => props.showMainNav ? "flex" : "none"};
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;
  
  position: absolute;
  top: 4.5rem;
  right: 1rem;
  
  background-color: var(--color-white);
  border-radius: var(--border-radius-2);
  box-shadow: var(--box-shadow-8);
  padding: 2rem 2rem;
  border: var(--border-width-2) solid var(--color-brand-dark);
  z-index: 1;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    position: static;

    background-color: transparent;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    border: none;
  }
`;

export default function MainNav({
  mainNavRef,
  showMainNav
}: MainNavProps) {
  return (
    <Nav ref={mainNavRef} showMainNav={showMainNav}>
      <Link href="/about" passHref replace>
        <button className="text">
          About
        </button>
      </Link>
      <a
        href="https://app.classloops.com/sign-in"
        target="_blank"
        rel="noreferrer"
      >
        <button className="text">
          Log In
        </button>
      </a>
      <FreeTrialButton />
    </Nav>
  );
};

interface MainNavProps {
  mainNavRef: React.RefObject<HTMLElement>,
  showMainNav: boolean,
};
