import { type LoaderFunctionArgs } from "@remix-run/cloudflare";
import LastProjectCard from "../sections/LastProject/LastProjectCard";
import Slider from "../Slider/Slider";
import { createApi } from "~/api";
import { Theme, type Portfolio } from "~/types";

// TODO remove after Prortfolio section will be used everywhere

export const loader = async ({ context, request }: LoaderFunctionArgs) => {
  const api = createApi(context, request);
  const query = {
    populate: ["image", "industries", "technologies"],
    sort: {
      meta_created_at: "desc",
    },
    pagination: {
      pageSize: 7,
    },
  };
  const data = await api.get(`/portfolios`, { params: query });

  return {
    portfolios: data?.data,
  };
};

const PortfolioFeaturedCases = ({
  portfolios,
  dataSectionName,
  carousel,
}: {
  portfolios: Portfolio[];
  dataSectionName: string;
  carousel: boolean;
}) => {
  return (
    <section data-section-name={dataSectionName}>
      {carousel ? (
        <Slider
          title="Cases"
          className="pt-24 pb-36"
          theme={Theme.dark}
          items={portfolios.map((item, index) => (
            <LastProjectCard
              item={item}
              loading={index === 0 ? "eager" : "lazy"}
              theme={Theme.dark}
            />
          ))}
        />
      ) : (
        portfolios?.map((item, index: number) => {
          const even = index % 2 === 0;
          const sectionBg = !even ? "bg-yw-primary-default" : "bg-yw-white";
          const theme = (even ? "light" : "dark") as Theme;

          return (
            <section
              className={`${sectionBg} py-20`}
              key={"portfolio_" + item.id}
            >
              <div className="container">
                <LastProjectCard
                  item={item}
                  theme={theme}
                  reverseOrder={even}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </section>
          );
        })
      )}
    </section>
  );
};

PortfolioFeaturedCases.loader = loader;

export default PortfolioFeaturedCases;
