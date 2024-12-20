import { type FC } from "react";
import StrapiImage from "~/components/StrapiImage";
import { Theme } from "~/types";
import SmallProjectCase from "../SmallProjectCase/SmallProjectCase";
import ServiceTestimonialSingle from "../ServiceTestimonialSingle/ServiceTestimonialSingle";
import { useWindowSize } from "@uidotdev/usehooks";

enum ItemColumns {
  three = "three",
  two = "two",
}

type TItems = {
  icon: any;
  iconDark: any;
  title: string;
  text: string;
  wide: boolean;
};

type TTestimonialShortCard = {
  icon: any;
  title: string;
  description: string;
  review_stars: number;
};

type TProjectShortCase = {
  icon: any;
  title: string;
  description: string;
  sub_description: string;
  button_text: string;
};

type TProps = {
  theme: Theme;
  title: string;
  description: string;
  section_navigation_name: string;
  items: TItems[];
  testimonial_short_card: TTestimonialShortCard;
  project_short_case: TProjectShortCase;
  button_text: string;
  items_columns: ItemColumns;
  order?: string;
  button_link: string;
};

const TechExcellenceShowcase: FC<TProps> = ({
  items,
  theme,
  title,
  description,
  button_text,
  testimonial_short_card,
  project_short_case,
  section_navigation_name,
  order,
  items_columns,
  button_link,
  dataSectionName,
}) => {
  const size = useWindowSize();
  const orders = order?.split(",");
  const themes: any = {
    light: {
      sectionBg: "bg-yw-gray-100",
      cartBg: "bg-white",
      textColor: "text-yw-primary-default",
      textSecondary: "text-yw-gray-500",
      btnVariant: "btn-secondary",
      svgVariant: "svg-white",
    },
    dark: {
      sectionBg: "bg-yw-primary-default",
      cartBg: "bg-yw-gray-800",
      textColor: "text-white",
      textSecondary: "text-yw-gray-300",
      btnVariant: "btn-secondary-inverted",
      svgVariant: "svg-black",
    },
  };
  const themeData = themes[theme || Theme.light];
  const itemsSize = {
    two: 3,
    three: 2,
  };
  return (
    <section
      className={`${themeData.sectionBg}`}
      data-sectionid={section_navigation_name}
      data-section-name={dataSectionName}
    >
      <div className="container py-28 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
        {title && (
          <div
            style={{
              order: orders?.[0],
            }}
            className={`p-6 flex items-center flex-col text-center sm:items-start sm:text-start`}
          >
            <h2 className={`${themeData.textColor} yw-h2 mb-4`}>{title}</h2>
            <p className={`${themeData.textColor} yw-t1 mb-8`}>{description}</p>
            <a href={button_link}>
              <button
                className={`btn group rounded-full flex items-center justify-center whitespace-nowrap font-montserrat yw-button-small py-4
            px-6 text-sm leading-none yw-button-small ${themeData.btnVariant}`}
                data-variant="secondary:inverted"
              >
                {button_text}
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
        )}
        {items && (
          <div
            style={{
              order: size.width! < 1024 ? orders?.[0] : orders?.[1],
            }}
            className={`grid gap-6 grid-cols-6`}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                className={`p-4 ${
                  themeData.cartBg
                } rounded-lg flex items-center justify-center flex-col ${
                  item.wide
                    ? "col-span-6"
                    : `col-span-${itemsSize[items_columns]}`
                } `}
              >
                <div className="mb-4">
                  <StrapiImage
                    image={
                      theme === "light" ? item.iconDark?.data : item.icon?.data
                    }
                    loading="lazy"
                    alt="test"
                    width="auto"
                    height="auto"
                  />
                </div>
                <p className={`${themeData.textColor} text-center`}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        )}

        {project_short_case && (
          <SmallProjectCase
            style={{
              order: size.width! < 1024 ? orders?.[2] : orders?.[3],
            }}
            theme={theme}
            items={project_short_case}
          />
        )}

        {testimonial_short_card && (
          <ServiceTestimonialSingle
            style={{
              order: size.width! < 1024 ? orders?.[3] : orders?.[2],
            }}
            theme={theme}
            items={testimonial_short_card}
          />
        )}
      </div>
    </section>
  );
};

export default TechExcellenceShowcase;
