import { type FC } from "react";
import { Theme } from "~/types";

type TItem = {
  title: string;
  text: string;
};

type TProps = {
  theme: "dark" | "light";
  title: string;
  description: string;
  items: TItem[];
  section_navigation_name?: string;
  dataSectionName?: string;
};

const ReasonsSections: FC<TProps> = ({
  theme,
  title,
  description,
  items,
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
      <div className="container grid grid-cols-12 gap-5 gap-y-36 lg:gap-y-5">
        <div className="col-span-12 lg:col-span-6 lg:mb-[120px] text-center sm:text-start">
          <h2 className={`yw-h2 mb-4 ${themeData.textColorPrimary}`}>
            {title}
          </h2>
          <p className={`yw-t1 ${themeData.textColorSecondary}`}>
            {description}
          </p>
        </div>
        {items.map((item: TItem, idx) => (
          <div
            key={idx}
            className={`col-span-12 lg:w-1/2 relative ${
              idx % 2 ? "ltr:lg:ml-auto rtl:lg:mr-auto" : ""
            } lg:pr-5`}
          >
            <p className="text-stroke text-[144px] col-span-3 line-[158.4px] font-bold font-montserrat absolute -top-[115px] sm:-top-[105px]">
              {String(idx + 1).padStart(2, "0")}
            </p>
            <h4 className={`mb-4 yw-h2 relative ${themeData.textColorPrimary}`}>
              {item.title}
            </h4>
            <div
              className={`yw-t1 col-span-5 relative ${themeData.textColorSecondary} whitespace-pre-line md-text list-disc`}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsSections;
