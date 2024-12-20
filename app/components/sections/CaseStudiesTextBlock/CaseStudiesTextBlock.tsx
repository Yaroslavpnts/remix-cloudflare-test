import { FC } from "react";
import CaseTextBlockImage from "~/icons/case-text-block.png";

type TCaseStudiesTextBlockProps = {
  text: string;
};

const CaseStudiesTextBlock: FC<TCaseStudiesTextBlockProps> = ({ text }) => {
  return (
    <section className="py-28 bg-yw-gray-100">
      <div className="container">
        <div className="bg-yw-primary-default flex flex-col lg:flex-row gap-8 sm:gap-16 justify-between lg:items-center py-4 px-6 sm:py-8 sm:px-12 lg:py-14 lg:px-[88px] rounded-3xl">
          <div
            className="yw-t2 text-yw-gray-200 !font-medium max-w-[670px] order-1 lg:order-0"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
          <div className="max-w-[286px] m-auto order-0 lg:order-1">
            <img src={CaseTextBlockImage} className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesTextBlock;
