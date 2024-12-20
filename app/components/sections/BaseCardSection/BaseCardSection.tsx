import type { FC, Key } from "react";
import StrapiImage from "~/components/StrapiImage";
import { Theme } from "~/types";
import type { StrapiImageData, StrapiImagesData } from "~/types";

type TItems = {
  icon: StrapiImageData;
  iconDark: StrapiImageData;
  title: string;
  text: string;
  cardLink: string;
};

type TProps = {
  theme: Theme;
  title: string;
  description: string;
  order: boolean;
  icon: any;
  section_navigation_name: string;
  usedBy: string;
  items: TItems[];
  dataSectionName: string;
  usedByIcons: StrapiImagesData;
  usedByIconsDark: StrapiImagesData;
};

const BaseCardSection: FC<TProps> = ({
  items,
  theme,
  order,
  icon,
  title,
  description,
  section_navigation_name,
  usedBy,
  dataSectionName,
  usedByIcons,
  usedByIconsDark,
}) => {
  const themes: any = {
    light: {
      textColorPrimary: "text-yw-primary-default",
      textColorSecondary: "text-yw-gray-500",
      sectionBg: "bg-yw-gray-100",
      cardBg: "bg-white",
    },
    dark: {
      textColorPrimary: "text-white",
      textColorSecondary: "text-yw-gray-300",
      sectionBg: "bg-yw-primary-default",
      cardBg: "bg-[#1F2124]",
    },
  };
  const themeData = themes[theme || Theme.light];
  const iconsData = theme === Theme.light ? usedByIcons : usedByIconsDark;

  return (
    <section
      className={`${themeData.sectionBg} py-28`}
      data-sectionid={section_navigation_name}
      data-section-name={dataSectionName}
    >
      <div className="container grid grid-cols-12 gap-y-10">
        {(title || description) && (
          <div
            className={`col-span-12 grid sm:grid-cols-7 grid-cols-6 md:grid-cols-6 relative`}
          >
            {order && icon?.data && (
              <div className={`col-span-4 md:col-span-1 sm:static mb-6`}>
                <StrapiImage
                  image={icon?.data}
                  className="w-20 h-20 md:w-40 md:h-40"
                />
              </div>
            )}
            <div
              className={`col-span-7 md:col-span-4 z-[2] ${
                order && "md:!col-start-3"
              }`}
            >
              <h2 className={`yw-h2 mb-6 ${themeData.textColorPrimary}`}>
                {title}
              </h2>
              <p className={`yw-t1 !text-lg ${themeData.textColorSecondary}`}>
                {description}
              </p>
            </div>
            {!order && icon?.data && (
              <div
                className={`md:col-start-6 col-span-4 md:col-span-1 sm:static -order-[1] md:order-0 mb-6`}
              >
                <StrapiImage
                  image={icon?.data}
                  className="w-20 h-20 md:w-40 md:h-40"
                />
              </div>
            )}
          </div>
        )}

        <div className="col-span-12 grid grid-cols-3 gap-y-6 lg:gap-10 mb-9">
          {items?.map((item, idx) => {
            const Component = item.cardLink ? "a" : "div";

            return (
              <Component
                key={"case_tech_" + idx}
                className={`${themeData.cardBg} shadow rounded-3xl col-span-3 lg:col-span-1 p-8`}
                href={item.cardLink}
              >
                {item.icon.data || item.iconDark.data ? (
                  <div className="mb-4">
                    <StrapiImage
                      image={
                        theme == "light"
                          ? item?.iconDark?.data
                          : item?.icon?.data
                      }
                      className="h-14 w-14"
                    />
                  </div>
                ) : null}
                <p className={`yw-h3 ${themeData.textColorPrimary} mb-5`}>
                  {item.title}
                </p>
                <p className={`yw-t2 ${themeData.textColorSecondary}`}>
                  {item.text}
                </p>
              </Component>
            );
          })}
        </div>
        {usedBy && (
          <div className="col-span-12 grid grid-cols-3 lg:grid-cols-6 gap-6 break-all items-end">
            <p
              className={`yw-h3 !text-2xl ${themeData.textColorPrimary} col-span-3 lg:col-span-1 text-start lg:text-center`}
            >
              Used by:
            </p>
            {usedBy
              .split(",")
              .map((usedBy: string, idx: Key | null | undefined) => (
                <p
                  key={"used_by_" + idx}
                  className={`yw-h4 ${themeData.textColorSecondary} col-span-1 text-start lg:text-center`}
                >
                  {usedBy}
                </p>
              ))}
          </div>
        )}
        {iconsData?.data && (
          <div className="col-span-12 grid grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            <p
              className={`yw-h3 !text-2xl ${themeData.textColorPrimary} col-span-3 lg:col-span-1 text-start`}
            >
              Used by:
            </p>
            {iconsData.data.map((image, idx: number) => (
              <StrapiImage
                key={"used_by_icons" + idx}
                image={image}
                className="justify-self-start lg:justify-self-center lg:max-w-[140px] max-h-6 sm:max-h-7 lg:max-h-[33px]"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BaseCardSection;

BaseCardSection.populate = ["usedByIcons", "usedByIconsDark"];
