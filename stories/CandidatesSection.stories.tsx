import type { StoryObj } from "@storybook/react";
import CandidatesSection from "~/components/sections/CandidatesSection/CandidatesSection";
import { team } from "./utils/mockData";

const meta = {
  title: "Section/CandidatesSection",
  component: CandidatesSection,
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
    theme: "light",
    title: "Title Candidates Section",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    setIsShown: () => null,
    items: {
      data: team,
    },
  },
};
