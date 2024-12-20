import React, { type FC } from "react";
import StrapiImage from "~/components/StrapiImage";
import { type Portfolio, Theme, type Category } from "~/types";
import { slugify } from "~/utils/slugify";

type TProps = {
  theme: Theme;
  item: Portfolio;
};

const OtherCaseStudiesCard: FC<TProps> = ({ theme, item }) => {
  const themes = {
    dark: {
      cardBg: "card-dark",
      textColorPrimary: "text-white",
      textColorSecondary: "text-yw-gray-300",
      buttonVariant: "btn-secondary-inverted",
      arrowStyle: "svg-black",
    },
    light: {
      cardBg: "card-light",
      textColorPrimary: "text-yw-gray-900",
      textColorSecondary: "text-yw-gray-500",
      buttonVariant: "btn-secondary",
      arrowStyle: "svg-white",
    },
  };

  const themeData = themes[theme || Theme.light];

  const link = "/case-studies/" + slugify(item.attributes.slug);

  return (
    <div className={`${themeData.cardBg} col-span-12 md:col-span-6`}>
      <div className="flex justify-center items-center mb-4">
        <StrapiImage
          image={item.attributes.image?.data}
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
      <div className="text-center flex flex-col justify-between items-center w-full h-full">
        <div
          className={`flex flex-col ${themeData.textColorSecondary} gap-2 mb-4`}
        >
          <h3 className={`${themeData.textColorPrimary} yw-h3`}>
            {item.attributes.title}
          </h3>
          <p className={`${themeData.textColorSecondary} yw-t2 line-clamp-2`}>
            {item.attributes.description}
          </p>
          <p className="yw-t2-med text-yw-gray-400">
            {item.attributes.industries?.data.map((industry: Category, i) => (
              <React.Fragment key={industry.id}>
                <a href={`/case-studies?filters=${industry.attributes.slug}`}>
                  {industry.attributes.title}
                </a>
                {i !== item.attributes.industries.data.length - 1 && " • "}
              </React.Fragment>
            ))}
          </p>
        </div>
        <a
          href={link}
          className={`btn group rounded-full flex items-center justify-center whitespace-nowrap font-montserrat yw-button-small py-4 px-6 text-sm leading-none ${themeData.buttonVariant}`}
        >
          <span className="flex-1 text-center">Open full case</span>
          <span className="ml-auto">
            <svg
              className={` ${themeData.arrowStyle} rotate-180 ltr:ml-2 rtl:mr-2 `}
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
        </a>
      </div>
    </div>
  );
};

export default OtherCaseStudiesCard;
