import type { StoryObj } from "@storybook/react";
import DesignOutcome from "~/components/sections/DesignOutcome/DesignOutcome";

const meta = {
  title: "Section/DesignOutcome",
  component: DesignOutcome,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {},
};
