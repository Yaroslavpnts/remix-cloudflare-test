import { type LoaderFunctionArgs, json, redirect } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import cn from "classnames";
import { createApi } from "~/api";
import { strapiComponentsRegistry } from "~/strapi.components.registry";
import { prepareMeta } from "~/utils/meta";
import { uniq } from "~/utils/uniq";
import Layout from "../Layout";
import { useEventBanner } from "~/contexts/EventBanner.context";

export const meta = (props: any) => {
  const metaArray = prepareMeta(props);
  const faqSectionData = props.data.pageData.sections.find(
    (el: any) => el.__component === "page.faq"
  );

  if (faqSectionData) {
    const faqMeta = {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqSectionData.items.map(
          (item: { title: any; text: any; html: any }) => ({
            "@type": "Question",
            name: item.title,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.html,
            },
          })
        ),
      },
    };

    metaArray.push(faqMeta);
  }

  return metaArray;
};

const populateByComponent = Object.keys(strapiComponentsRegistry)
  .filter((key) => strapiComponentsRegistry[key].populate)
  .map((key) =>
    strapiComponentsRegistry[key].populate.map((key) => `sections.${key}`)
  )
  .flat();

export const loader = async (loaderFunctionArgs: LoaderFunctionArgs) => {
  const { params, context, request } = loaderFunctionArgs;

  const api = createApi(context, request);
  const slug = params["*"] || "index";

  const data = await api.get("/pages", {
    params: {
      filters: {
        slug,
      },
      populate: uniq([
        "sections.items",
        "sections.sub_items",
        "sections.headings",
        "sections.content",
        "sections.team_members",
        "sections.tech_stack_proj_card",
        "sections.testimonial_short_card",
        "sections.testimonial_short_card.icon",
        "sections.project_short_case",
        "sections.project_short_case.icon",
        "sections.contacts",
        "sections.contacts.icon",
        "sections.items.icon",
        "sections.items.icons",
        "sections.items.iconDark",
        "sections.items.authorIcon",
        "sections.icon",
        "sections.services",
        "sections.collaboration_models",
        "sections.join_our_team",
        "sections.technologies",
        "sections.outstaff",
        "sections.copyright",
        "sections.images",
        "sections.iconDesktop",
        "sections.iconDesktopLight",
        "sections.iconMobile",
        "sections.iconMobileLight",
        "sections.items_columns",
        "sections.items.categories",
        "sections.items.industries",
        "sections.category",
        ...populateByComponent,
      ]),
    },
  });

  if (!data?.data?.[0]) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }

  const page = data?.data?.[0]?.attributes;

  if (page.redirect_code && page.redirect_location) {
    return redirect(page.redirect_location, page.redirect_code);
  }

  const sections = page?.sections || [];

  const [sectionsData, testimonials, footerData] = await Promise.all([
    Promise.all(
      sections.map(async (section: any) => {
        const Component = strapiComponentsRegistry[section.__component] as any;
        const loaderResult = await Component?.loader?.(loaderFunctionArgs);

        return { ...loaderResult, __component: section.__component };
      })
    ),
    api.get(`/testimonials?populate=image&sort=createdAt:desc`),
    api.get(`/footer?populate=columns.items,columns.sub_items`),
  ]);

  return json({
    pageData: page,
    sectionsData,
    footerData: footerData?.data?.attributes || {},
    testimonials: testimonials?.data,
    env: context.env,
    meta: {
      title: page?.meta_title,
      description: page?.meta_description,
      image: page?.og_image,
    },
  });
};

const Page = () => {
  const { pageData, sectionsData } = useLoaderData<typeof loader>();
  const { isShownEventBanner } = useEventBanner();

  return (
    <Layout footerTheme={pageData.footer_theme}>
      {pageData.sections.map(
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
              key={"sec_id_" + section.id + "_" + index}
              className={cn({
                "pt-28 sm:pt-28 md:pt-32": index === 0,
                "pt-28 sm:pt-28 md:pt-32 lg:pt-52":
                  index === 0 && isShownEventBanner,
                "pt-28 md:pt-[112px]":
                  index === 0 && section.__component === "page.breadcrumbs",
              })}
              dataSectionName={section.__component}
            />
          );
        }
      )}
    </Layout>
  );
};

export default Page;
