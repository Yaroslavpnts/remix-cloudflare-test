import { FC } from "react";
import StrapiImage from "~/components/StrapiImage";
import { Technology } from "~/types";

type TItem = {
  title: string;
  technologies: { data: Technology[] };
};

type TProjectTechnologiesProps = {
  title: string;
  items: TItem[];
};

const ProjectTechnologies: FC<TProjectTechnologiesProps> = ({
  title,
  items,
}) => {
  return (
    <section className="py-[72px] sm:py-28 bg-yw-gray-100">
      <div className="container">
        <h2 className="yw-h2 text-yw-primary-default mb-10">{title}</h2>
        <div className="grid grid-cols-12 gap-y-10 gap-x-5 sm:gap-10">
          {items.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 flex flex-col gap-6"
            >
              <div className="text-yw-gray-950 uppercase yw-t2-med !text-sm sm:text-base !font-montserrat">
                {item.title}
              </div>
              {item.technologies.data.map(({ attributes }, index) => (
                <div
                  key={`project-technology-${attributes.title}-${index}`}
                  className="flex gap-6 items-center"
                >
                  <StrapiImage
                    image={attributes.icon?.data}
                    className="w-10 h-10 sm:w-14 sm:h-14"
                  />
                  <div className="text-black yw-t2-med !text-base !sm:text-base !font-montserrat">
                    {attributes.title}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTechnologies;
