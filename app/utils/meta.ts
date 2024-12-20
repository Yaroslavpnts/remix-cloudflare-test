import { type MetaArgs } from "@remix-run/cloudflare";

export const prepareMeta = (
  metaProps: MetaArgs,
  customTags?: Record<string, unknown>[]
) => {
  const { meta, env } = metaProps.data;
  if (!env) {
    throw new Error("No env found, return env field from loader function");
  }
  if (!meta) {
    throw new Error(
      "No meta data found, return meta field from loader function"
    );
  }

  let response: any[] = [
    {
      property: "twitter:card",
      content: "summary",
    },

    // canoncial
    {
      tagName: "link",
      rel: "canonical",
      href: env.CLIENT_URL + metaProps.location.pathname,
    },
    {
      property: "og:url",
      content: env.CLIENT_URL + metaProps.location.pathname,
    },
    {
      property: "og:type",
      content: "website",
    },
  ];

  if (meta.title) {
    response.push(
      ...[
        {
          title: meta.title,
        },
        {
          property: "og:title",
          content: meta.title,
        },
        {
          property: "twitter:title",
          content: meta.title,
        },
      ]
    );

    let image = env.CLIENT_URL + "/public/images/yojji-card-og.png";

    if (meta.image?.data) {
      image = env.STRAPI_URL + meta.image.data.attributes.url;
    }
    response.push(
      ...[
        {
          property: "og:image",
          content: image,
        },
        {
          property: "twitter:image",
          content: image,
        },
      ]
    );
  }

  if (meta.description) {
    response.push(
      ...[
        {
          name: "description",
          content: meta.description,
        },
        {
          property: "og:description",
          content: meta.description,
        },
        {
          property: "twitter:description",
          content: meta.description,
        },
      ]
    );
  }

  response.push({
    "script:ld+json": {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: "https://yojji.io",
      name: "Yojji",
      description: "Software Consulting and Development Company",
      inLanguage: "en",
      publisher: {
        "@type": "Organization",
        url: "https://yojji.io",
        name: "Yojji",
        logo: "https://yojji.io/images/yojji-card-og.png",
        sameAs: [
          "https://www.youtube.com/@yojjitalks4883",
          "https://www.linkedin.com/company/yojji",
          "https://www.instagram.com/yojji.io",
          "https://dribbble.com/yojji_io",
          "https://www.behance.net/Yojji",
          "https://www.facebook.com/yojji.io",
        ],
      },
    },
  });

  response.push({
    "script:ld+json": {
      "@type": "Organization",
      "@id": "Organization",
      name: "Yojji",
      url: "https://yojji.io",
      sameAs: [
        "https://www.youtube.com/@yojjitalks4883",
        "https://www.linkedin.com/company/yojji",
        "https://www.instagram.com/yojji.io",
        "https://dribbble.com/yojji_io",
        "https://www.behance.net/Yojji",
        "https://www.facebook.com/yojji.io",
      ],
      address:
        "30 Bruton Way, 2nd Floor, London, England, United Kingdom, W13 0BY",
      description: "Software Consulting and Development Company",
      email: "hello@yojji.io",
      logo: "https://yojji.io/images/yojji-card-og.png",
    },
  });

  if (customTags?.length) {
    customTags.forEach((customTag) => {
      response = response.map((currentTag) =>
        currentTag.property === customTag.property ||
        customTag.title === currentTag.title
          ? customTag
          : currentTag
      );
    });
  }

  return response;
};
