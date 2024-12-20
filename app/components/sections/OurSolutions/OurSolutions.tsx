import { FC } from "react";
import cn from "classnames";
import StrapiImage from "~/components/StrapiImage";
import { StrapiImageData } from "~/types";

type TOurSolutionItem = {
  title: string;
  description: string;
  image: StrapiImageData;
};

type TOurSolutionsProps = {
  title: string;
  items: TOurSolutionItem[];
};

const OurSolutions: FC<TOurSolutionsProps> = ({ title, items }) => {
  return (
    <section className="py-[72px] sm:py-28 bg-yw-gray-100">
      <div className="container flex flex-col gap-y-10 sm:gap-y-16">
        <h2 className="yw-h2 text-yw-primary-default">{title}</h2>
        {items.map((item, i) => (
          <div
            key={i}
            className={cn(
              "flex xl:items-center justify-between flex-col xl:flex-row",
              {
                "xl:flex-row-reverse": i % 2,
              }
            )}
          >
            <div className="xl:max-w-[585px] mb-6">
              <h3 className="yw-t1 sm:!text-base !font-montserrat !font-medium text-yw-gray-950 uppercase mb-4">
                {item.title}
              </h3>
              <p className="yw-t1 text-yw-gray-500">{item.description}</p>
            </div>
            <div className="max-w-[479px] max-h-[479px] xl:w-[479px]">
              <StrapiImage
                image={item.image?.data}
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurSolutions;
