import { Link } from "@remix-run/react";
import { useEffect, useRef } from "react";
import type { Category, Technology } from "~/types";
import { FilterLiTag } from "../FilterLiTag/FilterLiTag";

interface ICasesFilterTags {
  items: Array<Category | Technology>;
  title: string;
  activeFilters: string[];
}

const CasesFilterTags: React.FC<ICasesFilterTags> = ({
  items,
  title,
  activeFilters,
}) => {
  const getSlugs = (slug: string) =>
    activeFilters?.includes(slug)
      ? activeFilters?.filter((f) => f !== slug)
      : [...activeFilters, slug];

  return (
    <>
      <h4 className="col-span-12 lg:col-span-8 mb-3 text-yw-gray-400 text-sm font-semibold">
        {title}
      </h4>
      <div className="flex mb-6">
        <ul className="flex w-full gap-2 flex-wrap">
          {items.map((item) => {
            const slugs = getSlugs(item.attributes.slug);
            const to =
              slugs?.length === 0
                ? "/case-studies"
                : `/case-studies?filters=${slugs?.sort().join("_")}`;
            return (
              <Link key={item.id} reloadDocument to={to}>
                <FilterLiTag
                  title={item.attributes.title}
                  isActive={activeFilters?.includes(item.attributes.slug)}
                />
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

interface ICasesFilter {
  categories: Category[];
  technologies: Technology[];
  activeFilters: string[];
}

const CasesFilter: React.FC<ICasesFilter> = ({
  categories,
  technologies,
  activeFilters,
}) => {
  const filtersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scrolled = false;

    const handleScrollIntoView = () => {
      if (!filtersRef.current || !activeFilters.length || scrolled) {
        return;
      }

      filtersRef.current.scrollIntoView({ behavior: "smooth" });
      scrolled = true;
    };

    const handleLoad = () => {
      handleScrollIntoView();
    };

    // Check if the page is already fully loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Fallback: in case the `load` event is missed
    const fallbackTimeout = setTimeout(handleScrollIntoView, 500);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(fallbackTimeout);
    };
  }, [activeFilters]);

  return (
    <div ref={filtersRef} className="container relative col-span-12 mb-20">
      <h2 className="yw-h2 col-span-12 lg:col-span-8 mb-10">Cases</h2>
      {categories.length > 0 && (
        <CasesFilterTags
          activeFilters={activeFilters}
          title="Industries"
          items={categories}
        />
      )}
      {technologies.length > 0 && (
        <CasesFilterTags
          activeFilters={activeFilters}
          title="Technologies"
          items={technologies}
        />
      )}
    </div>
  );
};

export default CasesFilter;
