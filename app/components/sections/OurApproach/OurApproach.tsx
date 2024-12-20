import type { FC } from "react";
import StrapiImage from "~/components/StrapiImage";
import { type StrapiImageData, Theme } from "~/types";

type TProps = {
  title: string;
  description?: string;
  description_html?: string;
  iconDesktop: StrapiImageData;
  iconDesktopLight: StrapiImageData;
  iconMobile: StrapiImageData;
  iconMobileLight: StrapiImageData;
  theme?: string;
  section_navigation_name?: string;
  dataSectionName: string;
};

const OurApproach: FC<TProps> = ({
  title,
  description,
  description_html,
  iconDesktop,
  iconDesktopLight,
  iconMobile,
  iconMobileLight,
  theme = "light",
  section_navigation_name,
  dataSectionName,
}) => {
  const themes: any = {
    dark: {
      textColorPrimary: "text-white",
      textColorSecondary: "text-yw-gray-300",
      sectionBg: "bg-yw-primary-default",
    },
    light: {
      textColorPrimary: "text-yw-gray-900",
      textColorSecondary: "text-yw-gray-500",
      sectionBg: "bg-yw-gray-100",
    },
  };
  const themeData = themes[theme || Theme.light];

  return (
    <section
      className={`py-28 ${themeData.sectionBg}`}
      data-sectionid={section_navigation_name}
      data-section-name={dataSectionName}
    >
      <div className="container grid grid-cols-12 sm:gap-10 gap-y-10 text-start">
        <h2 className={`${themeData.textColorPrimary} col-span-12 yw-h2`}>
          {title}
        </h2>
        {}
        {description_html && (
          <p
          className={`${themeData.textColorSecondary} whitespace-pre-line md-text md-text-${theme} col-span-12 yw-t1 sm:max-w-[775px] w-full text-left`}
          dangerouslySetInnerHTML={{__html: description_html}}
          ></p>
        )}
        {description && (
          <p
            className={`${themeData.textColorSecondary} whitespace-pre-line md-text md-text-${theme} col-span-12 yw-t1 sm:max-w-[775px] w-full text-left`}
          >
            {description}
          </p>
        )}

        <div className="col-span-12 w-full">
          <StrapiImage
            alt="Desktop Icon"
            className="hidden sm:block w-full"
            image={
              theme == "light" ? iconDesktop?.data : iconDesktopLight?.data
            }
            loading={"lazy"}
            height="121"
            width="1110"
          />
          <StrapiImage
            alt="Mobile Icon"
            className="block sm:hidden w-full"
            image={theme == "light" ? iconMobile?.data : iconMobileLight?.data}
            loading={"lazy"}
            height="733"
            width="380"
          />
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
