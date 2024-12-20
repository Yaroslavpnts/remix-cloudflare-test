import type { StoryObj } from "@storybook/react";
import InfoProfessionSection from "~/components/sections/InfoProfessionSection/InfoProfessionSection";

const meta = {
  title: "Section/InfoProfessionSection",
  component: InfoProfessionSection,
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
    items: [
      {
        icon: null,
        title: "Info Profession",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tags: "Tag 1, Tag 2, Tag 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        technologies: false,
        buttonLink: "#",
        buttonText: "Open",
      },
      {
        icon: null,
        title: "Info Profession",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tags: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        technologies: true,
        buttonLink: "#",
        buttonText: "Open",
      },
    ],
    title: "Title Info Profession Section",
  },
};
