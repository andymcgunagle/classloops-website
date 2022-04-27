import { useEffect } from "react";

export function useHandleClickOutside(
  ref: React.RefObject<HTMLElement>,
  buttonRef: React.RefObject<HTMLButtonElement>,
  handler: React.Dispatch<React.SetStateAction<boolean>>,
) {

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        console.log("clicked outside");
        handler(false);
      };
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, handler, buttonRef]);

};