import { type LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import cn from "classnames";
import { createApi } from "~/api";
import StrapiImage from "~/components/StrapiImage";
import { strapiComponentsRegistry } from "~/strapi.components.registry";
import { prepareMeta } from "~/utils/meta";
import Layout from "~/components/Layout";
import BreadCrumbs from "~/components/BreadCrumbs/BreadCrumbs";
import { useEventBanner } from "~/contexts/EventBanner.context";

export const meta = (props: any) => {
  return prepareMeta(props);
};

export const loader = async (loaderFunctionArgs: LoaderFunctionArgs) => {
  const api = createApi(loaderFunctionArgs.context, loaderFunctionArgs.request);
  const query = {
    filters: {
      slug: loaderFunctionArgs.params.slug,
    },
    populate: [
      "items",
      "image",
      "icon",
      "sections",
      "sections.features.image",
      "sections.solutions.images",
      "sections.technologies.icon",
      "sections.items",
      "sections.images",
      "sections.items.technologies",
      "sections.items.technologies.icon",
      "sections.members",
      "sections.members.image",
      "sections.items.icon",
      "sections.items.image",
      "sections.links",
      "sections.links.icon",
      "sections.portfolios",
      "sections.portfolios.image",
      "similar_cases.image",
      "services",
      "areas_of_work",
      "testimonials.image",
      "members.image",
      "sections.image",
      "technologies",
      "industries",
    ],
  };
  const data = await api.get(`/portfolios`, { params: query });

  const sections = data?.data?.[0]?.attributes?.sections || [];
  const sectionsData: any[] = await Promise.all(
    sections.map(async (section: any) => {
      const Component = strapiComponentsRegistry[section.__component] as any;
      const loaderResult = await Component?.loader?.(loaderFunctionArgs);

      return { ...loaderResult, __component: section.__component };
    })
  );

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
  const portfolio = data?.data?.[0];

  return json({
    sectionsData,
    footerData: footerData?.data?.attributes || {},
    testimonials: testimonials?.data,
    portfolio: data?.data?.[0],
    env: loaderFunctionArgs.context.env,
    meta: {
      title: portfolio?.attributes?.meta_title,
      description: portfolio?.attributes?.meta_description,
      image: portfolio?.attributes?.image,
    },
  });
};

const SinglePortfolio = () => {
  const { portfolio, sectionsData } = useLoaderData<typeof loader>();
  const { isShownEventBanner } = useEventBanner();

  const {
    title,
    industries,
    name,
    description,
    members,
    timeline,
    services,
    technologies,
  } = portfolio?.attributes || {};

  const parsedIndustries = industries.data
    .map(({ attributes }) => attributes.title)
    .join(", ");
  const parsedTitle = title[0].toUpperCase() + title.slice(1);

  const isHeroSectionIncluded = sectionsData.filter(
    (section) => section.__component === "page.hero"
  ).length;

  return (
    <Layout>
      <section
        className={cn(
          "bg-white pt-16",
          isShownEventBanner ? "lg:pt-40" : "md:pt-20"
        )}
      >
        <BreadCrumbs
          items={[
            { link: "/case-studies", name: "Case studies" },
            { name: parsedTitle },
          ]}
        />

        {!isHeroSectionIncluded && (
          <>
            <div className="container grid grid-cols-12 sm:gap-2 md:gap-10 mb-28 pt-10">
              <div className="col-span-12 lg:col-span-6 mb-4 md:mb-0 flex gap-6 flex-col">
                <div className="flex gap-4 flex-wrap">
                  <div className="px-2.5 py-0.5 bg-[#D9D9D9] text-black text-xl font-bold leading-snug">
                    {name}
                  </div>
                  <div className="tag tag-light">{parsedIndustries}</div>
                </div>
                <h1 className="yw-h1 sm:!text-[32px]">{title}</h1>
                {description && (
                  <div className="text-yw-primary-default text-base font-semibold leading-snug">
                    {description}
                  </div>
                )}
              </div>
              <div className="col-span-12 lg:col-span-6 flex gap-7 lg:mt-16">
                <div className="flex gap-8 flex-col">
                  {!!members?.data?.length && (
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="yw-t1-upper-mobile col-span-3">Team</div>
                      <div className="flex flex-wrap gap-2 col-span-9">
                        {members?.data?.map((member, id) => (
                          <div
                            key={"member-avatar-" + id}
                            className="rounded-full w-8 h-8 overflow-hidden"
                          >
                            <StrapiImage
                              image={
                                member.attributes.avatar?.data ||
                                member.attributes.image?.data
                              }
                              loading="lazy"
                              className="w-8 h-auto"
                            />
                          </div>
                        ))}

                        {members?.data?.length > 5 && (
                          <div className="tag tag-light !text-yw-gray-400">
                            +{members?.data?.length - 5}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="yw-t1-upper-mobile col-span-3">
                      Timeline
                    </div>
                    <div className="flex gap-2 col-span-9 text-base font-semibold">
                      {timeline}
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="yw-t1-upper-mobile col-span-3">
                      Services
                    </div>
                    <div className="flex gap-3 col-span-9 flex-wrap">
                      {(services || []).map((service) => (
                        <a
                          key={service.id}
                          className="tag tag-light whitespace-nowrap"
                          href={service.link}
                        >
                          {service?.anchor}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="yw-t1-upper-mobile">Technologies</div>
                    <div className="flex gap-3 flex-wrap">
                      {(technologies?.data || []).map(({ attributes }) => (
                        <span
                          key={attributes.id}
                          className="tag tag-light whitespace-nowrap"
                        >
                          {attributes?.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="relative">
                <div className="absolute bottom-6 sm:bottom-16 left-0 right-0 h-[85%] w-full rounded-3xl bg-yw-gray-200 shadow-[(0px_0px_1px_0px_#DEDEDE_inset)]"></div>
                <StrapiImage
                  image={portfolio.attributes.image.data}
                  loading="eager"
                  className="relative lg:pl-20 lg:pr-28 pl-6 pr-6 fade-in"
                />
              </div>
            </div>
          </>
        )}
      </section>

      {portfolio.attributes.sections.map(
        (section: { __component: string; id: string }, index: number) => {
          const Component = strapiComponentsRegistry[
            section.__component
          ] as any;
          const sectionLoaderData = sectionsData[index];

          if (!Component) {
            return null;
          }

          return (
            <Component
              {...section}
              {...sectionLoaderData}
              key={`${section.__component}-${section.id}`}
              className={cn(section.__component === "page.hero" ? "pt-5" : "")}
              casePage={true}
            />
          );
        }
      )}
    </Layout>
  );
};

export default SinglePortfolio;
