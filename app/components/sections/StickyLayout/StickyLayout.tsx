import type { FC } from "react";
import { Theme } from "~/types";

type TProps = {
  title: string;
  text: string;
  theme?: Theme;
};

const StickyLayout: FC<TProps> = ({
  title,
  text,
  theme = "light",
  dataSectionName,
}) => {
  const themes: any = {
    dark: {
      textColorPrimary: "text-white",
      textColorSecondary: "text-white",
      sectionBg: "bg-yw-primary-default",
    },
    light: {
      textColorPrimary: "text-[#313339]",
      textColorSecondary: "text-[#374151]",
      sectionBg: "",
    },
  };
  const themeData = themes[theme || Theme.light];

  return (
    <section
      className={`py-20 ${themeData.sectionBg}`}
      data-section-name={dataSectionName}
      data-section-id="sticky-layout"
    >
      <div className={`container grid grid-cols-12 gap-4 sm:gap-10 xl:gap-32`}>
        <div className={`col-span-12 xl:col-span-4`}>
          <h2
            className={`yw-h2 sticky top-48 leading-none col-span-12 md:col-span-4 ${themeData.textColorPrimary}`}
          >
            {title}
          </h2>
        </div>
        <div
          className={`col-span-12 lg:col-span-10 xl:col-span-6 prose mb-6 ${themeData.textColorSecondary}`}
        >
          <div className="md-text leading-6">{text}</div>
        </div>
      </div>
    </section>
  );
};

export { StickyLayout };
