import { type FC } from "react";
import StrapiImage from "~/components/StrapiImage";
import { Theme } from "~/types";

type TItems = {
  icon: any;
  iconDark: any;
  title: string;
  text: string;
};

type TProps = {
  theme: Theme;
  title: string;
  description: string;
  section_navigation_name: string;
  items: TItems[];
  dataSectionName: string;
};

const DiscoveryBenefits: FC<TProps> = ({
  items,
  theme,
  title,
  description,
  section_navigation_name,
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
      iconPostfix: "gray",
    },
  };
  const themeData = themes[theme || Theme.light];
  return (
    <section
      className={`${themeData.sectionBg} py-28`}
      data-sectionid={section_navigation_name}
      data-section-name={dataSectionName}
    >
      <div className="container grid grid-cols-12 sm:gap-10 gap-y-10 ">
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 self-center">
          {title ? (
            <div className={`${themeData.textColorPrimary} yw-h2 mb-4`}>
              {title}
            </div>
          ) : null}
          {description ? (
            <div className={`${themeData.textColorSecondary} yw-t1`}>
              {description}
            </div>
          ) : null}
        </div>

        {items.map((item, idx) => (
          <div
            key={"disc_bene_" + idx}
            className={`${themeData.cardBg} col-span-12 sm:col-span-6 lg:col-span-4 items-start`}
          >
            <div className="mb-4">
              <StrapiImage
                image={
                  theme === "light" ? item.icon?.data : item.iconDark?.data
                }
                className="h-14 w-14"
              />
            </div>
            <div className={`${themeData.textColorPrimary} yw-h3 mb-4`}>
              {item.title}
            </div>
            <div className={`${themeData.textColorSecondary} yw-t2`}>
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoveryBenefits;
