import type { StoryObj } from "@storybook/react";
import LastProjectCard from "~/components/sections/LastProject/LastProjectCard";
import { getStrapiImageData } from "./utils/mockData";

const meta = {
  title: "Section/LastProjectCard",
  component: LastProjectCard,
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
    item: {
      id: 1,
      attributes: {
        title: "Project Case",
        slug: "Slug",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: { data: getStrapiImageData() },
        country: "Country",
        timeline: "timeline",
        industries: {
          data: [
            {
              id: 1,
              attributes: {
                title: "Fintech",
                slug: "#",
              },
            },
          ],
        },
        sections: [],
        services: [],
        testimonials: { data: [] },
      },
    },
    reverseOrder: false,
    loading: "lazy",
  },
};
