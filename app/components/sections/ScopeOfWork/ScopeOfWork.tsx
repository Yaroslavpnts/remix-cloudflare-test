import { FC } from "react";
import StrapiImage from "~/components/StrapiImage";
import { StrapiImageData } from "~/types";

type TScopeOfWorkProps = {
  title: string;
  description: string;
  image: StrapiImageData;
};

const ScopeOfWork: FC<TScopeOfWorkProps> = ({ title, description, image }) => {
  return (
    <section className="py-[72px] sm:py-28 bg-yw-gray-100">
      <div className="container">
        <h2 className="yw-h2 text-yw-primary-default mb-6">{title}</h2>
        <p className="yw-t1 text-yw-gray-500 mb-10 sm:mb-14 max-w-[690px]">
          {description}
        </p>
        <StrapiImage image={image.data} />
      </div>
    </section>
  );
};

export default ScopeOfWork;
