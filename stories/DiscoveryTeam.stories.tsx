import type { StoryObj } from "@storybook/react";
import DiscoveryTeam from "~/components/sections/DiscoveryTeam/DiscoveryTeam";

const meta = {
  title: "Section/DiscoveryTeam",
  component: DiscoveryTeam,
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
  args: {},
};
