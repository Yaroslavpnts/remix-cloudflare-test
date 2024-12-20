import type { FC } from "react";
import Checkmark from "~/icons/components/Checkmark";

type TItems = {
  title: string;
  description: string;
  tags: string;
  numeric: boolean;
};

type TProps = {
  theme: "dark" | "light";
  title: string;
  description: string;
  section_navigation_name: string;
  items: TItems[];
  dataSectionName: string;
};

const WorkFlowSection: FC<TProps> = ({
  title,
  items,
  section_navigation_name,
  dataSectionName,
}) => {
  return (
    <section
      className="bg-yw-primary-default py-28"
      data-sectionid={section_navigation_name}
      data-section-name={dataSectionName}
    >
      <div className="container grid grid-cols-12 gap-y-[72px]">
        <h2 className="text-white col-span-12 yw-h2 text-start">{title}</h2>
        {items.map((item, idx) => (
          <>
            <div
              key={idx}
              className="grid grid-cols-9 gap-10 justify-between col-span-12"
            >
              <h3 className="text-white yw-h3 col-span-9 xl:col-span-3 text-start">
                {item.title}
              </h3>
              <div className="col-span-9 xl:col-span-6">
                <div className="yw-t1 mb-10 text-yw-gray-300 text-start">
                  {item.description}
                </div>

                <div className="grid grid-cols-6 gap-x-10 gap-y-4 text-start">
                  {item.tags.split(",").map((tag, idx) => (
                    <div
                      key={idx}
                      className={`bg-yw-gray-950 p-4 rounded-lg flex items-center col-span-6 sm:col-span-3 ${
                        item.numeric ? "xl:col-span-2" : "xl:col-span-3"
                      }}`}
                    >
                      {item.numeric ? (
                        <div className="yw-t1 !font-bold mr-4 text-white rounded-full bg-[#44474d] flex justify-center items-center w-8 h-8">
                          {idx + 1}
                        </div>
                      ) : (
                        <div className="mr-4">
                          <Checkmark bgColor="#44474D" checkmarkColor="#FFF" />
                        </div>
                      )}
                      <h4 className="yw-h4 text-white whitespace-nowrap	">
                        {tag}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {idx !== items.length - 1 ? (
              <div className="border-b border-yw-gray-500 col-span-12"></div>
            ) : null}
          </>
        ))}
      </div>
    </section>
  );
};

export default WorkFlowSection;
