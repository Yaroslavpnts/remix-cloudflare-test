import type { StoryObj } from "@storybook/react";
import RecentArticles from "~/components/sections/RecentArticles/RecentArticles";
import { articles } from "./utils/mockData";

const meta = {
  title: "Section/RecentArticles",
  component: RecentArticles,
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
    title: "Title Recent Articles",
    recentArticles: articles,
  },
};
