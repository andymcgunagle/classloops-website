import { useState, useEffect } from "react";

export function useCopyAndConfirm(text: string) {
  const [confirmCopy, setConfirmCopy] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText(text);
    setConfirmCopy(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setConfirmCopy(false), 3000);
    return () => clearTimeout(timeout);
  }, [confirmCopy]);

  return { confirmCopy, copyText };
};
