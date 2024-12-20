import { type LoaderFunctionArgs } from "@remix-run/cloudflare";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const content = `User-agent: *
Allow: /

Sitemap: ${context.env.CLIENT_URL}/sitemap.xml
  `;

  return new Response(content, {
    status: 200,
  });
};
