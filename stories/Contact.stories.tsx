import type { StoryObj } from "@storybook/react";
import Contact from "~/components/sections/Contact/Contact";
import { renderWithContactProvider } from "./utils/renderWithContactProvider";

const meta = {
  title: "Section/Contact",
  component: Contact,
  decorators: [renderWithContactProvider],
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
    title: "Have an idea? \n Let’s work together",
  },
};
