import type { FC } from "react";
import { Fragment } from "react";
import { Theme } from "~/types";

type TItems = {
  title: string;
  text: string;
};
type TProps = {
  section_navigation_name: string;
  title: string;
  description: string;
  theme?: Theme;
  items?: TItems[];
  dataSectionName: string;
};

const HeadingWithList: FC<TProps> = ({
  section_navigation_name,
  title,
  description,
  theme,
  items,
  dataSectionName,
}) => {
  const themes = {
    light: {
      textColorPrimary: "text-white",
      textColorSecondary: "text-yw-gray-300",
      sectionBg: "bg-yw-primary-default",
    },
    dark: {
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
      <div className="container grid grid-cols-12 gap-y-8 lg:gap-y-[72px]">
        <div className="col-span-12 md:w-3/4 lg:w-2/3 text-start">
          <h3
            className={`${themeData.textColorPrimary} yw-h2 mb-6 col-span-12`}
          >
            {title}
          </h3>
          <p className={`${themeData.textColorSecondary} yw-t1`}>
            {description}
          </p>
        </div>

        {items?.map((el, i) => (
          <Fragment key={i}>
            <div className="col-span-12 grid grid-cols-12 gap-8">
              <div className="text-stroke font-montserrat text-[144px] font-bold col-span-12 xl:col-span-2 leading-[81%]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="col-span-12 xl:col-span-10">
                <div className={`${themeData.textColorPrimary} yw-h3 mb-4`}>
                  {el.title}
                </div>
                <p className={`yw-t1 ${themeData.textColorSecondary}`}>
                  {el.text}
                </p>
              </div>
            </div>
            {i !== items.length - 1 && (
              <div className="border-b border-yw-gray-500 col-span-12"></div>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default HeadingWithList;
