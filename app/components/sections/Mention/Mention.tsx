import { FC } from "react";
import StrapiImage from "~/components/StrapiImage";
import QuoteLeft from "~/icons/rounded-quote-left.svg";
import QuoteRight from "~/icons/rounded-quote-right.svg";
import { StrapiImageData } from "~/types";

type TMentionProps = {
  member: string;
  position: string;
  description: string;
  image: StrapiImageData;
};

const Mention: FC<TMentionProps> = ({
  member,
  position,
  description,
  image,
}) => {
  return (
    <section className="py-[72px] sm:py-28 bg-yw-gray-100">
      <div
        className={`container flex gap-4 sm:gap-10 flex-wrap xl:flex-nowrap`}
      >
        <div className="col-span-4">
          <StrapiImage
            image={image?.data}
            className="w-full sm:w-auto sm:max-w-[375px] max-h-[357px] rounded-3xl"
          />
        </div>
        <div className="flex flex-col p-8 col-span-8 bg-white rounded-3xl max-h-[450px] xl:max-h-[357px]">
          <div className="shrink-0 mb-4">
            <img
              src={QuoteLeft}
              alt="quote"
              loading="lazy"
              width="32"
              height="32"
            />
          </div>
          <blockquote className="yw-h4 !font-medium">{description}</blockquote>
          <div className=" mt-10 xl:mt-auto">
            <div className="yw-h4 text-yw-gray-900">{member}</div>
            <div className="yw-t2-med text-yw-gray-400 mb-4">{position}</div>
            <div className="shrink-0 flex justify-end">
              <img
                src={QuoteRight}
                alt="quote"
                loading="lazy"
                width="32"
                height="32"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mention;
