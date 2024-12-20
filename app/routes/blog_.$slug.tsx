import {
  type LoaderFunctionArgs,
  json,
  type MetaArgs,
  redirect,
} from "@remix-run/cloudflare";
import { Link, useLoaderData, useLocation } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import { createApi } from "~/api";
import StrapiImage from "~/components/StrapiImage";
import Contact from "~/components/sections/Contact/Contact";
import BurgerIcon from "~/icons/components/BurgerIcon";
import LeftArrowIcon from "~/icons/components/LeftArrowIcon";
import { Theme } from "~/types";
import { readableDate } from "~/utils/article";
import { prepareMeta } from "~/utils/meta";
import cn from "classnames";
import Layout from "~/components/Layout";
import { useContactFormPage } from "~/contexts/ContactFormPage.context";
import { stripHTML } from "~/utils/stripHTML";
import { useEventBanner } from "~/contexts/EventBanner.context";
import { strapiComponentsRegistry } from "~/strapi.components.registry";
import Subscription from "~/components/sections/Subscription/Subscription";

export const meta = (props: MetaArgs) => {
  const metaArray = prepareMeta(props);
  const article = props?.data?.article;
  const author = article?.author?.data?.attributes;

  const blogMeta = {
    "script:ld+json": {
      "@type": "BlogPosting",
      "@id": `BlogPosting`,
      headline: article?.title,
      name: article?.title,
      description: article?.meta_description,
      datePublished: article?.publishedAt,
      dateModified: article?.meta_updated_at,
      author: {
        "@type": "Person",
        "@id": `Person`,
        name: `${author?.first_name} ${author?.last_name}`,
        image: props.data.env.STRAPI_URL + author?.image?.data?.attributes?.url,
        jobTitle: author?.position,
        description: author?.body,
      },
      image: props.data.env.STRAPI_URL + article?.image?.data?.attributes?.url,
      url: props.data.env.CLIENT_URL + props.location.pathname,
    },
  };

  metaArray.push(blogMeta);
  return metaArray;
};

export const loader = async (loaderFunctionArgs: LoaderFunctionArgs) => {
  const { params, context, request } = loaderFunctionArgs;

  const api = createApi(context, request);

  const [data, testimonials, footerData] = await Promise.all([
    api.get(
      `/articles?filters[slug]=${params.slug}&populate=author,author.image,image,cards,right_side_banner,sections.items, sections.category`
    ),
    api.get("/testimonials?populate=image&sort=createdAt:desc"),
    api.get("/footer?populate=columns.items,columns.sub_items"),
  ]);

  if (!data?.data?.[0]) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }

  const article = data?.data?.[0]?.attributes;
  const sections = article.sections || [];

  const sectionsData = await Promise.all(
    sections.map(async (section: any) => {
      const Component = strapiComponentsRegistry[section.__component] as any;
      const loaderResult = await Component?.loader?.(loaderFunctionArgs);

      return { ...loaderResult, __component: section.__component };
    })
  );
  // if (data.data[0].id) {
  //   const { id, attributes } = data.data[0];

  //   await api
  //     .put(`/articles/${id}`, {
  //       body: JSON.stringify({
  //         data: { views_count: attributes.views_count + 1 },
  //       }),
  //     })
  //     .catch((error) => {
  //       console.error(
  //         `error updating article views_count: ${error.message}`,
  //         error.stack
  //       );
  //     });
  // }

  if (article.redirect_code && article.redirect_location) {
    return redirect(article.redirect_location, article.redirect_code);
  }

  return json({
    article,
    footerData: footerData?.data?.attributes || {},
    sections,
    sectionsData,
    testimonials: testimonials?.data,
    env: context.env,
    meta: {
      title: article?.meta_title,
      description: article?.meta_description,
      image: article?.image,
    },
  });
};

const extractListItems = (ulHtml: string) => {
  // Extract the <li> elements
  const liItems = ulHtml
    .split("</li>")
    .filter((item) => item.includes("<li"))
    .map((item) => item.trim() + "</li>");

  return liItems.map((item) => {
    // Extract the href attribute value
    const hrefStartIndex = item.indexOf('href="') + 6;
    const hrefEndIndex = item.indexOf('"', hrefStartIndex);
    const href = item.slice(hrefStartIndex, hrefEndIndex);

    // Extract the text content inside the <a> tag
    const anchorStartIndex = item.indexOf("<a");
    const anchorEndIndex = item.indexOf(">", anchorStartIndex) + 1;
    const textStartIndex = anchorEndIndex;
    const textEndIndex = item.indexOf("</a>", textStartIndex);
    const text = item.slice(textStartIndex, textEndIndex);

    return {
      href,
      text,
    };
  });
};

const Article = () => {
  const articleMenuRef = useRef<HTMLDivElement>(null);
  const articleMobileMenuRef = useRef<HTMLDivElement>(null);
  const articleMenuPopup = useRef<HTMLDivElement>(null);
  const [isHidden, setIsHidden] = useState(true);
  const { setIsShownContactForm } = useContactFormPage();
  const { hash } = useLocation();
  const { isShownEventBanner } = useEventBanner();

  const { article, sectionsData, sections } = useLoaderData<typeof loader>();

  const {
    title,
    html_,
    toc_,
    author,
    meta_updated_at,
    meta_created_at,
    right_side_banner,
    // views_count,
  } = article;

  const toggleHidden = () => {
    setIsHidden((isHidden) => !isHidden);
  };

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (
      articleMenuPopup.current &&
      !articleMenuPopup.current.contains(event.target as Node)
    ) {
      setIsHidden(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    let onScrollHandler: () => void;

    setTimeout(() => {
      if (!articleMenuRef.current || !articleMobileMenuRef.current) {
        return;
      }

      const articleMenuItems = articleMenuRef?.current.querySelectorAll("li");
      const articleMenuMobileItems =
        articleMobileMenuRef.current.querySelectorAll(
          ".mobile-articles-menu-tags div ul li"
        );

      const h2Articles = document.querySelectorAll(".articles h2");

      const endContent = document.querySelector(".content-end");

      if (!endContent) {
        return;
      }

      onScrollHandler = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;

        Array.from(h2Articles).forEach((el, i, arr) => {
          const isBlockEnding =
            i === arr.length - 1
              ? winScroll > (endContent as HTMLElement).offsetTop - 125
              : winScroll > (arr[i + 1] as HTMLElement).offsetTop - 125;

          const isActive =
            winScroll > (el as HTMLElement).offsetTop - 125 && !isBlockEnding;

          isActive
            ? requestAnimationFrame(() => {
                articleMenuItems[i].classList.add("selected-side-item");
              })
            : requestAnimationFrame(() => {
                articleMenuItems[i].classList.remove("selected-side-item");
              });

          isActive
            ? requestAnimationFrame(() => {
                articleMenuMobileItems[i]?.classList.add(
                  "selected-side-item-mobile"
                );
              })
            : requestAnimationFrame(() => {
                articleMenuMobileItems[i]?.classList.remove(
                  "selected-side-item-mobile"
                );
              });
        });
      };

      window.addEventListener("scroll", onScrollHandler);
    }, 100);

    return () => {
      if (!onScrollHandler) {
        return;
      }

      window.removeEventListener("scroll", onScrollHandler);
    };
  }, [articleMenuRef.current, articleMobileMenuRef.current]);

  useEffect(() => {
    const ctaButtonOnClickHandler = () => setIsShownContactForm(true);

    const buttons = document.querySelectorAll(".cta-btn");

    buttons.forEach((btn) =>
      btn.addEventListener("click", ctaButtonOnClickHandler)
    );

    return () => {
      buttons.forEach((btn) =>
        btn.removeEventListener("click", ctaButtonOnClickHandler)
      );
    };
  }, [html_]);

  const words = stripHTML(html_).split(" ");
  const timeToReadInMinutes = Math.ceil(words.length / 200);

  return (
    <Layout footerTheme={Theme.light}>
      {
        <>
          <div
            className={cn(
              "container relative mb-[104px] mt-20 md:mt-24",
              isShownEventBanner ? "lg:mt-48" : ""
            )}
          >
            <a
              href="/blog"
              className="flex p-2 py-4 items-center font-bold text-sm"
            >
              <LeftArrowIcon />
              <span className="order-2 rtl:order-1">Back to all articles</span>
            </a>

            <div className="mb-6 flex gap-2 flex-wrap">
              <div className="py-1.5 px-3 bg-yw-gray-700 yw-t2-bold text-white inline-block rounded-lg">
                Updated{" "}
                {readableDate(meta_updated_at, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
              <div className="py-1.5 px-3 bg-yw-gray-200 yw-t2-med text-yw-gray-500 inline-block rounded-lg">
                {timeToReadInMinutes} min to read
              </div>
              {/* <div className="py-1.5 px-3 bg-yw-gray-200 yw-t2-med text-yw-gray-500 inline-block rounded-lg">
                {views_count ?? 0} views
              </div> */}
              <div className="py-1.5 px-3 bg-yw-gray-200 yw-t2-med text-yw-gray-500 inline-block rounded-lg">
                Published{" "}
                {readableDate(meta_created_at, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>

            {/* <div className="grid grid-cols-12 gap-y-10 sm:gap-10 mb-4 lg:mb-20">
          <div className="col-span-12 md:col-span-8">
            <h1 className="yw-h1 mb-7">{title}</h1>
            {author?.data && (
              <a href={`/authors/${author.data.attributes.slug}`}>
                <div className="flex items-center">
                  <StrapiImage
                    image={author.data.attributes.image?.data}
                    className="rounded-full h-16 w-16 flex-shrink-0 object-cover object-top mr-2"
                    sizes="10vw"
                  />

                  <div>
                    <div className="yw-h4 text-yw-gray-900 mb-2">
                      {author.data.attributes.first_name}{" "}
                      {author.data.attributes.last_name}
                    </div>
                    <div className="yw-t2-med text-yw-gray-500">
                      {author.data.attributes.position}
                    </div>
                  </div>
                </div>
              </a>
            )}
          </div>
          <div></div>
        </div> */}

            <div className="grid grid-cols-12 gap-y-10 sm:gap-10 mb-4 lg:mb-20">
              <div className="col-span-12 md:col-span-8">
                <h1 className="yw-h1 mb-7">{title}</h1>
                {author?.data && (
                  <a href={`/authors/${author.data.attributes.slug}`}>
                    <div className="flex items-center">
                      <StrapiImage
                        image={author.data.attributes.image?.data}
                        className="rounded-full h-16 w-16 flex-shrink-0 object-cover object-top mr-2"
                        sizes="10vw"
                      />

                      <div>
                        <div className="yw-h4 text-yw-gray-900 mb-2">
                          {author.data.attributes.first_name}{" "}
                          {author.data.attributes.last_name}
                        </div>
                        <div className="yw-t2-med text-yw-gray-500">
                          {author.data.attributes.position}
                        </div>
                      </div>
                    </div>
                  </a>
                )}
              </div>
              <div></div>
            </div>

            <div className="grid grid-cols-12 gap-y-10 sm:gap-10 articles">
              <div className="col-span-12 md:col-span-7 lg:col-span-8">
                <div
                  className="prose //mb-8 rtl:[prose-rtl] content"
                  dangerouslySetInnerHTML={{ __html: html_ }}
                ></div>
                <div className="content-end"></div>
              </div>

              <div className="hidden md:block col-span-5 lg:col-span-4">
                <div className="sticky top-24">
                  <div className="yw-t3-upper text-yw-gray-900 mb-6 ">
                    Article menu
                  </div>
                  <div ref={articleMenuRef} className="article-menu text-crop">
                    <ul>
                      {extractListItems(toc_).map((item, index) => (
                        <li key={index}>
                          <Link to={item.href}>{item.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-light bg-yw-gray-200 my-12">
                    <div className="yw-h3 text-yw-gray-900 mb-4">
                      {right_side_banner?.title ||
                        "Looking to hire developers?"}
                    </div>
                    <div className="yw-t1-medium text-yw-gray-900 mb-14">
                      {right_side_banner?.subtitle ||
                        "Hire experienced developers to build your next project with Yojji"}
                    </div>
                    <button
                      onClick={() => setIsShownContactForm(true)}
                      data-button="consultation"
                      className="btn group rounded-full flex items-center justify-center whitespace-nowrap font-montserrat w-full py-4 px-6 text-sm leading-none yw-button-small btn-primary"
                    >
                      {right_side_banner?.button_text || "Contact us"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="md:hidden bg-yw-gray-800 rounded-lg fixed left-4 bottom-4 mr-4 z-10"
            ref={articleMenuPopup}
          >
            <div
              id="mobile-articles-menu"
              className={cn(" bg-yw-gray-700 rounded-lg overflow-auto", {
                hidden: isHidden,
              })}
              style={{ maxHeight: "75vh" }}
            >
              <div
                id="mobile-articles-menu-tags"
                className="mobile-articles-menu-tags  !text-white p-4"
              >
                <p className="mb-6 yw-t1 text-yw-gray-300">ARTICLE MENU</p>
                <div
                  className="px-4"
                  ref={articleMobileMenuRef}
                  dangerouslySetInnerHTML={{ __html: toc_ }}
                ></div>
              </div>
            </div>

            <button
              id="mobile-articles-menu-btn"
              onClick={toggleHidden}
              className="border-white border-[1px] p-4 bg-yw-gray-700 rounded-lg"
              aria-label="Open menu"
            >
              <BurgerIcon />
            </button>
          </div>

          <Subscription />

          {sections.map(
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
                  dataSectionName={section.__component}
                />
              );
            }
          )}
          <Contact theme={Theme.dark} className="lg:pt-28" />
        </>
      }
    </Layout>
  );
};

export default Article;
