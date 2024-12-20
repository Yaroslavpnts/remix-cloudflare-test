import type { StoryObj } from "@storybook/react";
import AboutCompany from "~/components/sections/AboutCompany/AboutCompany";

const meta = {
  title: "Section/AboutCompany",
  component: AboutCompany,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {},
};
