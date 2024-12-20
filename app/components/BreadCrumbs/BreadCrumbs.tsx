import { FC } from "react";
import cn from "classnames";
import LeftArrowIcon from "~/icons/components/LeftArrowIcon";
import Arrow from "./icons/Arrow";
import { useLocation, useNavigate } from "@remix-run/react";

export type TBreadCrumbsItem = {
  name: string;
  link?: string;
};

type TbreadCrumbsProps = {
  items: TBreadCrumbsItem[];
  className?: string;
};

const BreadCrumbs: FC<TbreadCrumbsProps> = ({ items, className }) => {
  const navigate = useNavigate();
  const location = useLocation();

  let breadCrumbItems: TBreadCrumbsItem[];

  if (!items?.length) {
    const paths = location.pathname.split("/").slice(1);

    breadCrumbItems = paths.map((path) => {
      return { name: path[0].toUpperCase() + path.slice(1), link: `/${path}` };
    });
  } else {
    breadCrumbItems = [{ name: "Yojji", link: "/" }, ...items];
  }

  return (
    <section
      className={cn(
        "container relative flex flex-wrap pt-10",
        className,
        items ? "sm:pt-8" : ""
      )}
    >
      <ul className="flex items-center gap-4 sm:gap-x-8 sm:gap-y-4 text-yw-gray-400 font-montserrat font-semibold text-sm leading-none overflow-x-auto flex-nowrap sm:flex-wrap mobile-slider w-full">
        <li className="flex items-center absolute left-3 xs:left-8 z-10 sm:static sm:z-auto">
          <a
            className="flex cursor-pointer items-center pl-0 pr-2 py-2 sm:p-2 bg-white"
            onClick={() => navigate(-1)}
          >
            <LeftArrowIcon color="#8A8F94" />
            <span>Back</span>
          </a>
        </li>
        {breadCrumbItems.map((item, i) => (
          <li
            key={item.name}
            className={cn("flex items-center sm:ml-0", {
              "ml-[82px]": i === 0,
            })}
          >
            {i !== breadCrumbItems.length - 1 ? (
              <>
                <Arrow className="mr-4 sm:mr-6" />
                <a className="whitespace-nowrap p-2" href={item.link}>
                  {item.name}
                </a>
              </>
            ) : (
              <>
                <Arrow className="mr-4 sm:mr-6" />
                <div className="flex flex-row gap-1 flex-wrap p-2 whitespace-nowrap sm:whitespace-normal leading-5">
                  {item.name}
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BreadCrumbs;
