import type { StoryObj } from "@storybook/react";
import BaseCardSection from "~/components/sections/BaseCardSection/BaseCardSection";
import { cards, getStrapiImageData } from "./utils/mockData";

const meta = {
  title: "Section/WebDevelopmentManifesto",
  component: BaseCardSection,
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
    theme: "dark",
    items: cards,
    order: false,
    icon: { data: getStrapiImageData() },
    title: "Title Base Card Section",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    usedBy: "Used By 1, Used By 2",
  },
};
