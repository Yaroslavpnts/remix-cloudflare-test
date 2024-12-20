import type { StoryObj } from "@storybook/react";
import MobileTechnology from "~/components/sections/MobileTechnology/MobileTechnology";
import { renderWithContactProvider } from "./utils/renderWithContactProvider";

const meta = {
  title: "Section/MobileTechnology",
  component: MobileTechnology,
  decorators: [renderWithContactProvider],
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {},
};
