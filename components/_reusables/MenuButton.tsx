export default function MenuButton({
  setShowMainNav,
  showMainNav,
}: MenuButtonProps) {
  return (
    <button className="icon-3xl bg-white text-gray-900 lg:hidden" onClick={() => setShowMainNav(!showMainNav)}>
      <span className="material-icons icon-lg">
        {showMainNav ? 'close' : 'menu'}
      </span>
    </button>
  );
}

interface MenuButtonProps {
  setShowMainNav: React.Dispatch<React.SetStateAction<boolean>>,
  showMainNav: boolean,
};