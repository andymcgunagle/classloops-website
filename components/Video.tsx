import { useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useHandleClickOutside } from "../hooks/useHandleClickOutside";

const GlobalStyle = createGlobalStyle`
  body:before{
    content:"";
    position:fixed;
    top : 0;
    left: 0;
    height: 100%;
    width: 100%;

    background-color: var(--color-brand);
    opacity: .75;
    pointer-events: none;
  }
`;

export const VideoContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  border-radius: var(--border-radius-8);
  box-shadow: var(--box-shadow-2);
  max-width: var(--breakpoint-4);
  overflow: hidden;
  width: calc(100vw - 2rem);
  background-color: var(--color-white);
  
  & iframe {
    aspect-ratio: 16 / 9;
    display: block;
    height: 100%;
    width: 100%;
  }
`;

export default function Video({
  setShowVideo,
  watchDemoButtonRef,
}: VideoProps) {
  const videoRef = useRef<HTMLDivElement>(null);
  useHandleClickOutside(videoRef, watchDemoButtonRef, setShowVideo);

  return (
    <VideoContainer ref={videoRef}>
      <GlobalStyle />
      <iframe
        src="https://www.youtube.com/embed/-reZ4JzZOkA?&autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture
          "
        allowFullScreen
      />
    </VideoContainer>
  );
};

interface VideoProps {
  setShowVideo: React.Dispatch<React.SetStateAction<boolean>>;
  watchDemoButtonRef: React.RefObject<HTMLButtonElement>;
};
