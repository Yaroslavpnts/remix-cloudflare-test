import type { StoryObj } from "@storybook/react";
import ProcessSection from "~/components/sections/ProcessSection/ProcessSection_";

const meta = {
  title: "Section/ProcessSection",
  component: ProcessSection,
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
    title: "Title Process Points",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    items: [
      {
        tab_title: "Tab title Finibus",
        tab_content: "Tab content De Finibus Bonorum et Malorum",
        title: "De Finibus Bonorum et Malorum",
        list_content:
          "List content. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        tab_title: "Tab title Finibus",
        tab_content: "Tab content De Finibus Bonorum et Malorum",
        title: "De Finibus Bonorum et Malorum",
        list_content:
          "List content. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        tab_title: "Tab title Finibus",
        tab_content: "Tab content De Finibus Bonorum et Malorum",
        title: "De Finibus Bonorum et Malorum",
        list_content:
          "List content. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        tab_title: "Tab title Finibus",
        tab_content: "Tab content De Finibus Bonorum et Malorum",
        title: "De Finibus Bonorum et Malorum",
        list_content:
          "List content. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        tab_title: "Tab title Finibus",
        tab_content: "Tab content De Finibus Bonorum et Malorum",
        title: "De Finibus Bonorum et Malorum",
        list_content:
          "List content. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
    ],

    openTabIndex: 2,
    tagsTitle: "Tags Title",
    tags: "Tags 1, Tags 2, Tags 3",
  },
};
