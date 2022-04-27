import { useState, useRef } from "react";

import Video from "./Video";

export default function WatchDemoButton() {
  const [showVideo, setShowVideo] = useState(false);

  const watchDemoButtonRef = useRef<HTMLButtonElement>(null);

  function handleClick() {
    setShowVideo(true);
  };

  return (
    <>
      <button
        className="outlined with-icon"
        onClick={handleClick}
        ref={watchDemoButtonRef}
      >
        <span className="material-icons-round">play_circle</span>
        Watch Demo
      </button>
      {showVideo && <Video setShowVideo={setShowVideo} watchDemoButtonRef={watchDemoButtonRef} />}
    </>
  );
};
