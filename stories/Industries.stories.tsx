import type { StoryObj } from "@storybook/react";
import CardsSection from "~/components/sections/CardsSection/CardsSection";
import { cards } from "./utils/mockData";

const meta = {
  title: "Section/Industries",
  component: CardsSection,
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    heading: "Title Cards Section",
    items: cards,
    mode: "card",
    title_is_part_of_grid: false,
  },
};
