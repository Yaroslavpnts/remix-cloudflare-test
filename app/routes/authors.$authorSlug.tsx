import { useLoaderData, useNavigate } from "@remix-run/react";
import Layout from "~/components/Layout";
import {
  json,
  type LoaderFunctionArgs,
  type MetaArgs,
} from "@remix-run/cloudflare";
import cn from "classnames";
import StrapiImage from "~/components/StrapiImage";
import LinkedinDark from "~/icons/linkedin-dark.svg";
import FacebookDark from "~/../public/footer-icons/facebook-dark.svg";
import ArticlesSection from "~/components/ArticlesSection";
import { createApi } from "~/api";
import Contact from "~/components/sections/Contact/Contact";
import { prepareMeta } from "~/utils/meta";
import LeftArrowIcon from "~/icons/components/LeftArrowIcon";
import { useEventBanner } from "~/contexts/EventBanner.context";

export const loader = async ({
  params,
  context,
  request,
}: LoaderFunctionArgs) => {
  const api = createApi(context, request);
  const data = await api.get(`/members`, {
    params: {
      filters: {
        slug: params.authorSlug,
      },
      populate: ["image", "socials"],
    },
  });

  const articles = await api.get(`/articles`, {
    params: {
      filters: {
        author: { slug: params.authorSlug },
        redirect_code: {
          $null: true,
        },
      },
      populate: "image",
      pagination: {
        pageSize: 3,
      },
    },
  });

  const footerData = await api.get(
    "/footer?populate=columns.items,columns.sub_items"
  );

  if (!data?.data?.[0] || !articles?.data) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }

  return json({
    author: data?.data?.[0]?.attributes,
    articles: articles?.data,
    footerData: footerData?.data?.attributes || {},

    env: context.env,
    meta: {
      title: `${data?.data?.[0]?.attributes?.first_name} ${data?.data?.[0]?.attributes?.last_name} at Yojji: Expertise & Insights`,
      description: `Learn more about ${data?.data?.[0]?.attributes?.first_name} ${data?.data?.[0]?.attributes?.last_name} at Yojji. Discover his expertise, insights, and contributions to the IT and tech industry.`,
      image: data?.data?.[0]?.attributes?.image,
    },
  });
};

export const meta = (props: MetaArgs) => {
  const metaArray = prepareMeta(props);
  const author = props?.data?.author;

  const personMeta = {
    "script:ld+json": {
      "@context": "https://schema.org/",
      "@type": "Person",
      "@id": "Person",
      name: `${author?.first_name} ${author?.last_name}`,
      image: props.data.env.STRAPI_URL + author?.image?.data?.attributes?.url,
      jobTitle: `${author?.position}`,
      description: `${author?.body}`,
    },
  };

  metaArray.push(personMeta);
  return metaArray;
};

const Author = () => {
  const { author, articles } = useLoaderData<typeof loader>();
  const { isShownEventBanner } = useEventBanner();

  const navigate = useNavigate();

  return (
    <Layout fullStructure={true}>
      <div
        className={cn(
          "container pb-20 pt-24",
          isShownEventBanner ? "lg:pt-48" : ""
        )}
      >
        <button
          className="flex p-2 py-4 items-center font-bold text-sm"
          onClick={() => navigate(-1)}
        >
          <LeftArrowIcon />
          <span>Back</span>
        </button>
        <div className="grid grid-cols-12 gap-y-10 sm:gap-10">
          {author.image && (
            <div className="col-span-12 md:col-span-2">
              <StrapiImage alt="Author image" image={author.image.data} />
            </div>
          )}

          <div className="col-span-12 md:col-span-10 lg:col-span-7">
            <h1 className="yw-h2 mb-2">
              {author.first_name} {author.last_name}
            </h1>
            <div className="flex items-center mb-6">
              {author.socials && (
                <>
                  <a
                    href={author.socials?.linkedin}
                    rel="nofollow"
                    target="__blank"
                  >
                    <img
                      src={LinkedinDark}
                      className="ltr:mr-4 rtl:ml-4"
                      alt="linkedin"
                    />
                  </a>
                  <a
                    href={author.socials?.facebook}
                    rel="nofollow"
                    target="__blank"
                  >
                    <img
                      src={FacebookDark}
                      className="ltr:mr-4 rtl:ml-4"
                      alt="facebook"
                    />
                  </a>
                </>
              )}

              <div className="yw-h4 ">
                {author.position} at Yojji | Web and Mobile Development
              </div>
            </div>
            <div
              className="yw-t1"
              dangerouslySetInnerHTML={{ __html: author.html_ }}
            ></div>
          </div>
        </div>
      </div>

      {!!articles?.length && (
        <ArticlesSection
          heading={`${author.first_name}'s recent articles`}
          articles={articles}
        />
      )}

      <Contact />
    </Layout>
  );
};

export default Author;
