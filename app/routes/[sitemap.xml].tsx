import { type LoaderFunctionArgs } from "@remix-run/cloudflare";

export const loader = ({ context, request }: LoaderFunctionArgs) => {
  const clientUrl = (context.env as any).CLIENT_URL;

  const content = `
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <sitemap>
        <loc>${clientUrl}/main.xml</loc>
        <lastmod>2023-08-31</lastmod>
      </sitemap>
      <sitemap>
        <loc>${clientUrl}/cases.xml</loc>
        <lastmod>2023-08-31</lastmod>
      </sitemap>
      <sitemap>
        <loc>${clientUrl}/blog.xml</loc>
        <lastmod>2023-08-31</lastmod>
      </sitemap>

      <sitemap>
        <loc>${clientUrl}/authors.xml</loc>
        <lastmod>2023-11-20</lastmod>
      </sitemap>
    </sitemapindex>`;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
};

// <sitemap>
// <loc>${clientUrl}/carrer.xml</loc>
// <lastmod>2023-11-20</lastmod>
// </sitemap>

