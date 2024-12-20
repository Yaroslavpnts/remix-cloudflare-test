import type { StoryObj } from "@storybook/react";
import SmallProjectCase from "~/components/sections/SmallProjectCase/SmallProjectCase";
import { getStrapiImageData } from "./utils/mockData";

const meta = {
  title: "Section/SmallProjectCase",
  component: SmallProjectCase,
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
    order: "",
    items: {
      icon: { data: getStrapiImageData() },
      sub_description:
        "Sub description Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      button_text: "Open project case",
      button_link: "#",
      title: "De Finibus Bonorum et Malorum",
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
  },
};
