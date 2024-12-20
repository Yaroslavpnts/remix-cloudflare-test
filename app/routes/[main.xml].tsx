import { type LoaderFunctionArgs } from "@remix-run/cloudflare";
import { createApi } from "~/api";
import { getAllItems, normalizeUrl } from "~/utils/sitemap";

export const loader = async ({ context, request }: LoaderFunctionArgs) => {
  const clientUrl = (context.env as any).CLIENT_URL;
  const api = createApi(context, request);
  let pages = await getAllItems(api, "pages");
  pages = pages
    .filter((page) => !page.attributes.redirect_code)
    .filter((page) => page.attributes.slug !== "404");

  const content = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map((item) => {
      return `
      <url>
        <loc>${clientUrl}/${normalizeUrl(item.attributes.slug)}</loc>
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
