export default function MainNav({
  showMainNav
}: MainNavProps) {
  return (
    <nav className={`${showMainNav ? "flex" : "hidden lg:flex"} flex-col gap-6 absolute top-20 right-8 bg-white border-2 border-gray-900 p-4 w-[calc(100%-4rem)] max-w-md shadow-xl lg:flex-row lg:items-center lg:gap-10 animate-fade-in lg:static lg:max-w-fit lg:p-0 lg:shadow-none lg:border-none`}>
      <button className="button-text">
        <a>Product</a>
      </button>
      <button className="button-text">
        <a>About</a>
      </button>
      <button className="button-text">
        <a>Blog</a>
      </button>
      <button className="button-text">
        <a>Log In</a>
      </button>
      <button className="button-standard">
        <a>Request a demo</a>
      </button>
    </nav>
  );
};

interface MainNavProps {
  showMainNav: boolean,
};
