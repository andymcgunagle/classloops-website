import Image from "next/image";

import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: var(--color-white);
  border-radius: var(--border-radius-2);
  border: var(--border-width-10) solid var(--color-brand);
  box-shadow: var(--box-shadow-4);
  width: 100%;
  max-width: 400px;
`;

export default function Screenshot() {
  return (
    <Wrapper>
      <Image
        src="/classloops-screenshot.png"
        alt="ClassLoops screenshot"
        layout="responsive"
        objectFit="cover"
        width={3584}
        height={1889}
      />
    </Wrapper>
  );
};
