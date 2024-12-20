import { type FC } from "react";
import StrapiImage from "~/components/StrapiImage";
import { Theme } from "~/types";

type TItems = {
  icon: any;
  title: string;
  description: string;
  sub_description: string;
  button_text: string;
  button_link: string;
};

type TProps = {
  theme: Theme;
  items: TItems;
  order?: string;
  style?: React.CSSProperties;
};

const SmallProjectCase: FC<TProps> = ({ items, theme, order = "", style }) => {
  const themes: any = {
    dark: {
      cartBg:
        "bg-yw-gray-800 rounded-3xl shadow p-8 flex flex-col items-center sm:items-start justify-start",
      textColor: "text-white",
      textSecondary: "text-yw-gray-300",
      btnVariant: "btn-secondary-inverted",
      svgVariant: "svg-black",
    },
    light: {
      cartBg:
        "bg-white rounded-3xl p-8 shadow flex flex-col items-center sm:items-start justify-start",
      textColor: "yw-primary-default",
      textSecondary: "text-yw-gray-500",
      btnVariant: "btn-secondary",
      svgVariant: "svg-white",
    },
  };
  const themeData = themes[theme || Theme.light];
  return (
    <div
      style={style}
      className={`${themeData.cartBg} grid grid-cols-12 gap-4 !p-6 ${order}`}
    >
      <div className="col-span-4 flex h-full justify-center items-center">
        <div>
          <StrapiImage
            image={items?.icon?.data}
            className="w-full"
            loading="lazy"
            width="600"
            height="600"
          />
        </div>
      </div>
      <div className="flex flex-col w-full col-span-8">
        <h3 className={`${themeData.textColor} yw-h4 mb-2`}>{items.title}</h3>
        <p className={`${themeData.textSecondary} yw-t2 mb-2 line-clamp-2`}>
          {items.description}
        </p>
        <p className={`${themeData.textSecondary} yw-t2-med mb-4`}>
          {items.sub_description}
        </p>
        <a href="/case-studies">
          <button
            className={`btn group rounded-full flex items-center justify-center !py-3
                           yw-button-small ${themeData.btnVariant}`}
          >
            {items.button_text}
            <span>
              <svg
                className={`${themeData.svgVariant} rotate-180 ltr:ml-2 rtl:mr-2`}
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.65265 7.72974H13.4109V6.41089H2.65265L7.92969 0.933603L6.97993 0.0185613L0.185983 7.07031L6.97993 14.1221L7.92969
                    13.207L2.65265 7.72974Z"
                  fill="#313339"
                ></path>
              </svg>
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default SmallProjectCase;
