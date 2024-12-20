import type { StoryObj } from "@storybook/react";
import TextTwoColumns from "~/components/sections/TextTwoColumns/TextTwoColumns";

const meta = {
  title: "Section/TextTwoColumns",
  component: TextTwoColumns,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {
    title: "Title Text Two Columns",
    description: "De Finibus Bonorum et Malorum",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
};
