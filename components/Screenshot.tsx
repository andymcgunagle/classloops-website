import Image from "next/image";

import styled from 'styled-components';

const Wrapper = styled.div`
  animation: var(--animation-slide-in-right);
  background-color: var(--color-white);
  background-color: var(--color-white);
  border-radius: var(--border-radius-4);
  border: var(--border-width-10) solid var(--color-brand);
  box-shadow: var(--box-shadow-4);
  width: 100%;
  
  @media (min-width: 1024px) {
    position: absolute;
    top: -5rem;
    left: -7.5rem;

    max-width: 300px;
    transform: rotate(-15deg);
  }
`;

export default function Screenshot() {
  return (
    <Wrapper>
      <Image
        src="/classloops-screenshot.png"
        alt="classloops screenshot"
        layout="responsive"
        objectFit="cover"
        width={1909}
        height={922}
      />
    </Wrapper>
  );
};
