import type { StoryObj } from "@storybook/react";
import Cost from "~/components/sections/Cost/Cost";

const meta = {
  title: "Section/Cost",
  component: Cost,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    title: "Title Cost",
    percent: 50,
    percentText: "Percent text",
  },
};
