import styled from 'styled-components';

const Nav = styled.nav<MainNavProps>`
  display: ${props => props.showMainNav ? "flex" : "none"};
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;
  
  position: absolute;
  top: 5.25rem;
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
  showMainNav
}: MainNavProps) {
  return (
    <Nav showMainNav={showMainNav}>
      <a
        href="https://app.classloops.com/sign-in"
        target="_blank"
        rel="noreferrer"
      >
        <button className="text">
          Log In
        </button>
      </a>
      <a
        href="https://app.classloops.com/sign-up"
        target="_blank"
        rel="noreferrer"
      >
        <button>
          Free Trial
        </button>
      </a>
    </Nav>
  );
};

interface MainNavProps {
  showMainNav: boolean,
};
