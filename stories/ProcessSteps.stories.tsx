import type { StoryObj } from "@storybook/react";
import ProcessSteps from "~/components/sections/ProcessSteps";

const meta = {
  title: "Section/ProcessSteps",
  component: ProcessSteps,
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
    items: [
      { text: "De Finibus Bonorum et Malorum 1" },
      { text: "De Finibus Bonorum et Malorum 2" },
      { text: "De Finibus Bonorum et Malorum 3" },
      { text: "De Finibus Bonorum et Malorum 4" },
    ],
    title: "Title Process Steps",
  },
};
