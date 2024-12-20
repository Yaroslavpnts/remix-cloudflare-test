import { useState, type FC } from "react";
import type { Portfolio } from "~/types";
import { Theme } from "~/types";
import OtherCaseStudiesCard from "./OtherCaseStudiesCard";
import ArrowBlueIcon from "~/icons/components/ArrowBlueIcon";
import SmallArrow from "~/icons/components/SmallArrow";

type TProps = {
  theme: Theme;
  title: string;
  section_navigation_name: string;
  items: { data: Portfolio[] };
  dataSectionName?: string;
};

const OtherCaseStudiesSection: FC<TProps> = ({
  theme,
  title,
  section_navigation_name,
  items,
  dataSectionName,
}) => {
  const [seeMore, setSeeMore] = useState(false);

  const themes = {
    dark: {
      sectionBg: "bg-yw-primary-default",
      textSecondary: "text-yw-gray-100",
      buttonVariant: "btn-secondary-inverted",
      arrowStyle: "svg-black",
      shadow: "bottom-shadow-dark",
    },
    light: {
      sectionBg: "bg-yw-gray-100",
      textSecondary: "text-yw-primary-default",
      buttonVariant: "btn-secondary",
      arrowStyle: "svg-white",
      shadow: "bottom-shadow-light",
    },
  };

  const themeData = themes[theme || Theme.light];

  const hideOtherCases = !seeMore && items.data?.length > 4;
  const cases = !hideOtherCases ? items.data : items.data?.slice(0, 4);

  return (
    <section
      className={`${themeData.sectionBg} py-8 md:py-20`}
      data-sectionid={section_navigation_name}
      data-section-name={dataSectionName}
    >
      <div className="container">
        <div className="grid grid-cols-12 sm:gap-x-4 lg:gap-x-10 md:mb-8">
          <h2
            className={`${themeData.textSecondary} yw-h2 col-span-12 md:col-span-6`}
          >
            {title}
          </h2>
          <div
            className={`col-span-6 md:justify-self-end self-center order-last md:order-0`}
          >
            <a
              href="/case-studies"
              className="text-yw-cta-default yw-button-small pl-0 mb-1 flex items-center6 cursor-pointer"
            >
              All cases
              <div className="ltr:ml-2 rtl:mr-2">
                <ArrowBlueIcon />
              </div>
            </a>
          </div>
        </div>
        <div className="relative mb-8">
          <div className="grid grid-cols-12 gap-3 sm:gap-8 md:gap-10 relative pb-5">
            {cases.map((item, idx) => (
              <OtherCaseStudiesCard
                key={"card_case_studies_" + idx}
                theme={theme}
                item={item}
              />
            ))}
          </div>
          {hideOtherCases && (
            <div
              className={`h-32 xl:h-40 ${themeData.shadow} w-full absolute bottom-0`}
            ></div>
          )}
        </div>
        {items.data?.length > 4 && (
          <div className="w-full relative flex">
            <div className="relative top-0 w-full h-px bottom-0 m-auto bg-yw-gray-300"></div>
            <button
              onClick={() => setSeeMore((s) => !s)}
              className={`btn group rounded-full flex items-center justify-center whitespace-nowrap font-montserrat yw-button-small py-4 px-6 text-sm leading-none ${themeData.buttonVariant}`}
            >
              <span className="flex-1 text-center">
                {seeMore ? "See less" : "See more"}
              </span>
              <span className="ml-auto">
                <SmallArrow
                  className={`${themeData.arrowStyle} ${
                    seeMore ? "rotate-90" : "-rotate-90"
                  } ltr:ml-2 rtl:mr-2 `}
                  fill="#313339"
                />
              </span>
            </button>
            <div className="relative top-0 w-full h-px bottom-0 m-auto bg-yw-gray-300"></div>
          </div>
        )}
      </div>
    </section>
  );
};

OtherCaseStudiesSection.populate = ["items.image"];

export default OtherCaseStudiesSection;
