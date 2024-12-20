import React, { createContext, useContext, useMemo, useState } from "react";
import { GtmEvent } from "~/utils/gtmSendEvent";

type TContactFormPage = {
  isShownContactForm: boolean;
  setIsShownContactForm: (isOpen: boolean) => void;
  event: GtmEvent | null;
  setEvent: (event: null | GtmEvent) => void;
};

const ContactFormPageContext = createContext<TContactFormPage | undefined>(
  undefined
);

export const ContactFormPageProvider = ({ children }: any) => {
  const [isShownContactForm, setIsShownContactForm] = useState(false);
  const [event, setEvent] = useState<null | GtmEvent>(null);

  const context = useMemo(
    () => ({
      isShownContactForm,
      setIsShownContactForm,
      event,
      setEvent,
    }),
    [isShownContactForm, setIsShownContactForm]
  );

  return (
    <ContactFormPageContext.Provider value={context}>
      {children}
    </ContactFormPageContext.Provider>
  );
};

export const useContactFormPage = () => {
  const context = useContext(ContactFormPageContext);

  if (!context) {
    throw new Error(
      "useContactFormPage must be used inside an appropriate Provider"
    );
  }

  return context;
};
