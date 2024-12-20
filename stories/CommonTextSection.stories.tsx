import type { StoryObj } from "@storybook/react";
import CommonTextSection from "~/components/sections/CommonTextSection";

const meta = {
  title: "Section/CommonTextSection",
  component: CommonTextSection,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {
    body: "<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>",
  },
};
