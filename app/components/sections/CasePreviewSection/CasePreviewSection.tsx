import { useState, type FC } from "react";
import cn from 'classnames';
import CasePreviewSectionCard from "./CasePreviewCard";
import { Portfolio, Theme } from "~/types";

type TProps = {
  theme: Theme;
  title: string;
  description: string;
  section_navigation_name: string;
  dataSectionName: string;
  items: {
    data: Portfolio[]
  };
};

const CasePreviewSection: FC<TProps> = ({
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
      arrowStyle: "svg-black",
      buttonVariant: "btn-secondary-inverted",
      bottomShadow: "bottom-shadow-preview-section-dark",
    },
    light: {
      sectionBg: "bg-yw-gray-100",
      textSecondary: "text-yw-primary-default",
      arrowStyle: "svg-white",
      buttonVariant: "btn-secondary",
      bottomShadow: "bottom-shadow-preview-section-light",
    },
  };

  const themeData = themes[theme || Theme.light];

  const hideOtherCases = !seeMore && items.data?.length > 4;
  const cases = hideOtherCases ? items.data?.slice(0, 4) : items.data;

  const isCaseClipped = (idx:number) => {
    if (!hideOtherCases) {
      return false;
    }

    return (idx === cases.length - 1 || idx === cases.length -2)
  }

  return (
    <section
      className={`${themeData.sectionBg} py-8 md:py-20`}
      data-sectionid={section_navigation_name}
      data-section-name={dataSectionName}
    >
      <div className="container relative">
        <h2 className={`${themeData.textSecondary} yw-h2 sm:text-start mb-8`}>
          {title}
        </h2>
        <div className={cn("grid grid-cols-12 gap-3 sm:gap-8 md:gap-10 relative", {
            [themeData.bottomShadow]: hideOtherCases
          })}>
          {cases.map((item, idx) => (
            <CasePreviewSectionCard key={'card_preview_'+idx} theme={theme} item={item} clipped={isCaseClipped(idx)}/>
          ))}
          {items.data?.length > 4 && (
            <div className={cn("hidden w-full md:flex col-span-12 absolute -bottom-20 z-10", {
              "-bottom-8": hideOtherCases
            })}>
              <div className="relative top-0 w-full h-px bottom-0 m-auto bg-yw-gray-300"></div>
              <button
                onClick={() => setSeeMore((s) => !s)}
                className={`btn group rounded-full flex items-center justify-center whitespace-nowrap font-montserrat yw-button-small py-4 px-6 text-sm leading-none ${themeData.buttonVariant}`}
              >
                <span className="flex-1 text-center">
                  {seeMore ? "See less" : "See more"}
                </span>
                <span className="ml-auto">
                  <svg
                    className={cn("ltr:ml-2 rtl:mr-2 -rotate-90", themeData.arrowStyle, {
                      "rotate-90": seeMore
                    })}
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.65265 7.72974H13.4109V6.41089H2.65265L7.92969 0.933603L6.97993 0.0185613L0.185983 7.07031L6.97993 14.1221L7.92969 13.207L2.65265 7.72974Z"
                      fill="#313339"
                    ></path>
                  </svg>
                </span>
              </button>
              <div className="relative top-0 w-full h-px bottom-0 m-auto bg-yw-gray-300"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CasePreviewSection;
