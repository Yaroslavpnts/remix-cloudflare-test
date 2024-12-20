import { type LoaderFunctionArgs } from "@remix-run/cloudflare";
import { createApi } from "~/api";
import CardsSection, { CardsSectionLayoutVariant } from "../CardsSection/CardsSection";

export const loader = async ({ context, request }: LoaderFunctionArgs) => {
  const api = createApi(context, request);
  const query = {
    populate: ["items", "items.icon", "items.iconDark"],
  };
  const data = await api.get(`/why-yojji`, { params: query });

  return {
    data: data?.data?.attributes,
  };
};

const Why = ({ data, ...rest }) => {
  return (
    <CardsSection
      {...data}
      {...rest}
      columns_quantity="option - 3"
      // title_is_part_of_grid
      layout_variant={CardsSectionLayoutVariant.title_is_part_of_grid}
    />
  );
};

Why.loader = loader;

export default Why;
