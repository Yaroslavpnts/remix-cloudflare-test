import type { StoryObj } from "@storybook/react";
import WorkFlowSection from "~/components/sections/WorkFlowSections/WorkFlowSections";

const meta = {
  title: "Section/WorkFlowSection",
  component: WorkFlowSection,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {
    title: "Title Work Flow Section",
    items: [
      {
        numeric: true,
        tags: "Tag 1, Tag 2, Tag 3",
        title: "De Finibus Bonorum et Malorum",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        numeric: true,
        tags: "Tag 1, Tag 2, Tag 3",
        title: "De Finibus Bonorum et Malorum",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        numeric: false,
        tags: "Tag 1, Tag 2, Tag 3",
        title: "De Finibus Bonorum et Malorum",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        numeric: false,
        tags: "Tag 1, Tag 2, Tag 3",
        title: "De Finibus Bonorum et Malorum",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        numeric: false,
        tags: "Tag 1, Tag 2, Tag 3",
        title: "De Finibus Bonorum et Malorum",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
    ],
    mode: "card",
    title_is_part_of_grid: false,
  },
};
