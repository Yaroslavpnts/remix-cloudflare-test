import type { StoryObj } from "@storybook/react";
import Footer from "~/components/sections/Footer/Footer";

const meta = {
  title: "Section/Footer",
  component: Footer,
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
    columns: [
      {
        title: "Column 1",
        items: [
          { link: "#", anchor: "Link 1" },
          { link: "#", anchor: "Link 2" },
          { link: "#", anchor: "Link 3" },
          { link: "#", anchor: "Link 4" },
          { link: "#", anchor: "Link 5" },
        ],
      },
      {
        title: "Column 2",
        items: [
          { link: "#", anchor: "Link 1" },
          { link: "#", anchor: "Link 2" },
          { link: "#", anchor: "Link 3" },
          { link: "#", anchor: "Link 4" },
          { link: "#", anchor: "Link 5" },
        ],
      },
    ],
  },
};
