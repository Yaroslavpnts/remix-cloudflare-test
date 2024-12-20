import cn from "classnames";
import StrapiImage from "~/components/StrapiImage";
import type { StrapiImageData } from "~/types";

type TItem = {
  icon: StrapiImageData;
  title: string;
};

function TechnologiesAndToolsItems({
  items,
  containerClassName,
  itemClassName,
}: {
  items: TItem[];
  containerClassName?: string;
  itemClassName?: string;
}) {
  return (
    <div
      className={cn(
        "sm:col-span-7 col-span-12 flex gap-8 flex-wrap",
        containerClassName
      )}
    >
      {items?.map((item) => (
        <div
          className="flex flex-col gap-3 text-center w-[104px] items-center"
          key={item.title}
        >
          <StrapiImage image={item.icon?.data} width="40" height="40" />
          <span className={`yw-h4 ${itemClassName}`}>{item.title}</span>
        </div>
      ))}
    </div>
  );
}

export default TechnologiesAndToolsItems;
