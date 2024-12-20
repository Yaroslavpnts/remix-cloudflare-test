import type { StoryObj } from "@storybook/react";
import ServiceTestimonialSingle from "~/components/sections/ServiceTestimonialSingle/ServiceTestimonialSingle";

const meta = {
  title: "Section/ServiceTestimonialSingle",
  component: ServiceTestimonialSingle,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {
    order: "",
    items: {
      title: "De Finibus Bonorum et Malorum",
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      review_stars: 4,
    },
  },
};
