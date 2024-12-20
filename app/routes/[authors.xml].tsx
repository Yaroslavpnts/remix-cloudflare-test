import { type LoaderFunctionArgs } from "@remix-run/cloudflare";
import { createApi } from "~/api";
import { getAllItems } from "~/utils/sitemap";

export const loader = async ({ context, request }: LoaderFunctionArgs) => {
  const clientUrl = (context.env as any).CLIENT_URL;
  const api = createApi(context, request);
  const members = await getAllItems(api, "members", {
    populate: { articles: { count: true } },
  });
  const authors = members.filter(
    (member) => member.attributes.articles.data.attributes.count > 0
  );

  const content = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${clientUrl}/authors</loc>
      <priority>1.0</priority>
      <changefreq>weekly</changefreq>
    </url>
    ${authors.map((item) => {
      return `
      <url>
        <loc>${clientUrl}/authors/${item.attributes.slug}</loc>
        <lastmod>${item.attributes.updatedAt}</lastmod>
        <priority>1.0</priority>
        <changefreq>weekly</changefreq>
      </url>
      `;
    })}
  </urlset>
  `;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
};
