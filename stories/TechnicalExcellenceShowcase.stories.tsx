import type { StoryObj } from "@storybook/react";
import TechExcellenceShowcase from "~/components/sections/TechnicalExcellenceShowcase/TechnicalExcellenceShowcase";
import { getStrapiImageData } from "./utils/mockData";

const meta = {
  title: "Section/TechExcellenceShowcase",
  component: TechExcellenceShowcase,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {
    title: "De Finibus Bonorum et Malorum",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    button_text: "Show",
    testimonial_short_card: {
      icon: { data: getStrapiImageData("icon") },
      title: "Testimonial Short Card",
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      review_stars: 5,
    },
    project_short_case: {
      icon: { data: getStrapiImageData("icon") },
      title: "Project short case",
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      sub_description: "De Finibus Bonorum et Malorum",
      button_text: "Hide",
    },
    order: "1,2,3,4",
    items_columns: "three",
    button_link: "#",
    items: [
      {
        title: "De Finibus Bonorum et Malorum 1",
        wide: true,
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        title: "De Finibus Bonorum et Malorum 2",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        title: "De Finibus Bonorum et Malorum 3",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        title: "De Finibus Bonorum et Malorum 4",
        wide: true,
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
    ],
  },
};
