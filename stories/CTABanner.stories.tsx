import type { StoryObj } from "@storybook/react";
import CTABanner from "../app/components/sections/CTABanner/CTABanner";
import { getStrapiImageData } from "./utils/mockData";
import { renderWithContactProvider } from "./utils/renderWithContactProvider";

const meta = {
  title: "Section/CTABanner",
  component: CTABanner,
  decorators: [renderWithContactProvider],
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
    heading:
      "Consult your project with a proven web app development company. Create your competitive edge!",
    buttonText: "Schedule free consultation",
    image: { data: getStrapiImageData() },
  },
};
