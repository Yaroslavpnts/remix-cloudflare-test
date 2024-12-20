import type { StoryObj } from "@storybook/react";
import TechStackDevsTeam from "~/components/sections/TechStackDevsTeam/TechStackDevsTeam";

const meta = {
  title: "Section/TechStackDevsTeam",
  component: TechStackDevsTeam,
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
    team_members: [
      { team_member: "Mike" },
      { team_member: "Jhon" },
      { team_member: "Robert" },
    ],
    tech_stack_proj_card: [
      {
        group: "Group",
        technologies: "React, Nest, Node",
      },
    ],
  },
};
