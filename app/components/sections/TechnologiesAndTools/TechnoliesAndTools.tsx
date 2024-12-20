import { type LoaderFunctionArgs } from "@remix-run/cloudflare";
import { createApi } from "~/api";
import TechnologiesAndToolsSection from "../TechnologiesAndToolsSection/TechnologiesAndToolsSection";

export const loader = async ({ context, request }: LoaderFunctionArgs) => {
  const api = createApi(context, request);
  const query = {
    populate: ["items", "items.icon"],
  };
  const data = await api.get(`/technology-and-tool`, { params: query });

  return {
    data: data?.data?.attributes,
  };
};

const TechnologiesAndTools = ({ data, ...rest }) => {
  return <TechnologiesAndToolsSection {...data} {...rest} />;
};

TechnologiesAndTools.loader = loader;

export default TechnologiesAndTools;
