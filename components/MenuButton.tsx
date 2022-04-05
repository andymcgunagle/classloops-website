import styled from 'styled-components';

const Wrapper = styled.button`
  position: absolute;
  top: var(--space-6);
  right: var(--space-6);

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export default function MenuButton({
  setShowMainNav,
  showMainNav,
}: MenuButtonProps) {
  return (
    <Wrapper
      onClick={() => setShowMainNav(!showMainNav)}
      className="shape circle"
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