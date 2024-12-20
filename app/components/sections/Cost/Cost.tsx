import type { FC } from "react";

type TProps = {
  title: string;
  description?: string;
  description_html?: string;
  percent: number;
  percentText: string;
  section_navigation_name: string;
  dataSectionName: string;
};

const Cost: FC<TProps> = ({
  title: heading,
  description,
  description_html,
  percent,
  percentText,
  section_navigation_name,
  dataSectionName,
}) => {
  const width = 288;
  const circleWidth = 20;
  const radius = (width - 10 * 2) / 2;
  const circumference = radius * 2 * 3.14;

  let parsedPercentText = [percentText];

  if (percentText.includes("/n")) {
    parsedPercentText = percentText.split("/n").map(text => text)
  }


  return (
    <section
      className="bg-yw-primary-default py-28"
      data-sectionid={section_navigation_name}
      data-section-name={dataSectionName}
    >
      <div className="container grid grid-cols-12 gap-y-16">
        <div className="col-span-12 lg:col-span-8">
          <h3 className="yw-h2 text-white mb-4 sm:max-w-[530px]">{heading}</h3>
          {description_html && (
            <div
            className={`yw-t1 text-yw-gray-300 whitespace-pre-line md-text md-text-dark`}
            dangerouslySetInnerHTML={{__html: description_html}}
            >
            </div>
          )}
          {description && (
            <div
            className={`yw-t1 text-yw-gray-300 whitespace-pre-line md-text md-text-dark`}
            >
              {description}
            </div>
          )}
        </div>
        <div className="col-span-12 lg:col-span-4 relative">
          <div className="w-full h-full items-center flex justify-center">
            <svg className="w-[288px] h-[288px] -rotate-90">
              <circle
                className="text-yw-gray-500"
                strokeWidth={circleWidth}
                stroke="currentColor"
                fill="transparent"
                r={radius}
                cx={width / 2}
                cy={width / 2}
              />
              <circle
                className="text-yw-gray-200"
                strokeWidth={circleWidth}
                strokeDasharray={`${circumference}`}
                strokeDashoffset={`${
                  circumference - (percent / 100) * circumference
                }`}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r={radius}
                cx={width / 2}
                cy={width / 2}
              />
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/2 text-white text-center -translate-x-1/2 -translate-y-1/2">
            <div className="yw-h1">{percent}%</div>
            <div className="yw-t2" 
            >{parsedPercentText.map(text => (
              <p>{text}</p>
            ))}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cost;
