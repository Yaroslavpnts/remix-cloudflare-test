import type { StoryObj } from "@storybook/react";
import TechnologiesAndToolsSection from "~/components/sections/TechnologiesAndToolsSection/TechnologiesAndToolsSection";
import { getStrapiImageData } from "./utils/mockData";

const meta = {
  title: "Section/TechnologiesAndTools",
  component: TechnologiesAndToolsSection,
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
    items: {
      data: [
        {
          attributes: {
            icon: { data: getStrapiImageData("icon") },
            title: "React",
            category: "FrontEnd",
            subcategory: "Framework",
          },
        },
        {
          attributes: {
            icon: { data: getStrapiImageData("icon") },
            title: "React Native",
            category: "FrontEnd",
            subcategory: "Framework",
          },
        },
        {
          attributes: {
            icon: { data: getStrapiImageData("icon") },
            title: "Node",
            category: "BackEnd",
            subcategory: "Framework",
          },
        },
        {
          attributes: {
            icon: { data: getStrapiImageData("icon") },
            title: "Nest",
            category: "BackEnd",
            subcategory: "Framework",
          },
        },
      ],
    },
    title: "Title Technologies And Tools",
  },
};
