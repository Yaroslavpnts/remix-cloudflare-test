import type { FC } from "react";
import SeoCheckMark from "~/icons/components/SeoCheckMark";
import { Theme } from "~/types";

interface ICardItem {
  title: string;
  text: string;
}

interface ISeoText {
  title: string;
  description: string;
  items: ICardItem[];
  theme: Theme;
  section_navigation_name: string;
  dataSectionName: string;
}

const SeoText: FC<ISeoText> = ({
  title,
  description,
  items,
  theme,
  section_navigation_name,
  dataSectionName,
}) => {
  const themes = {
    dark: {
      textColorPrimary: "text-white",
      textColorSecondary: "text-yw-gray-300",
      sectionBg: "bg-yw-primary-default",
    },
    light: {
      textColorPrimary: "text-yw-primary-default",
      textColorSecondary: "text-yw-gray-500",
      sectionBg: "bg-yw-gray-100",
    },
  };

  const themeData = themes[theme || Theme.light];

  return (
    <section
      className={`${themeData.sectionBg} py-28`}
      data-sectionid={section_navigation_name}
      data-section-name={dataSectionName}
    >
      <div className="container grid grid-cols-12 gap-y-10 lg:gap-10">
        <div className="col-span-12 grid grid-cols-1 gap-y-4">
          <h2
            className={`${themeData.textColorPrimary} yw-h2 md:w-4/5 lg:w-3/5 xl:w-1/2`}
          >
            {title}
          </h2>
          <p
            className={`${themeData.textColorSecondary} yw-t1 md:w-4/5 lg:w-3/5 xl:w-1/2`}
          >
            {description}
          </p>
        </div>

        {items.map(({ title, text }, idx) => (
          <div key={idx} className="col-span-12 lg:col-span-6">
            <div className="flex mb-4">
              <div className="ltr:mr-4 rtl:ml-4">
                <SeoCheckMark
                  theme={theme}
                  className="w-[32px] h-[32px] min-w-[32px]"
                />
              </div>
              <h3 className={`${themeData.textColorPrimary} yw-h3`}>{title}</h3>
            </div>
            <p className={`${themeData.textColorSecondary} yw-t1 mb-4 md:mb-0`}>
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { SeoText };
