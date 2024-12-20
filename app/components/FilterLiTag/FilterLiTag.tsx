import cn from "classnames";

interface ITag {
  activeClass?: string;
  title: string;
  className?: string;
}

export const Tag: React.FC<ITag> = ({ title, activeClass, className }) => (
  <div
    className={cn(
      "bg-[#E7E9EA] yw-t2-semibold rounded-[3rem] py-[10px] px-4 cursor-pointer whitespace-nowrap hover:bg-yw-primary-default hover:text-white",
      className,
      activeClass
    )}
  >
    {title}
  </div>
);

interface IFilterLiTag {
  title: string;
  isActive?: boolean;
}

export const FilterLiTag: React.FC<IFilterLiTag> = ({ title, isActive }) => (
  <li>
    <Tag activeClass={isActive ? "active-tag" : ""} title={title} />
  </li>
);
