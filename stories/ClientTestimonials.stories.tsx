import type { StoryObj } from "@storybook/react";
import ClientTestimonials from "~/components/sections/ClientTestimonials";
import { testimonials } from "./utils/mockData";
import { renderWithContactProvider } from "./utils/renderWithContactProvider";

const meta = {
  title: "Section/ClientTestimonials",
  component: ClientTestimonials,
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
    testimonials: testimonials,
  },
};
