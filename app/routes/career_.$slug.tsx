import {
  type LoaderFunctionArgs,
  json,
  type MetaArgs,
} from "@remix-run/cloudflare";
import { createApi } from "~/api";
import { useLoaderData } from "@remix-run/react";
import Hero from "~/components/sections/Hero/Hero";
import { prepareMeta } from "~/utils/meta";

import Layout from "~/components/Layout";

export const meta = (props: MetaArgs) => {
  return prepareMeta(props);
};

export const loader = async ({ params, context, request }: LoaderFunctionArgs) => {
  const api = createApi(context, request);
  const query = {
    fields: ["html_", "title", "slug", "body"],
    filters: {
      slug: params.slug,
    },
  };
  const data = await api.get(`/careers`, { params: query });

  if (!data?.data?.[0]) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }

  const otherPositions = await api.get(`/careers`, {
    params: {
      fields: ["html_", "title", "slug"],
    },
  });

  const filteredOtherPositions = otherPositions?.data?.filter(
    (position: any) => position.attributes.slug !== params.slug
  );

  const career = data?.data?.[0]?.attributes;

  const footerData = await api.get(
    `/footer?populate=columns.items,columns.sub_items`
  );
  const testimonials = await api.get(`/testimonials?populate=image&sort=createdAt:desc`);

  return json({
    career,
    footerData: footerData?.data?.attributes || {},
    testimonials: testimonials?.data,
    otherPositions: filteredOtherPositions,
    env: context.env,
    meta: {
      title: career?.title,
      description:
        "Seeking talented individuals for various roles in our software company. Explore opportunities, grow your career, and innovate with us. Apply now!",
    },
  });
};

const SingleCareer = () => {
  const { career, otherPositions } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <Hero title={career.title} className="!pt-48" />
      <div className="container my-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8">
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: career.html_ }}
            ></div>
          </div>

          {!!otherPositions.length && (
            <div className="col-span-12 md:col-span-4">
              <div className="text-lg font-bold">Other positions:</div>
              <ul>
                {otherPositions.map((position: any) => {
                  return (
                    <a
                      key={position.id}
                      href={`/career/${position.attributes.slug}`}
                      className="block py-6 border-b last:border-b-0 border-yw-gray-500 hover:bg-yw-gray-200 text-yw-gray-500 text-lg"
                    >
                      {position.attributes.title}
                    </a>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SingleCareer;
