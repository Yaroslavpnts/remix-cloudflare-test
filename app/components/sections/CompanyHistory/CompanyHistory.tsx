import type { FC } from "react";
import OurHistoryDesktop from "../../../icons/Company-Path.png";
import OurHistoryMobile from "../../../icons/Company-Path-Vertical.png";
import { Theme } from "~/types";

type TProps = {
  title: string;
  text: string;
  theme: Theme;
  dataSectionName: string;
};

const CompanyHistory: FC<TProps> = ({ theme, dataSectionName }) => {
  const themes: any = {
    dark: {
      textColorPrimary: "text-white",
      textColorSecondary: "text-yw-gray-300",
      sectionBg: "bg-yw-primary-default",
    },
    light: {
      textColorPrimary: "text-white",
      textColorSecondary: "text-yw-gray-300",
      sectionBg: "bg-yw-primary-default",
    },
  };
  const themeData = themes[theme || Theme.light];

  return (
    <section
      className={`py-28 ${themeData.sectionBg}`}
      data-section-name={dataSectionName}
    >
      <div className="container grid grid-cols-12 sm:gap-10 gap-y-10 text-center sm:text-start">
        <h2 className={`${themeData.textColorPrimary} col-span-12 yw-h2`}>
          Our history
        </h2>
        <div className="col-span-12 w-full">
          <img
            src={OurHistoryDesktop}
            alt={"iconDesktop"}
            className="hidden sm:block w-full"
            width="1110"
            height="121"
            loading="lazy"
          />
          <img
            src={OurHistoryMobile}
            alt={"iconMobile"}
            className="block sm:hidden w-full"
            width="380"
            height="733"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
