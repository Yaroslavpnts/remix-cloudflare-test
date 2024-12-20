import { type LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import cn from "classnames";
import { createApi } from "~/api";
import { useLoaderData } from "@remix-run/react";
import Hero from "~/components/sections/Hero/Hero";
import PortfolioFeaturedCases from "~/components/PortfolioFeaturedCases/PortfolioFeaturedCases";
import Contact from "~/components/sections/Contact/Contact";
import ClientTestimonials from "~/components/sections/ClientTestimonials";
import { prepareMeta } from "~/utils/meta";
import Layout from "~/components/Layout";
import CasesFilter from "~/components/portfolio/CasesFilter";
import type { CategoryData, TechnologyData } from "~/types";
import BreadCrumbs, { TBreadCrumbsItem } from "../BreadCrumbs/BreadCrumbs";
import CaseStudiesTextBlock from "../sections/CaseStudiesTextBlock/CaseStudiesTextBlock";
import { useEventBanner } from "~/contexts/EventBanner.context";

export const meta = (props: any) => {
  const metaArray = prepareMeta(props);

  return metaArray;
};

export const loader = async ({
  context,
  request,
  params,
}: LoaderFunctionArgs) => {
  const api = createApi(context, request);

  const url = new URL(request.url);
  const categorySlug = url.searchParams.get("filters");
  const activeFilters = categorySlug?.split("_") || [];

  const { data: existCategories }: CategoryData = await api.get("/categories", {
    params: {
      populate: ["portfolios", "publishedAt"],
      filters: {
        portfolios: {
          id: {
            $notNull: true,
          },
          publishedAt: {
            $notNull: true,
          },
        },
      },
      pagination: {
        pageSize: 100,
      },
      sort: {
        case_page_filter_priority: "asc",
      },
    },
  });

  const { data: existTechnologies }: TechnologyData = await api.get(
    "/technologies",
    {
      params: {
        populate: ["portfolios", "publishedAt"],
        filters: {
          portfolios: {
            id: {
              $notNull: true,
            },
            publishedAt: {
              $notNull: true,
            },
          },
        },
        pagination: {
          pageSize: 100,
        },
      },
    }
  );

  const categoriesFilter =
    existCategories
      .filter((c) => activeFilters.includes(c.attributes.slug))
      .map((c) => c.attributes.slug) || [];

  const technologiesFilter =
    existTechnologies
      .filter((t) => activeFilters.includes(t.attributes.slug))
      .map((t) => t.attributes.slug) || [];

  const query: any = {
    populate: ["image", "categories", "industries", "technologies"],
    sort: ["createdAt:desc"],
  };

  const filters = [];

  if (categoriesFilter.length) {
    filters.push({
      industries: {
        slug: categoriesFilter,
      },
    });
  }

  if (technologiesFilter.length) {
    filters.push({
      technologies: {
        slug: technologiesFilter,
      },
    });
  }

  query.filters = {
    $or: filters,
  };

  const data = await api.get(`/portfolios`, { params: query });

  const footerData = await api.get(
    `/footer?populate=columns.items,columns.sub_items`
  );
  const testimonials = await api.get(
    `/testimonials?populate=image&sort=createdAt:desc`
  );

  if (!data?.data?.[0]) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }

  return json({
    portfolios: data?.data,
    footerData: footerData?.data?.attributes || {},
    testimonials: testimonials?.data,
    categories: existCategories || [],
    technologies: existTechnologies || [],
    activeFilters,
    env: context.env,
    meta: {
      title: `${activeFilters.join(",")} IT Case Studies - Yojji`,
      description:
        "Discover Key Projects in Yojji's Portfolio: A Showcase of Our Software Development Expertise.",
    },
  });
};

const Portfolio = () => {
  const { portfolios, testimonials, categories, technologies, activeFilters } =
    useLoaderData<typeof loader>();

  const { isShownEventBanner } = useEventBanner();

  const breadCrumbItems: TBreadCrumbsItem[] = [
    { link: "/case-studies", name: "Case studies" },
  ];

  if (activeFilters.length) {
    const breadCrumbWithFilter = activeFilters
      .map((f) => f.charAt(0).toUpperCase() + f.slice(1))
      .join(", ");

    breadCrumbItems.push({ name: breadCrumbWithFilter });
  }

  let filterText: string | undefined;

  if (activeFilters.length === 1) {
    const filters = [...categories, ...technologies];

    const filterTextBlock = filters.find(
      (f) => f.attributes.slug === activeFilters[0]
    );

    filterText = filterTextBlock?.attributes.case_studies_description;
  }

  return (
    <Layout>
      <Hero
        title="Case studies"
        text="The Yojji team designs and develops robust multifunctional software solutions effectively. These are some of the projects we have delivered during the last few years."
        className={cn("pt-24", isShownEventBanner ? "lg:pt-52" : "md:pt-48")}
        includeServices={false}
        embedImage="/images/case-study-hero.png"
      />

      <BreadCrumbs items={breadCrumbItems} className="pb-8" />

      <CasesFilter
        categories={categories}
        technologies={technologies}
        activeFilters={activeFilters}
      />

      <PortfolioFeaturedCases portfolios={portfolios} />

      {filterText && <CaseStudiesTextBlock text={filterText} />}

      <ClientTestimonials testimonials={testimonials} />

      <Contact section_navigation_name={""} />
    </Layout>
  );
};

export default Portfolio;
