import type { FC } from "react";
import { useState } from "react";
import cn from "classnames";
import StrapiImage from "~/components/StrapiImage";
import PlusIcon from "~/icons/components/PlusIcon";
import MinusIcon from "~/icons/components/MinusIcon";
import type { StrapiImageData } from "~/types";

type TContent = {
  title: string;
  text: string;
  icon: StrapiImageData;
};

type TProps = {
  heading: string;
  items: TContent[];
  dataSectionName: string;
};

type TStageAccordionProps = {
  content: TContent;
  index: number;
};

const StageAccordion: FC<TStageAccordionProps> = ({ content, index }) => {
  const [open, setOpen] = useState(false);
  const { title, text, icon } = content;

  const handleClick = () => setOpen((prevState) => !prevState);

  return (
    <div
      className={cn(
        "col-span-12 gap-y-8 text-start pb-10 border-b-[1px] border-yw-gray-300",
        {
          "border-t-[1px] pt-10": index === 0,
        }
      )}
    >
      <div
        className={cn("flex justify-between items-center cursor-pointer", {
          "pb-4": open,
        })}
        onClick={handleClick}
      >
        <h2 className={"yw-h3"}>{title}</h2>
        <div className="flex justify-center items-center bg-yw-gray-800 rounded-full w-10 h-10 cursor-pointer">
          {open ? <MinusIcon color="#FAFAFC" /> : <PlusIcon color="#FAFAFC" />}
        </div>
      </div>

      <div className={open ? "block" : "hidden"}>
        <p className="mb-8 text-yw-gray-500 yw-t1 col-span-12">{text}</p>

        <StrapiImage image={icon?.data} className="w-full h-full" alt="icon" />
      </div>
    </div>
  );
};

const TabsAccordion: FC<TProps> = ({ heading, items, dataSectionName }) => {
  const [active, setActive] = useState<number>(0);
  const handleClick = (index: number) => setActive(index);

  return (
    <section className="py-28" data-section-name={dataSectionName}>
      <div className="container grid grid-cols-12 gap-y-10">
        <h2 className="col-span-12 max-w-xs sm:max-w-lg lg:max-w-sm yw-h2">
          {heading}
        </h2>
        <div className="col-span-12 grid-cols-12 gap-10 lg:grid hidden">
          <div className="col-span-4">
            {items.map(({ title }, i: number) => {
              return (
                <div
                  key={i}
                  className={cn("mb-6 border-l-0", {
                    "!border-l-2 border-sky-500 pl-[10px]": active === i,
                  })}
                >
                  <span
                    className={cn(
                      "cursor-pointer yw-t1-medium text-yw-gray-400 hover:text-yw-gray-900",
                      {
                        "text-yw-gray-900": active === i,
                      }
                    )}
                    onClick={() => handleClick(i)}
                  >
                    {title}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="col-span-8">
            {items.map(({ text, icon }, i) => {
              return (
                <div key={i} className={`${active === i ? "block" : "hidden"}`}>
                  <p className="yw-t2 text-yw-gray-500 mb-4">{text}</p>
                  <StrapiImage
                    image={icon?.data}
                    className="w-full h-full"
                    sizes="(min-width: 400px) 400px, 30vw"
                    alt="icon"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-span-12 grid-cols-12 gap-y-10 lg:hidden grid">
          {items.map((el, i) => (
            <StageAccordion key={i} content={el} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TabsAccordion;
