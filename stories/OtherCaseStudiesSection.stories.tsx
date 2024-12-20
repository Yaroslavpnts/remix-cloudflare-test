import type { StoryObj } from "@storybook/react";
import OtherCaseStudiesSection from "~/components/sections/OtherCaseStudiesSection/OtherCaseStudiesSection";
import { caseStidies } from "./utils/mockData";

const meta = {
  title: "Section/OtherCaseStudiesSection",
  component: OtherCaseStudiesSection,
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
    title: "Title Other Case Studies Section",
    theme: "light",
    items: {
      data: caseStidies,
    },
  },
};

export const LessThan4: Story = {
  args: {
    title: "Title Other Case Studies Section",
    theme: "dark",
    items: {
      data: caseStidies?.slice(0, 3),
    },
  },
};
