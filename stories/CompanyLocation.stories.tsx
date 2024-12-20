import type { StoryObj } from "@storybook/react";
import CompanyLocation from "~/components/sections/CompanyLocation/CompanyLocation";

const meta = {
  title: "Section/CompanyLocation",
  component: CompanyLocation,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {},
};
