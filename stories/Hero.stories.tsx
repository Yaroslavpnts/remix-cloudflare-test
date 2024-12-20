import type { StoryObj } from "@storybook/react";
import Hero from "~/components/sections/Hero/Hero";
import { getStrapiImageData } from "./utils/mockData";
import { renderWithContactProvider } from "./utils/renderWithContactProvider";

const meta = {
  title: "Section/Hero",
  component: Hero,
  decorators: [renderWithContactProvider],
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {
    title: "Hire IT Experts Committed to Your Business Growth",
    upperTitle: "Dedicated Software Development Team",
    review_stars: 5,
    image: { data: getStrapiImageData() },
    text: "With a curated group of over 70 IT specialists, Yojji puts together efficient and teamwork-driven teams to assist businesses across different sectors in reaching their goals swiftly and with reduced risks.",
  },
};
