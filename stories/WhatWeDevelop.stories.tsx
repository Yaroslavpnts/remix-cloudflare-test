import type { StoryObj } from "@storybook/react";
import WhatWeDevelop from "~/components/sections/WhatWeDevelop/WhatWeDevelop";

const meta = {
  title: "Section/WhatWeDevelop",
  component: WhatWeDevelop,
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
    title: "Title What We Develop",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    items: [
      {
        icon: null,
        title: "De Finibus Bonorum et Malorum",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        icon: null,
        title: "De Finibus Bonorum et Malorum",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        icon: null,
        title: "De Finibus Bonorum et Malorum",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        icon: null,
        title: "De Finibus Bonorum et Malorum",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
    ],
  },
};
