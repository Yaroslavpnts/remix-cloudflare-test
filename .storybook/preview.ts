import type { Preview } from "@storybook/react";
import "../app/tailwind.css";
import { renderWithOutletContext } from "../stories/utils/renderWithOutletContext";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [renderWithOutletContext],
};

export default preview;
