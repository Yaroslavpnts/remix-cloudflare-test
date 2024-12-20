import type { StrapiImageData } from "~/types";
import StrapiImage from "../StrapiImage";

type TFeature = {
  text: string;
  title: string;
  image?: { data: StrapiImageData };
};
const Features = ({
  title,
  features,
}: {
  title: string;
  features: TFeature[];
}) => {
  return (
    <section className="py-8 md:py-20 bg-yw-gray-200">
      <div className="container">
        <h2 className="mb-16 yw-h2">{title}</h2>

        {features.map((feature: any) => {
          return (
            <>
              {feature.image?.data && (
                <div className="grid grid-cols-12 gap-x-4 gap-y-4 py-4">
                  <div className="col-span-12 md:col-span-4 flex justify-center flex-col">
                    <div className="yw-h3 leading-none mb-4">
                      {feature.title}
                    </div>
                    <div
                      className="yw-t1 leading-none"
                      dangerouslySetInnerHTML={{ __html: feature.text }}
                    ></div>
                  </div>

                  <div className="col-span-12 md:col-span-8 flex justify-center items-center flex-col ">
                    <StrapiImage image={feature.image?.data} />
                  </div>
                </div>
              )}

              {!feature.image?.data && (
                <div
                  className="yw-t1 leading-none mb-4"
                  dangerouslySetInnerHTML={{ __html: feature.text }}
                ></div>
              )}
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
