export default function HeroTextContent() {
  return (
    <div className="flex flex-col gap-4 lg:self-center max-w-lg">
      <h1 className="heading-h1 flex flex-col">
        <span>Easily loop exercise demo videos during your classes.</span>
      </h1>
      <p className="flex flex-wrap gap-1">
        <span>Simultaneously loop up to 9 YouTube or Vimeo videos.</span>
      </p>
      <div className="flex gap-4 animate-slide-up">
        <button className="button-standard">
          <a
            href="https://app.classloops.com"
            target="_blank"
            rel="noreferrer"
          >
            Get started
          </a>
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
