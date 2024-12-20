import { type LoaderFunctionArgs } from "@remix-run/cloudflare";
import { createApi } from "~/api";

export const loader = async ({ context, request }: LoaderFunctionArgs) => {
  const clientUrl = (context.env as any).CLIENT_URL;
  const api = createApi(context, request);

  let hasMore = true;
  let page = 1;
  const acc = [];


  while (hasMore) {
    const res = await api.get('/articles', {
      params: {
        filters: {
          redirect_code: {
            $null: true,
          }
        },
        pagination: {
          pageSize: 100,
          page
        },
      },
    });

    if (res.error) {
      throw res.error;
    }
    page++;

    const pagination = res.meta.pagination;

    if (pagination.page >= pagination.pageCount) {
      hasMore = false;
    }

    acc.push(...res.data);
  }

  const content = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${acc.map((article) => {
      return `
      <url>
        <loc>${clientUrl}/blog/${article.attributes.slug}</loc>
        <lastmod>${article.attributes.updatedAt}</lastmod>
        <priority>1.0</priority>
        <changefreq>weekly</changefreq>
      </url>
      `;
    })}
  </urlset>
  `


  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
};
