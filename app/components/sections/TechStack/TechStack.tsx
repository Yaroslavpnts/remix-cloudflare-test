import StrapiImage from "~/components/StrapiImage";
import { type FC } from "react";
import { Theme } from "~/types";

type TItems = {
  icon: any;
  iconDark: any;
  title: string;
  link: string;
};

type TProps = {
  theme: Theme;
  title: string;
  section_navigation_name: string;
  items: TItems[];
};

const TechStack: FC<TProps> = ({
  items,
  theme,
  section_navigation_name,
  title,
  dataSectionName,
}) => {
  const themes: any = {
    dark: {
      textColorPrimary: "text-white",
      textColorSecondary: "text-yw-gray-300",
      sectionBg: "bg-yw-primary-default",
      cardBg: "card-dark",
      iconPostfix: "light",
    },
    light: {
      textColorPrimary: "text-yw-primary-default",
      textColorSecondary: "text-yw-gray-500",
      sectionBg: "bg-yw-gray-100",
      cardBg: "card-light",
      iconPostfix: "dark",
    },
  };
  const themeData = themes[theme || Theme.light];

  return (
    <section
      className={`${themeData.sectionBg} py-20`}
      data-sectionid={section_navigation_name}
      data-section-name={dataSectionName}
    >
      <div className="container grid grid-cols-12 gap-y-10 mx-auto">
        <div className="col-span-12 xl:col-span-4">
          <p className={`yw-h2 ${themeData.textColorPrimary}`}>{title}</p>
        </div>
        <div className="col-span-12 xl:col-span-8">
          <div className="grid grid-cols-12 gap-y-8 gap-x-4">
            {items.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="col-span-6 xs:col-span-4 lg:col-span-3 xl:col-span-4 2xl:col-span-3 flex items-center text-start"
              >
                <StrapiImage
                  className="mr-4"
                  image={
                    theme === "dark" ? item.icon?.data : item.iconDark?.data
                  }
                  width="32px"
                  height="32px"
                />
                <span className={`yw-h4 ${themeData.textColorPrimary}`}>
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
