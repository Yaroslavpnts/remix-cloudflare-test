import type { StoryObj } from "@storybook/react";
import BenefitBanner from "~/components/sections/BenefitBanner/BenefitBanner";
import { getStrapiImageData } from "./utils/mockData";

const meta = {
  title: "Section/BenefitBanner",
  component: BenefitBanner,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {
    title: "Title Benefit Banner",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: { data: getStrapiImageData() },
  },
};
