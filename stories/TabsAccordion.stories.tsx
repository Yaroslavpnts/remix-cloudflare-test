import type { StoryObj } from "@storybook/react";
import TabsAccordion from "~/components/sections/TabsAccordion/TabsAccordion";

const meta = {
  title: "Section/TabsAccordion",
  component: TabsAccordion,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {
    heading: "De Finibus Bonorum et Malorum",
    items: [
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
