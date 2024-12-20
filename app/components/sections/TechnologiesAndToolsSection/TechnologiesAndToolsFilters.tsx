import { FC } from "react";
import { FilterLiTag } from "~/components/FilterLiTag/FilterLiTag";

type TTechnologiesAndToolsFiltersProps = {
  items: string[];
  activeFilters: string[];
  handleChangeFilter: (filter: string) => void;
};

const TechnologiesAndToolsFilters: FC<TTechnologiesAndToolsFiltersProps> = ({
  items,
  activeFilters,
  handleChangeFilter,
}) => {
  return (
    <ul className="flex w-full gap-2 flex-wrap">
      {items.map((item) => (
        <div onClick={() => handleChangeFilter(item)}>
          <FilterLiTag title={item} isActive={activeFilters?.includes(item)} />
        </div>
      ))}
    </ul>
  );
};

export default TechnologiesAndToolsFilters;
