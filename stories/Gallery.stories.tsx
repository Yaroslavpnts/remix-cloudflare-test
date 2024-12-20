import type { StoryObj } from "@storybook/react";
import GallerySection from "~/components/sections/Gallery/GallerySection";
import { getStrapiImageData } from "./utils/mockData";

const meta = {
  title: "Section/GallerySection",
  component: GallerySection,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {
    images: {
      data: [getStrapiImageData(), getStrapiImageData(), getStrapiImageData()],
    },
  },
};
