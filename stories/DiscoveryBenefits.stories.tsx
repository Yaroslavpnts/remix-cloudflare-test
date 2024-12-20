import type { StoryObj } from "@storybook/react";
import DiscoveryBenefits from "~/components/sections/DiscoveryBenefits/DiscoveryBenefits";

const meta = {
  title: "Section/DiscoveryBenefits",
  component: DiscoveryBenefits,
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
        iconDark: null,
        title: "De Finibus Bonorum et Malorum",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        icon: null,
        iconDark: null,
        title: "De Finibus Bonorum et Malorum",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        icon: null,
        iconDark: null,
        title: "De Finibus Bonorum et Malorum",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        icon: null,
        iconDark: null,
        title: "De Finibus Bonorum et Malorum",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
    ],
    title: "Title Discovery Benefits",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
};
