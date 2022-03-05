import { useState } from "react";

import LogoAndName from "./LogoAndName";
import MainNav from "./MainNav";
import MenuButton from "./MenuButton";

export default function Header() {
  const [showMainNav, setShowMainNav] = useState(false);

  return (
    <header className="flex flex-col gap-4 lg:flex-row lg:justify-between relative content-wrapper">
      <div className="flex justify-between">
        <LogoAndName />
        <MenuButton setShowMainNav={setShowMainNav} showMainNav={showMainNav} />
      </div>
      <MainNav showMainNav={showMainNav} />
    </header>
  );
};
