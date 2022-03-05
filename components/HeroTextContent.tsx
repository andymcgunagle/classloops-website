export default function HeroTextContent() {
  return (
    <div className="flex flex-col gap-4 lg:self-center">
      <h1 className="heading-h1 flex flex-col">
        <span>This is what we do.</span>
        <span>And we do it better than <span className="font-extrabold italic">everyone.</span></span>
      </h1>
      <p className="flex flex-wrap gap-1">
        <span>Here is some info about our product.</span>
        <span>And this is some more info about our product.</span>
      </p>
      <div className="flex gap-4 animate-slide-up">
        <button className="button-standard">
          Request a demo
        </button>
        <button className="button-outlined button-with-icon">
          <span className="material-icons icon-sm icon-green">
            play_arrow
          </span>
          <span>See how it works</span>
        </button>
      </div>
    </div>
  );
};
