import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],

  plugins: [require("@tailwindcss/typography")],
  safelist: ["shadow"],
  theme: {
    fontFamily: {
      opensans: "Open sans, sans-serif",
      montserrat: "Montserrat, sans-serif",
      inter: "Inter, sans-serif",
    },
    container: {
      center: true,
    },
    extend: {
      transitionProperty: {
        grow: "max-width, max-height",
      },
      animation: {
        grow: "grow 5s ease-in-out",
        openMenu: "openMenu 0.5s ease-in-out forwards",
        closeMenu: "closeMenu 0.5s ease-in-out forwards",
        fadeIn: "fadein 1s ease-in-out forwards",
        fadeAppear: "fadeAppear 0.5s ease-in-out forwards",
        fadeDisappear: "fadeDisappear 0.5s ease-in-out forwards",
      },

      colors: {
        yw: {
          "text-highlight": "#70FFC3",
          // primary: {
          //   default: "#141517",
          //   hover: "#212326",
          //   active: "#09090A",
          // },
          primary: { default: "#313339", hover: "#454850", active: "#2A2C33" },
          cta: {
            default: "#0057FF",
            hover: "#236EFF",
            active: "#0050EB",
          },
          // gray: {
          //   100: "#FAFAFC",
          //   200: "#EFF1F4",
          //   300: "#AFB3B8",
          //   400: "#8A8F94",
          //   500: "#535A5F",
          //   700: "#1F2124",
          //   900: "#141517",
          // },
          gray: {
            100: "#FAFAFC",
            200: "#F3F3F5",
            250: "#E7E9EA",
            300: "#AFB3B8",
            400: "#8A8F94",
            500: "#535A5F",
            600: "#45474D",
            700: "#3C3E45",
            800: "#35373D",
            900: "#313339",
            950: "#1F2124",
          },
        },
        white: "#FFFFFF",
      },
      dropShadow: {
        modal: "0px 2px 12px rgba(46, 58, 75, 0.1)",
        header: "0px 4px 12px rgba(46, 58, 75, 0.1)",
      },
      order: {
        0: "0",
      },
      height: {
        inherit: "inherit",
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
} satisfies Config;
