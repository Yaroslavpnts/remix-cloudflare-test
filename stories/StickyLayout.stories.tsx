import type { StoryObj } from "@storybook/react";
import { StickyLayout } from "~/components/sections/StickyLayout/StickyLayout";

const meta = {
  title: "Section/StickyLayout",
  component: StickyLayout,
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
    title: "De Finibus Bonorum et Malorum",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
};
