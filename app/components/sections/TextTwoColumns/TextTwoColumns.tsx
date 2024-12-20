import type { FC } from "react";

type TProps = {
  title: string;
  description: string;
  text: string;
  dataSectionName: string;
};

const TextTwoColumns: FC<TProps> = ({
  title,
  description,
  text,
  dataSectionName,
}) => {
  return (
    <section
      className={`bg-yw-primary-default py-28`}
      data-section-name={dataSectionName}
    >
      <div className="container grid grid-cols-12 gap-y-10 lg:gap-10">
        <div className="col-span-12 grid grid-cols-1 gap-y-4">
          <div
            className={`text-white yw-h2 md:w-4/5 lg:w-3/5 xl:w-1/2 md-text`}
          >
            {title}
          </div>
          <div className="grid grid-cols-12 gap-y-8 lg:gap-10 text-yw-gray-200">
            <div className="col-span-12 md:col-span-6 break-normal md-text">
              {description}
            </div>
            <div className="col-span-12 md:col-span-6 break-normal">{text}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextTwoColumns;
