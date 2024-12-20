import { Theme } from "~/types";
import WhatWeDevelopCard from "./WhatWeDevelopCard";

const WhatWeDevelop = ({
  theme,
  title,
  subtitle,
  section_navigation_name,
  items = [],
  dataSectionName
}: {
  theme: Theme;
  title: string;
  subtitle: string;
  section_navigation_name: string;
  items: any[];
  dataSectionName: string;
}) => {
  const themes = {
    dark: {
      textColorPrimary: "text-white",
      textColorSecondary: "text-yw-gray-300",
      sectionBg: "bg-yw-primary-default",
      cardBg: "card-dark",
    },
    light: {
      textColorPrimary: "text-yw-primary-default",
      textColorSecondary: "text-yw-gray-500",
      sectionBg: "bg-yw-gray-100",
      cardBg: "card-light",
    },
  };

  const themeData = themes[theme || Theme.light];

  return (
    <section
      data-sectionid={section_navigation_name}
      data-section-name={dataSectionName}
      className={`${themeData.sectionBg} py-28`}
    >
      <div className="container grid grid-cols-12 sm:gap-10 gap-y-10">
        <div className="col-span-12 md:col-span-8">
          {title && (
            <div className={`${themeData.textColorPrimary} yw-h2 mb-2`}>
              {title}
            </div>
          )}
          {subtitle && (
            <div className={`${themeData.textColorSecondary} yw-t1`}>
              {subtitle}
            </div>
          )}
        </div>

        {items.map((item) => (
          <WhatWeDevelopCard item={item} themeData={themeData} />
        ))}
      </div>
    </section>
  );
};

export default WhatWeDevelop;
