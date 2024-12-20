import { FC } from "react";
import cn from "classnames";
import StrapiImage from "~/components/StrapiImage";
import { StrapiImageData, Theme } from "~/types";

const themes = {
  dark: {
    textColorPrimary: "text-white",
    textColorSecondary: "text-yw-gray-300",
    sectionBg: "bg-yw-primary-default",
    cardBg: "card-dark",
    buttonVariant: "btn-secondary-inverted",
    arrowStyle: "svg-black",
    cardNumberColor: "text-yw-gray-300",
  },
  light: {
    textColorPrimary: "text-yw-primary-default",
    textColorSecondary: "text-yw-gray-500",
    sectionBg: "bg-yw-gray-100",
    cardBg: "card-light",
    buttonVariant: "btn-secondary",
    arrowStyle: "svg-white",
    cardNumberColor: "text-yw-cta-default",
  },
};

type TCardItem = {
  title: string;
  text: string;
  icon?: StrapiImageData;
  iconDark?: StrapiImageData;
  body?: string;
  buttonLink?: string;
  cardLink?: string;
  html_title: string;
};

type TCardProps = {
  data: TCardItem;
  theme: Theme;
  mode: "card" | "block";
  card_number: string | null;
  className: string;
};

const Card: FC<TCardProps> = ({
  data,
  theme,
  mode = "card",
  card_number,
  className,
}) => {
  const themeData = themes[theme || Theme.light];

  const Component = data.cardLink ? "a" : "div";

  return (
    <Component
      className={cn(mode === "card" && themeData.cardBg, className)}
      href={data.cardLink}
    >
      {data.icon?.data || data.iconDark?.data ? (
        <div className="mb-4">
          <StrapiImage
            image={theme == "light" ? data?.iconDark?.data : data?.icon?.data}
            width="56"
            height="56"
            loading="lazy"
            alt={data.title ? data.title : "cardSectionIcon"}
          />
        </div>
      ) : null}

      {card_number && (
        <div className={`yw-h3 !text-2xl mb-4 ${themeData.cardNumberColor}`}>
          {card_number}
        </div>
      )}
      {data.html_title ? (
        <div
          className="yw-h3 mb-4"
          dangerouslySetInnerHTML={{ __html: data.html_title }}
        ></div>
      ) : (
        <div className={`${themeData.textColorPrimary} yw-h3 mb-4`}>
          {data?.title}
        </div>
      )}
      {data.body ? (
        <div
          className={`${themeData.textColorSecondary} yw-t2`}
          dangerouslySetInnerHTML={{ __html: data.body }}
        ></div>
      ) : (
        data.text && (
          <div className={`${themeData.textColorSecondary} yw-t2 mb-4`}>
            {data.text}
          </div>
        )
      )}

      {data.buttonLink && (
        <a
          href={data.buttonLink}
          className={`btn group rounded-full flex items-center justify-center whitespace-nowrap font-montserrat yw-button-small py-4 px-6 text-sm leading-none mt-auto ${themeData.buttonVariant}`}
        >
          <span className="flex-1 text-center mr-1">Read more</span>
          <span className="ml-auto">
            <svg
              className={`${themeData.arrowStyle} rotate-180 ltr:ml-2 rtl:mr-2`}
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
      )}
    </Component>
  );
};

export default Card;
