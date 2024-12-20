import StrapiImage from "~/components/StrapiImage";
import { Theme, type Category, type Portfolio } from "~/types";
import Testimonial from "./Testimonial";

const themes: any = {
  dark: {
    textColorPrimary: "text-white",
    buttonVariant: "btn-secondary-inverted",
    arrowStyle: "svg-black",
    tag: "tag-dark",
  },
  light: {
    textColorPrimary: "text-yw-primary-default",
    buttonVariant: "btn-secondary",
    arrowStyle: "svg-white",
    tag: "tag-light",
  },
};

const PortfolioCase = ({
  item,
  theme,
  reverseOrder = false,
  loading = "lazy",
}: {
  item: Portfolio;
  theme?: Theme;
  reverseOrder?: boolean;
  loading?: string;
}) => {
  const themeData = themes[theme || Theme.light];
  const orderContent = reverseOrder ? "order-second" : "order-first";
  const orderImage = reverseOrder ? "order-first" : "order-second";

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 md:gap-10 gap-x-0 gap-y-8">
      <div className={`${orderContent} md:col-span-5 col-span-12`}>
        <h3 className="yw-h3 text-yw-gray-400 mb-2">{item.attributes.name}</h3>
        <h2 className={`yw-h2 mb-2 ${themeData.textColorPrimary}`}>
          {item.attributes.title}
        </h2>

        <div className={`w-full ${orderImage} md:hidden mb-4`}>
          <StrapiImage
            image={item.attributes.image?.data}
            loading={loading}
            className="w-full max-h-full"
          />
        </div>

        <p className={`yw-t1 mb-8 ${themeData.textColorPrimary} line-clamp-3`}>
          {item.attributes.description}
        </p>

        {(!!item.attributes.business_valuation ||
          !!item.attributes.total_downloads) && (
          <div className="grid grid-cols-2 mb-8 gap-8">
            {!!item.attributes.business_valuation && (
              <div>
                <div className={`yw-h2 ${themeData.textColorPrimary}`}>
                  ${item.attributes.business_valuation}
                </div>
                <div className="yw-h5 text-yw-gray-400">Business valuation</div>
              </div>
            )}
            {!!item.attributes.total_downloads && (
              <div>
                <div className={`yw-h2 ${themeData.textColorPrimary}`}>
                  {item.attributes.total_downloads}
                </div>
                <div className="yw-h5 text-yw-gray-400">Total downloads</div>
              </div>
            )}
          </div>
        )}

        {!!item.attributes.industries.data?.length && (
          <div className="flex gap-3 text-yw-gray-900 flex-wrap mb-8">
            {item.attributes.industries.data.map((category: Category) => (
              <div className={`tag ${themeData.tag}`} key={category.id}>
                {category.attributes.title}
              </div>
            ))}
          </div>
        )}

        {!!item.attributes.testimonials?.data?.length &&
          item.attributes.testimonials?.data?.map((t, id) => (
            <Testimonial
              theme={theme}
              testimonial={t}
              key={"testimonial-" + id}
            />
          ))}
        <a
          href={`/case-studies/${item.attributes.slug}`}
          className={`btn group rounded-full w-fit flex items-center justify-center whitespace-nowrap font-montserrat yw-button-small py-4 px-6 text-sm leading-none ${themeData.buttonVariant}`}
        >
          <span className="flex-1 text-center">Open full case</span>
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
      </div>

      <div className={`w-full ${orderImage} md:col-span-7 hidden md:block`}>
        <StrapiImage
          image={item.attributes.image?.data}
          loading={loading}
          className="w-full max-h-full"
        />
      </div>
    </div>
  );
};

export default PortfolioCase;
