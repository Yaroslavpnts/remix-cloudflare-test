import type { StoryObj } from "@storybook/react";
import TechStack from "~/components/sections/TechStack/TechStack";
import { getStrapiImageData } from "./utils/mockData";

const meta = {
  title: "Section/TechStack",
  component: TechStack,
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
    items: [
      {
        title: "React",
        link: "#",
        icon: { data: getStrapiImageData("icon") },
      },
      {
        title: "Remix",
        link: "#",
        icon: { data: getStrapiImageData("icon") },
      },
      {
        title: "Node",
        link: "#",
        icon: { data: getStrapiImageData("icon") },
      },
    ],
    title: "Title Tech Stack",
  },
};
