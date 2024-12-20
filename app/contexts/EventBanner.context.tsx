import { createContext, useContext, useMemo, useState } from "react";

type TEventBanner = {
  isShownEventBanner: boolean;
  setisShownEventBanner: (isOpen: boolean) => void;
};

const EventBannerContext = createContext<TEventBanner | undefined>(undefined);

export const EventBannerProvider = ({ children }: any) => {
  const [isShownEventBanner, setisShownEventBanner] = useState(false);

  const context = useMemo(
    () => ({
      isShownEventBanner,
      setisShownEventBanner,
    }),
    [isShownEventBanner, setisShownEventBanner]
  );

  return (
    <EventBannerContext.Provider value={context}>
      {children}
    </EventBannerContext.Provider>
  );
};

export const useEventBanner = () => {
  const context = useContext(EventBannerContext);

  if (!context) {
    throw new Error(
      "useEventBanner must be used inside an appropriate Provider"
    );
  }

  return context;
};
