import type { StoryObj } from "@storybook/react";
import ModelsOfCooperation from "~/components/sections/ModelsOfCooperation/ModelsOfCooperation";

const meta = {
  title: "Section/ModelsOfCooperation",
  component: ModelsOfCooperation,
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
    heading: "Title Models Of Cooperation",
  },
};
