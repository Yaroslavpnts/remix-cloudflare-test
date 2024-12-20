import type { StoryObj } from "@storybook/react";
import OurApproach from "~/components/sections/OurApproach/OurApproach";

const meta = {
  title: "Section/OurApproach",
  component: OurApproach,
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
    title: "Title Our Approach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    iconDesktop: null,
    iconDesktopLight: null,
    iconMobile: null,
    iconMobileLight: null,
  },
};
