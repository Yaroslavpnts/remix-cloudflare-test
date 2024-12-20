import { type FC } from "react";
import { Theme } from "~/types";

type TItems = {
  title: string;
  text: string;
};

type TProps = {
  theme: Theme;
  items: TItems[];
  dataSectionName: string;
};

const CompanyStatistic: FC<TProps> = ({ items, theme, dataSectionName }) => {
  const themes: any = {
    dark: {
      textColorPrimary: "text-white",
      textColorSecondary: "text-yw-gray-300",
      sectionBg: "bg-yw-primary-default",
      cardBg: "card-dark",
    },
    light: {
      textColorPrimary: "text-yw-primary-default",
      textColorSecondary: "text-yw-gray-400",
      sectionBg: "bg-yw-gray-200",
      cardBg: "card-light",
    },
  };
  const themeData = themes[theme || Theme.light];

  return (
    <section
      className={`${themeData.sectionBg} py-20 text-center`}
      data-section-name={dataSectionName}
    >
      <div className="container mx-auto grid grid-cols-12 gap-y-8 sm:gap-4 lg:gap-10">
        {items.map((item, idx) => (
          <div
            key={"statis_item_" + idx}
            className={`${themeData.cardBg} col-span-12 sm:col-span-4 flex flex-col items-center justify-between text-center`}
          >
            <div className={`${themeData.textColorPrimary} yw-h2 mb-2`}>
              {item.title}
            </div>
            <div className={`${themeData.textColorSecondary} yw-h5`}>
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyStatistic;
