import { ContactFormPageProvider } from "~/contexts/ContactFormPage.context";

export const renderWithContactProvider = (Component) => (
  <ContactFormPageProvider>
    <Component />
  </ContactFormPageProvider>
);
