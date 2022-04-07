import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);

  max-width: 600px;
  text-align: center;
`;

export default function HeroTextContent() {
  return (
    <Wrapper className="card brand">

    </Wrapper>
  );
};
