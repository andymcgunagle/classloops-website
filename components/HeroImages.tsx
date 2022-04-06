import Image from "next/image";

import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  gap: var(--space-4);
  align-self: start;

  width: 80%;
  position: relative;

  & > * {
    animation: var(--animation-slide-in-up), var(--animation-fade-in);
    border-radius: var(--border-radius-2);
    box-shadow: var(--box-shadow-8);
  }

  &::before {
    position: absolute;

    animation: var(--animation-fade-in), var(--animation-spin);
    color: var(--clr-brand-700);
    content: "loop";
    display: inline-block;
    font-family: 'Material Icons Round';
    font-size: 20rem;
    height: 0;
    line-height: 0;
    width: fit-content;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    
    animation: var(--animation-fade-in);
    background-color: var(--clr-brand-200);
    border-radius: var(--border-radius-full);
    box-shadow: var(--box-shadow-10);
    height: 20rem;
    width: 20rem;
    z-index: -1;
  }

  @media (min-width: 768px) {
    align-self: center;
    width: 100%;

  }

  @media (min-width: 1280px) {
    &::before {
      font-size: 47.5rem;
    }

    &::after {
      height: 35rem;
      width: 35rem;
    }
  }
`;

const ScreenShotWrapper = styled.div`
  border: var(--border-width-10) solid var(--clr-gray-800);
  max-width: 400px;
  width: 100%;
  background-color: var(--clr-white);
  
  @media (min-width: 1280px) {
    position: absolute;
    bottom: 0rem;
    left: 2rem;
  }
`;

const ClassImageWrapper = styled.div`
  border: var(--border-width-10) solid var(--clr-gray-700);
  display: none;
  max-width: 400px;
  width: 100%;

  @media only screen and (min-width: 1280px) {
    position: absolute;
    top: -3rem;
    left: 10.5rem;
    display: block;
  }
`;

export default function HeroImages() {
  return (
    <Wrapper>
      <ScreenShotWrapper>
        <Image
          src="/classloops-screenshot.png"
          alt="classloops screenshot"
          layout="responsive"
          objectFit="cover"
          width={1909}
          height={922}
        />
      </ScreenShotWrapper>
      <ClassImageWrapper>
        <Image
          src="/exercise-class.jpg"
          alt="exercise class"
          layout="responsive"
          objectFit="cover"
          width={5900}
          height={3933}
        />
      </ClassImageWrapper>
    </Wrapper>
  );
};
