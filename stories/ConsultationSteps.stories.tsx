import type { StoryObj } from "@storybook/react";
import ConsultationSteps from "~/components/sections/ConsultationsSteps/ConsultationSteps";
import { renderWithContactProvider } from "./utils/renderWithContactProvider";

const meta = {
  title: "Section/ConsultationSteps",
  component: ConsultationSteps,
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
    title: "Title Consultation Steps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    items: [
      {
        title: "De Finibus Bonorum et Malorum",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        title: "De Finibus Bonorum et Malorum",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        title: "De Finibus Bonorum et Malorum",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        title: "De Finibus Bonorum et Malorum",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
    ],
  },
};
