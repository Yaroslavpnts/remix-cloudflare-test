import { type FC } from "react";

type TItem = {
  text: string;
};
type TProps = {
  title: string;
  description: string;
  sub_description: string;
  section_navigation_name: string;
  items: TItem[];
  dataSectionName: string;
};

const SectionWithList: FC<TProps> = ({
  title,
  description,
  sub_description,
  items,
  section_navigation_name,
  dataSectionName,
}) => {
  return (
    <section
      data-sectionid={section_navigation_name}
      className="py-20"
      data-section-name={dataSectionName}
    >
      <div className="container grid grid-cols-12 gap-y-10">
        <div className="yw-h2 mb-4 grid col-span-8">{title}</div>
        <div className="col-span-12">
          <p className="yw-t1">{description}</p>
          <div className="grid grid-cols-12 gap-y-10 sm:gap-10 my-10">
            {items.map((item: TItem, idx: number) => (
              <div key={idx} className="col-span-12 sm:col-span-6 yw-h3">
                {item.text}
              </div>
            ))}
          </div>
          <p className="yw-t1">{sub_description}</p>
        </div>
      </div>
    </section>
  );
};

export default SectionWithList;
