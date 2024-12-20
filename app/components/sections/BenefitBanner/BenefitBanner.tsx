import type { FC } from "react";
import StrapiImage from "~/components/StrapiImage";
import type { StrapiImageData } from "~/types";

type TProps = {
  title: string;
  description: string;
  icon: StrapiImageData;
  dataSectionName: string;
};

const BenefitBanner: FC<TProps> = ({
  title,
  description,
  icon,
  dataSectionName,
}) => {
  return (
    <section
      className="bg-yw-primary-default pt-[292px]"
      data-section-name={dataSectionName}
    >
      <div className="container grid grid-cols-12 gap-y-[72px]">
        <div className="col-span-12 grid sm:grid-cols-7 grid-cols-6 md:grid-cols-6 relative">
          <div className="col-span-6 lg:col-span-4 z-[2]">
            <h2 className="yw-h2 mb-6 text-white md-title">{title}</h2>
            <p className="yw-t1 text-yw-gray-300 whitespace-pre-line">
              {description}
            </p>
          </div>

          {icon?.data && (
            <div className="absolute -top-[180px] lg:-top-[70px] left-0 lg:col-end-7 lg:col-span-2 lg:static self-end">
              <StrapiImage
                image={icon?.data}
                className="ml-auto"
                width="284"
                height="252"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default BenefitBanner;
