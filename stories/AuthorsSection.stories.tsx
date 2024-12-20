import type { StoryObj } from "@storybook/react";
import OurAuthors from "~/components/sections/AuthorsSection/AuthorsSection";
import { team } from "./utils/mockData";

const meta = {
  title: "Section/AuthorsSection",
  component: OurAuthors,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {
    team: team,
    title: "Our Authors",
    sub_title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
};
