export default function MainNav({
  showMainNav
}: MainNavProps) {
  return (
    <nav className={`${showMainNav ? "flex" : "hidden lg:flex"} flex-col items-end gap-4 absolute top-24 right-8 bg-white border-2 border-gray-900 rounded-md p-4 lg:w-[calc(100%-4rem)] max-w-md shadow-xl lg:flex-row lg:items-center lg:gap-10 animate-fade-in lg:static lg:max-w-fit lg:p-0 lg:shadow-none lg:border-none`}>
      <button className="button-text">
        <a
          href="https://app.classloops.com/sign-in"
          target="_blank"
          rel="noreferrer"
        >
          Log In
        </a>
      </button>
      <button className="button-standard">
        <a
          href="https://app.classloops.com/sign-up"
          target="_blank"
          rel="noreferrer"
        >
          Get started
        </a>
      </button>
    </nav>
  );
};

interface MainNavProps {
  showMainNav: boolean,
};
