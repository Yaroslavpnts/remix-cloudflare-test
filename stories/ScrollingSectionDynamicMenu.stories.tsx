import type { StoryObj } from "@storybook/react";
import ScrollingSectionDynamicMenu from "~/components/sections/ScrollingSectionDynamicMenu/ScrollingSectionDynamicMenu";

const meta = {
  title: "Section/ScrollingSectionDynamicMenu",
  component: ScrollingSectionDynamicMenu,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {
    headings: [
      { title: "De Finibus Bonorum et Malorum 1" },
      { title: "De Finibus Bonorum et Malorum 2" },
      { title: "De Finibus Bonorum et Malorum 3" },
      { title: "De Finibus Bonorum et Malorum 4" },
    ],
    content: [
      {
        title: "De Finibus Bonorum et Malorum 1",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        title: "De Finibus Bonorum et Malorum 2",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        title: "De Finibus Bonorum et Malorum 3",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        title: "De Finibus Bonorum et Malorum 4",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
    ],
  },
};
