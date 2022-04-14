import Image from "next/image";

import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: var(--border-radius-full);
  box-shadow: var(--box-shadow-4);
  margin-inline: auto;
  width: min(50vw, 300px);
  
  & > * {
    border-radius: var(--border-radius-full);
  }
`;

export default function Avatar() {
  return (
    <Wrapper>
      <Image
        src="/andy-mcgunagle.jpeg"
        alt="Andy McGunagle hiking in San Luis Obispo, CA"
        layout="responsive"
        width={640}
        height={635}
      />
    </Wrapper>
  );
};
