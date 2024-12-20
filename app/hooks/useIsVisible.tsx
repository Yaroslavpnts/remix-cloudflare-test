import { useEffect, useState } from "react";

export const useIsVisible = (ref: React.RefObject<HTMLElement>) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const onScrollHandler = () => {
      const cardRecTop = ref.current!.getBoundingClientRect().top;

      const cardRecBottom = ref.current!.getBoundingClientRect().bottom;

      const isCardPartiallyVisible =
        (cardRecTop > 0 && cardRecTop < window.innerHeight) ||
        (cardRecTop < 0 && cardRecBottom > 0);

      setIsVisible(isCardPartiallyVisible);
    };

    window.addEventListener("scroll", onScrollHandler);

    return () => {
      window.removeEventListener("scroll", onScrollHandler);
    };
  }, []);

  return isVisible;
};
