import { type LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import cn from "classnames";
import { createApi } from "~/api";
import CategoriesMenu from "./CategoriesMenu";
import ArticleCard from "../ArticleCard";
import Pagination from "../Pagination";
import { Theme } from "~/types";
import Contact from "../sections/Contact/Contact";
import { prepareMeta } from "~/utils/meta";
import Layout from "../Layout";
import { useEventBanner } from "~/contexts/EventBanner.context";

export const meta = (props: any) => {
  const metaArray = prepareMeta(props);

  return metaArray;
};

const pageSize = 10; // TODO change to 10

export const loader = async ({
  context,
  params,
  request,
}: LoaderFunctionArgs) => {
  const { categorySlug, pageNumber } = params;
  const api = createApi(context, request);
  const queryObj: any = {
    pagination: {
      pageSize,
    },
    sort: {
      meta_created_at: "desc",
    },
    populate: ["image", "author", "author.image"],
    fields: ["title", "slug", "meta_created_at", "body"],
    filters: {
      redirect_code: {
        $null: true,
      },
    },
  };

  if (pageNumber) {
    queryObj.pagination.page = pageNumber;
  }
  if (categorySlug) {
    queryObj.filters = {
      categories: {
        slug: categorySlug,
      },
    };
  }

  const [articles, categories, popularArticles, testimonials, footerData] =
    await Promise.all([
      api.get("/articles", { params: queryObj }),
      api.get("/categories", {
        params: {
          populate: {
            articles: {
              count: true,
            },
          },
          pagination: {
            pageSize: 100,
          },
          sort: {
            blog_page_filter_priority: "asc",
          },
        },
      }),
      api.get("/popular-article", {
        params: {
          populate: {
            articles: {
              fields: ["title", "slug", "meta_created_at", "body"],
            },
          },
        },
      }),
      api.get("/testimonials?populate=image&sort=createdAt:desc"),
      api.get("/footer?populate=columns.items,columns.sub_items"),
    ]);

  // build pagination
  const serverPagination = articles?.meta.pagination;
  const pagination = {};
  const linkBase = `/blog${categorySlug ? `/category/${categorySlug}` : ""}`;
  if (serverPagination.page > 1) {
    if (serverPagination.page === 2) {
      pagination.prevLink = linkBase;
    } else {
      pagination.prevLink = linkBase + `/page/${serverPagination.page - 1}`;
    }
  }

  if (serverPagination.page < serverPagination.pageCount) {
    pagination.nextLink = linkBase + `/page/${serverPagination.page + 1}`;
  }

  const category = categories.data.find(
    (el) => el.attributes.slug === categorySlug
  );

  let metaTitle = "IT (Information Technology) Blog";
  if (categorySlug) {
    metaTitle = `${category.attributes.title} Insights | Yojji IT Blog`;
  }
  if (pageNumber) {
    metaTitle += ` | Page ${pageNumber}`;
  }

  let metaDescription =
    "In our blog, you can find news about digital businesses, tech tends, and web and mobile design and development practices.";

  if (categorySlug) {
    metaDescription = `Dive into our ${category.attributes.title} blog for the latest trends, tips, and insights. Stay updated on all things in the IT world.`;
  }

  //{Category} Insights | Yojji IT Blog
  return json({
    articles: articles?.data || [],
    categories: categories?.data || [],
    popularArticles: popularArticles?.data?.attributes.articles.data || [],
    pagination,
    categorySlug,
    category,
    footerData: footerData?.data?.attributes || {},
    testimonials: testimonials?.data,
    env: context.env,
    pageNumber,
    meta: {
      title: metaTitle,
      description: metaDescription,
      // image: page?.og_image,
    },
  });
};
const Blog = () => {
  const {
    articles,
    pagination,
    categories,
    categorySlug,
    popularArticles,
    category,
    pageNumber,
  } = useLoaderData<typeof loader>();

  const { isShownEventBanner } = useEventBanner();

  let title = "Blog";
  if (categorySlug) {
    title += ` | ${category.attributes.title}`;
  }
  if (pageNumber) {
    title += ` | Page ${pageNumber}`;
  }

  return (
    <Layout footerTheme={Theme.light}>
      <section className="bg-yw-gray-100 ">
        <div
          className={cn(
            "container pb-24 grid grid-cols-11 gap-y-10 sm:gap-10 items-start pt-24",
            isShownEventBanner ? "lg:pt-52" : ""
          )}
        >
          <h1 className="yw-h2 col-span-11">{title}</h1>

          <CategoriesMenu
            categories={categories}
            activeCategory={categorySlug}
          />
          <div className="col-span-11 lg:col-span-8 grid grid-cols-2 gap-10 items-start">
            {articles.map((article, idx) => {
              return (
                <ArticleCard
                  key={article.id}
                  article={article}
                  className="col-span-2 sm:col-span-1"
                  loading={idx < 5 ? "eager" : "lazy"}
                />
              );
            })}
          </div>

          <div className="hidden lg:block col-span-3">
            <h2 className="text-yw-primary-default yw-h4 mb-4 capitalize">
              Popular
            </h2>
            {popularArticles.map((article) => {
              return (
                <ArticleCard
                  key={article.id}
                  article={article}
                  className="col-span-2 sm:col-span-1 border-b-[1px] last:border-none border-yw-gray-300 pb-5 mb-5"
                />
              );
            })}
          </div>

          <div className="col-span-11 flex justify-between">
            <Pagination {...pagination} />
          </div>
        </div>
      </section>
      <Contact theme={Theme.dark} />
    </Layout>
  );
};

export default Blog;
