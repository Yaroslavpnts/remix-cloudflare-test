import { useCallback, useEffect, useState } from "react";

export const useScrollValue = () => {
  const [scrollValue, setScrollValue] = useState(0);

  const updateScrollCompletion = useCallback(() => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    setScrollValue(winScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateScrollCompletion);

    updateScrollCompletion();

    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, [updateScrollCompletion]);

  return scrollValue;
};
