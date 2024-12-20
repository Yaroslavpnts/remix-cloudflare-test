import { FC } from "react";
import StrapiImage from "~/components/StrapiImage";
import ArrowBlueIcon from "~/icons/components/ArrowBlueIcon";
import { PortfolioData } from "~/types";

type TSimilarCasesProps = {
  title: string;
  portfolios: PortfolioData;
};

const SimilarCases: FC<TSimilarCasesProps> = ({ title, portfolios }) => {
  return (
    <section className="py-[72px] sm:py-28 bg-yw-gray-100">
      <div className="container">
        <h2 className="yw-h2 text-yw-gray-900 mb-6 sm:mb-16 col-span-12">
          {title}
        </h2>
        <div className="flex overflow-x-auto mobile-slider sm:grid grid-cols-12 gap-3 sm:gap-10">
          {(portfolios.data || []).map(({ attributes }) => (
            <div
              key={attributes.title}
              className="col-span-12 md:col-span-6 xl:col-span-4 flex-shrink-0 max-w-[254px] sm:max-w-none"
            >
              <div className="h-[254px] sm:h-[450px] md:h-[375px] mb-3 sm:mb-6 bg-yw-gray-200 rounded-[20px]">
                <StrapiImage
                  image={attributes.image?.data}
                  className="w-full h-full object-contain"
                  alt={attributes.title}
                />
              </div>
              <h4 className="yw-h4 !font-montserrat text-yw-gray-900 mb-1 sm:mb-2">
                {attributes.name}
              </h4>
              <p className="text-xs sm:text-lg sm:leading-relaxed font-semibold font-opensan text-yw-gray-500 mb-3 sm:mb-6 overflow-hidden text-ellipsis line-clamp-3">
                {attributes.description}
              </p>
              <a
                href={`/case-studies/${attributes.slug}`}
                className="yw-t1 !leading-3 !sm:leading-relaxed !font-bold !font-montserrat text-yw-cta-default flex items-center cursor-pointer mt-auto"
              >
                View
                <div className="ltr:ml-2 rtl:mr-2">
                  <ArrowBlueIcon className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarCases;
