import cn from "classnames";
import type { StrapiImageData } from "~/types";
import StrapiImage from "../StrapiImage";

const Solutions = ({
  title,
  description,
  solutions,
}: {
  title?: string;
  description?: string;
  solutions: any[];
}) => {
  return (
    <section className="py-8 md:py-20 bg-yw-gray-100">
      <div className="container">
        {title && description && (
          <div className={"md:w-1/3 mb-10"}>
            {title && <div className="yw-h2 leading-none mb-4">{title}</div>}
            {description && <div className={"yw-t1"}>{description}</div>}
          </div>
        )}

        <div className="flex flex-col lg:gap-y-20 gap-y-10">
          {solutions?.map((solution: any, id: number) => {
            const columns_quantity =
              solution.img_columns_quantity || "option - 1";
            return (
              <div className="flex flex-col gap-8" key={"solution-" + id}>
                <div className="grid grid-cols-12 gap-y-4">
                  <div className="yw-h3 leading-none mb-4 col-span-12 md:col-span-5">
                    {solution.title}
                  </div>

                  <div className="col-span-12 md:col-span-7">
                    <div
                      className="prose mb-6 yw-t1"
                      dangerouslySetInnerHTML={{ __html: solution.html_ }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-12 md:gap-x-10 gap-x-4 gap-y-8">
                  {!!solution?.images?.data?.length &&
                    solution.images.data.map(
                      (img: StrapiImageData, id: number) => (
                        <div
                          className={cn(
                            "flex justify-center items-center rounded-3xl overflow-hidden",
                            {
                              "col-span-12": columns_quantity === "option - 1",

                              "col-span-12  md:col-span-6":
                                columns_quantity === "option - 2",
                            }
                          )}
                          key={"solution-image-" + id}
                        >
                          <StrapiImage image={img} className="max-w-full" />
                        </div>
                      )
                    )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
