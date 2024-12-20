import { type FC } from "react";
import { Theme } from "~/types";

type TItems = {
  title: string;
  text: string;
};

type TProps = {
  theme: "dark" | "light";
  title: string;
  description: string;
  items: TItems[];
};

const ReasonsSections: FC<TProps> = ({ theme, title, description, items }) => {
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
    <section className={`${themeData.sectionBg} py-28`}>
      <div className="container grid grid-cols-12 gap-y-[72px] sm:gap-18">
        <div className="col-span-12 md:w-3/4">
          <h3
            className={`${themeData.textColorPrimary} yw-h2 mb-6 col-span-12`}
          >
            {title}
          </h3>
          <p className={`${themeData.textColorSecondary} yw-t1`}>
            {description}
          </p>
        </div>
        {items.map((item: any, idx) => (
          <>
            <div key={idx} className="col-span-12 grid grid-cols-12">
              <div className="text-stroke font-montserrat text-[144px] font-bold col-span-12 md:col-span-3 line-[158.4px]">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="col-span-12 md:col-span-9">
                <div className="yw-h3 text-white mb-4">{item.title}</div>
                <p className="yw-t1 text-yw-gray-300">{item.text}</p>
              </div>
            </div>
            {idx !== items.length - 1 ? (
              <div className="border-b border-yw-gray-500 col-span-12"></div>
            ) : null}
          </>
        ))}
      </div>
    </section>
  );
};

export default ReasonsSections;
