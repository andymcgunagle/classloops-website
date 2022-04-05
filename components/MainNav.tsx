import styled from 'styled-components';

const Nav = styled.nav<MainNavProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--space-4);

  position: absolute;
  top: var(--space-12);
  right: var(--space-2);

  display: ${props => props.showMainNav ? "flex" : "none"};

  @media only screen and (min-width: 768px) {
    flex-direction: row;

    position: static;
    
    display: flex;
  }
`;

export default function MainNav({
  showMainNav
}: MainNavProps) {
  return (
    <Nav showMainNav={showMainNav}>
      <button className="text">
        <a
          href="https://app.classloops.com/sign-in"
          target="_blank"
          rel="noreferrer"
        >
          Log In
        </a>
      </button>
      <button>
        <a
          href="https://app.classloops.com/sign-up"
          target="_blank"
          rel="noreferrer"
        >
          Get started
        </a>
      </button>
    </Nav>
  );
};

interface MainNavProps {
  showMainNav: boolean,
};