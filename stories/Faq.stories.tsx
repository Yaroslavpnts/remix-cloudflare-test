import type { StoryObj } from "@storybook/react";
import Faq from "~/components/sections/Faq";

const meta = {
  title: "Section/Faq",
  component: Faq,
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
    title: "Title Faq",
    description: "De Finibus Bonorum et Malorum",
    items: [
      {
        title: "De Finibus Bonorum et Malorum",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        title: "De Finibus Bonorum et Malorum",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        title: "De Finibus Bonorum et Malorum",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        title: "De Finibus Bonorum et Malorum",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
    ],
  },
};
