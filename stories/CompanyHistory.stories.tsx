import type { StoryObj } from "@storybook/react";
import CompanyHistory from "~/components/sections/CompanyHistory/CompanyHistory";

const meta = {
  title: "Section/CompanyHistory",
  component: CompanyHistory,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {},
};
