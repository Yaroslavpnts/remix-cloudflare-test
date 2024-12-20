import React, { FC } from "react";

type TItem = {
  title: string;
  text: string;
  content_html: string;
};

type TCasteTitleProps = {
  title: string;
  client_name: string;
  industry: string;
  platform: string;
  budget: string;
  duration: string;
  team: string;
  hours: string;
  items: TItem[];
};

const CaseTitle: FC<TCasteTitleProps> = ({
  title,
  client_name,
  industry,
  platform,
  budget,
  duration,
  team,
  hours,
  items,
}) => {
  const splitedClient = client_name.split(" ");

  return (
    <section className="py-[72px] sm:py-28 bg-yw-gray-100">
      <div className="container font-montserrat">
        {title && <h2 className="yw-h2 mb-10">{title}</h2>}
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col sm:flex-row justify-between gap-5 flex-wrap">
              <div>
                <p className="text-sm sm:text-base mb-4 uppercase text-yw-gray-500">
                  client
                </p>
                <p className="hidden sm:block text-xl font-bold text-yw-gray-950">
                  {splitedClient.map((word, index) => (
                    <React.Fragment key={index}>
                      {word}
                      {index < splitedClient.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
                <p className="block sm:hidden text-base font-bold text-yw-gray-950">
                  {client_name}
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base mb-4 uppercase text-yw-gray-500">
                  industry
                </p>
                <p className="text-base sm:text-xl font-bold text-yw-gray-950">
                  {industry}
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base mb-4 uppercase text-yw-gray-500">
                  platform
                </p>
                <p className="text-base sm:text-xl font-bold text-yw-gray-950">
                  {platform}
                </p>
              </div>
            </div>
            <div className="h-[1px] bg-yw-gray-400 my-6 sm:my-8"></div>
            <div className="flex justify-between gap-6 sm:gap-10 mb-10">
              <div className="w-1/2">
                <p className="font-bold text-yw-gray-950 sm:text-[28px] lg:text-[32px] mb-2">
                  {budget}
                </p>
                <p className="text-sm sm:text-base font-semibold">Budget</p>
              </div>
              <div className="w-1/2">
                <p className="font-bold text-yw-gray-950 sm:text-[28px] lg:text-[32px] mb-2">
                  {duration}
                </p>
                <p className="text-sm sm:text-base font-semibold">Duration</p>
              </div>
            </div>
            <div className="flex justify-between gap-6 sm:gap-10">
              <div className="w-1/2">
                <p className="font-bold text-yw-gray-950 sm:text-[28px] lg:text-[32px] mb-2">
                  {team}
                </p>
                <p className="text-sm sm:text-base font-semibold">Team</p>
              </div>
              <div className="w-1/2">
                <p className="font-bold text-yw-gray-950 sm:text-[28px] lg:text-[32px] mb-2">
                  {hours}
                </p>
                <p className="text-sm sm:text-base font-semibold">
                  Total number of hours
                </p>
              </div>
            </div>
          </div>
          <div className="grid col-span-12 lg:col-span-6 gap-y-8">
            {items.map((item) => (
              <div key={item.title}>
                <p className="text-yw-gray-950 uppercase mb-4">{item.title}</p>
                <p className="yw-h4 text-yw-gray-500 !font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default CaseTitle;
