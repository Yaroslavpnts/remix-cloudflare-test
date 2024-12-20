import { type LoaderFunctionArgs } from "@remix-run/cloudflare";
import { createApi } from "~/api";
import CardsSection, { CardsSectionLayoutVariant } from "../CardsSection/CardsSection";

export const loader = async ({ context, request }: LoaderFunctionArgs) => {
  const api = createApi(context, request);
  const query = {
    populate: ["items", "items.icon", "items.iconDark"],
  };
  const data = await api.get(`/industry`, { params: query });

  return {
    data: data?.data?.attributes,
  };
};

const Industry = ({ data, ...rest }) => {
  return (
    <CardsSection
      {...data}
      {...rest}
      columns_quantity="option - 3"
      layout_variant={CardsSectionLayoutVariant.title_is_part_of_grid}
    />
  );
};

Industry.loader = loader;

export default Industry;
