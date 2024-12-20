import type { StoryObj } from "@storybook/react";
import ContactFormFullPage from "~/components/sections/ContactFormFullPage/ContactFormFullPage";
import {
  ContactFormPageProvider,
  useContactFormPage,
} from "~/contexts/ContactFormPage.context";
import { testimonials } from "./utils/mockData";

const Button = () => {
  const { setIsShownContactForm } = useContactFormPage();
  return (
    <button onClick={() => setIsShownContactForm((s) => !s)}>
      Open Contact Form
    </button>
  );
};

const meta = {
  title: "Section/ContactFormFullPage",
  component: ContactFormFullPage,
  decorators: [
    (Component) => (
      <ContactFormPageProvider>
        <Button />
        <Component />
      </ContactFormPageProvider>
    ),
  ],
  argTypes: {
    theme: {
      options: ["light", "dark"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {
    testimonials: testimonials,
  },
};
