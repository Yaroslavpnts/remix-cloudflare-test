import { type LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { createApi } from "~/api";
import { useLoaderData } from "@remix-run/react";
import Hero from "~/components/sections/Hero/Hero";
import { prepareMeta } from "~/utils/meta";
import Layout from "~/components/Layout";

export const meta = (props: any) => {
  const metaArray = prepareMeta(props);

  return metaArray;
};

export const loader = async ({ context, request }: LoaderFunctionArgs) => {
  const api = createApi(context, request);
  const query = {
    fields: ["html_", "title", "slug"],
  };
  const data = await api.get(`/careers`, { params: query });

  if (!data?.data?.[0]) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }
  const footerData = await api.get(
    `/footer?populate=columns.items,columns.sub_items`
  );
  const testimonials = await api.get(`/testimonials?populate=image&sort=createdAt:desc`);

  return json({
    careers: data?.data,
    footerData: footerData?.data?.attributes || {},
    testimonials: testimonials?.data,

    env: context.env,
    meta: {
      title: "IT Careers - Yojji",
      description:
        "Join the Yojji team of experienced software developers and become a part of a friendly and creative environment. We are looking for talented, forward-thinking innovators who never stop learning and want their careers to excel.",
    },
  });
};

const Career = () => {
  const { careers } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <Hero
        title="Careers"
        text="We are looking for talented, forward-thinking innovators who never stop learning and want their careers to excel. At Yojji, we provide opportunities for self-development and creativity. Take a look at what positions are open at the moment and join the team of experienced software developers today."
        className="!pt-48"
      />

      <div className="container">
        <h2 className="font-bold mb-4 text-2xl mt-8">Open Positions</h2>
        {careers?.length ? (
          <div className="mb-8">
            {careers.map((career: any) => (
              <a
                key={career.id}
                href={`/career/${career.attributes.slug}`}
                className="block py-6 border-b last:border-b-0 border-yw-gray-500 hover:bg-yw-gray-200 text-yw-gray-500 text-lg"
              >
                {career.attributes.title}
              </a>
            ))}
          </div>
        ) : (
          <div className="">No open positions at the moment</div>
        )}
      </div>
    </Layout>
  );
};

export default Career;
