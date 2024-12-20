import type { StoryObj } from "@storybook/react";
import CasePreviewSection from "~/components/sections/CasePreviewSection/CasePreviewSection";

const meta = {
  title: "Section/CasePreviewSection",
  component: CasePreviewSection,
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
    title: "Title Case Preview Section",
    theme: "dark",
    items: {
      data: [
        {
          attributes: {
            title: "De Finibus Bonorum et Malorum",
            slug: "slug",
            industries: {
              data: [
                { attributes: { title: "Category 1" } },
                { attributes: { title: "Category 2" } },
              ],
            },
          },
        },
        {
          attributes: {
            title: "De Finibus Bonorum et Malorum",
            slug: "slug",
            industries: {
              data: [
                { attributes: { title: "Category 1" } },
                { attributes: { title: "Category 2" } },
              ],
            },
          },
        },
      ],
    },
  },
};
