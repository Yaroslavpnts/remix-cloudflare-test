import { type LoaderFunctionArgs } from "@remix-run/cloudflare";
import { createApi } from "~/api";
import BaseCardSection from "../BaseCardSection/BaseCardSection";

export const loader = async ({ context, request }: LoaderFunctionArgs) => {
  const api = createApi(context, request);
  const query = {
    populate: ["items", "items.icon", "items.iconDark"],
  };
  const data = await api.get(`/web-development-manifesto`, { params: query });

  return {
    data: data?.data?.attributes,
  };
};

const WebDevelopmentManifesto = ({ data, ...rest }) => (
  <BaseCardSection {...data} {...rest} />
);

WebDevelopmentManifesto.loader = loader;

export default WebDevelopmentManifesto;
