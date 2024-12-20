import type { StoryObj } from "@storybook/react";
import BackendApproach from "~/components/sections/BackendApproach";

const meta = {
  title: "Section/BackendApproach",
  component: BackendApproach,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {
    title: "About Yojji Software Development Company",
    text: "Yojji is a result-oriented team of professional web developers who create custom-made products to help our clients benefit the most. Our services are aimed at those who are in search of highly professional cutting-edge IT solutions. If you need help with planning and developing applications from scratch, making improvements to existing ones, building top-notch web and mobile solutions and/or conducting their multi-stage testing, you can rely on our skilled experts.",
  },
};
