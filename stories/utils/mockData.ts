export const portfolioCases = [
  {
    title: "Payment system for entrepreneurs",
    industries: ["Fintech", "Start-Up"],
    text: "Payment system for entrepreneurs. Payment system for entrepreneurs. Payment system for entrepreneu. Payment system for entrepreneurs. Payment system for entrepreneu.",
  },
];

export const getStrapiImageData = (key = "image") => ({
  attributes: {
    url: imgs[key],
  },
});

export const imgs = {
  portfolio: "/uploads/smart_health_min_1_c28ec070d0.png",
  image: "/uploads/work_place_do_more_e0a911ffd2.jpg",
  iconDark: "/uploads/team_rotate_gray_16281ce7ef.svg",
  icon: "/uploads/team_rotate_color_44fbe7ca86.svg",
};

export const team = [
  {
    id: 1,
    attributes: {
      availability: "Full-time",
      first_name: "Jhon",
      experience: 4,
      last_name: "Legend",
      worked_with: [
        "Figma",
        "Slack",
        "React",
        "React Native",
        "Nest",
        "Node",
        "Next",
      ],
      expert_in: ["React", "React Native", "Nest", "Node", "Next"],
      position: "Developer",
      image: { data: getStrapiImageData() },
      department: "Development",
    },
  },
  {
    id: 2,
    attributes: {
      first_name: "Myke",
      last_name: "Towers",
      position: "Web designer",
      image: { data: getStrapiImageData() },
      department: "Design",
      availability: "Part-time",
      experience: 4,
      expert_in: ["Node", "Nest", "React", "React Native", "Nest"],
      worked_with: ["Figma", "Slack", "React", "React Native", "Nest"],
    },
  },
];

export const cards = [
  {
    icon: { data: getStrapiImageData("icon") },
    iconDark: { data: getStrapiImageData("iconDark") },
    title: "De Finibus Bonorum et Malorum",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    icon: { data: getStrapiImageData("icon") },
    iconDark: { data: getStrapiImageData("iconDark") },
    title: "De Finibus Bonorum et Malorum",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    icon: { data: getStrapiImageData("icon") },
    iconDark: { data: getStrapiImageData("iconDark") },
    title: "De Finibus Bonorum et Malorum",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    icon: { data: getStrapiImageData("icon") },
    iconDark: { data: getStrapiImageData("iconDark") },
    title: "De Finibus Bonorum et Malorum",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
];

export const testimonials = [
  {
    attributes: {
      text: "The client considers Yojji a fully integrated part of their team. Their resources show a high level of skill, professionalism, and organization. They participate in daily meetings, are able to work independently, and can offer input on project scopes when asked.",
      full_name: "Noam Nevo",
      position: "Co-founder of OSU",
      image: { data: getStrapiImageData() },
      link: "#",
      review: "clutch",
      review_stars: 4,
      portfolio: [
        {
          id: 1,
          attributes: {
            title: "Case 1",
            slug: "slug",
            description:
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
            image: null,
            country: "Country",
            timeline: "Timeline",
            industries: { data: [] },
            sections: [],
            services: [],
            testimonials: { data: [] },
          },
        },
      ],
    },
  },
  {
    attributes: {
      text: "The client considers Yojji a fully integrated part of their team. Their resources show a high level of skill, professionalism, and organization. They participate in daily meetings, are able to work independently, and can offer input on project scopes when asked.",
      full_name: "Noam Nevo",
      position: "Co-founder of OSU",
      image: { data: getStrapiImageData() },
      link: "#",
      review: "clutch",
      review_stars: 5,
      portfolio: [
        {
          id: 1,
          attributes: {
            title: "Case 1",
            slug: "slug",
            description:
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
            image: null,
            country: "Country",
            timeline: "Timeline",
            industries: { data: [] },
            sections: [],
            services: [],
            testimonials: { data: [] },
          },
        },
      ],
    },
  },
  {
    attributes: {
      text: "The client considers Yojji a fully integrated part of their team. Their resources show a high level of skill, professionalism, and organization. They participate in daily meetings, are able to work independently, and can offer input on project scopes when asked.",
      full_name: "Noam Nevo",
      position: "Co-founder of OSU",
      image: { data: getStrapiImageData() },
      link: "#",
      review: "clutch",
      review_stars: 5,
      portfolio: [
        {
          id: 1,
          attributes: {
            title: "Case 1",
            slug: "slug",
            description:
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
            image: null,
            country: "Country",
            timeline: "Timeline",
            industries: { data: [] },
            sections: [],
            services: [],
            testimonials: { data: [] },
          },
        },
      ],
    },
  },
  {
    attributes: {
      text: "The client considers Yojji a fully integrated part of their team. Their resources show a high level of skill, professionalism, and organization. They participate in daily meetings, are able to work independently, and can offer input on project scopes when asked.",
      full_name: "Noam Nevo",
      position: "Co-founder of OSU",
      image: { data: getStrapiImageData() },
      link: "#",
      review: "clutch",
      review_stars: 4,
      portfolio: [
        {
          id: 1,
          attributes: {
            title: "Case 1",
            slug: "slug",
            description:
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
            image: null,
            country: "Country",
            timeline: "Timeline",
            industries: { data: [] },
            sections: [],
            services: [],
            testimonials: { data: [] },
          },
        },
      ],
    },
  },
];

export const caseStidies = [
  {
    id: 1,
    attributes: {
      title: "Case 1",
      slug: "slug",
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      image: { data: getStrapiImageData() },
      country: "Country",
      timeline: "Timeline",
      industries: { data: [] },
      sections: [],
      services: [],
      testimonials: { data: [] },
    },
  },
  {
    id: 1,
    attributes: {
      title: "Case 1",
      slug: "slug",
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      image: { data: getStrapiImageData() },
      country: "Country",
      timeline: "Timeline",
      industries: { data: [] },
      sections: [],
      services: [],
      testimonials: { data: [] },
    },
  },
  {
    id: 1,
    attributes: {
      title: "Case 1",
      slug: "slug",
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      image: { data: getStrapiImageData() },
      country: "Country",
      timeline: "Timeline",
      industries: { data: [] },
      sections: [],
      services: [],
      testimonials: { data: [] },
    },
  },
  {
    id: 1,
    attributes: {
      title: "Case 1",
      slug: "slug",
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      image: { data: getStrapiImageData() },
      country: "Country",
      timeline: "Timeline",
      industries: { data: [] },
      sections: [],
      services: [],
      testimonials: { data: [] },
    },
  },
  {
    id: 1,
    attributes: {
      title: "Case 1",
      slug: "slug",
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      image: { data: getStrapiImageData() },
      country: "Country",
      timeline: "Timeline",
      industries: { data: [] },
      sections: [],
      services: [],
      testimonials: { data: [] },
    },
  },
  {
    id: 1,
    attributes: {
      title: "Case 1",
      slug: "slug",
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      image: null,
      country: "Country",
      timeline: "Timeline",
      industries: { data: [] },
      sections: [],
      services: [],
      testimonials: { data: [] },
    },
  },
];

export const articles = [
  {
    id: 1,
    attributes: {
      title:
        "UI/UX case study: a step-by- step guide to the process of designing",
      slug: "test-dedicated-team",
      body: "Body",
      html_: "<html><head></head><body><p>Body</p>\n</body></html>",
      toc_: '<ul style="list-style-type: disc"></ul>',
      meta_created_at: "2023-12-07T09:05:29.987Z",
      meta_updated_at: "2023-12-07T09:05:40.946Z",
      createdAt: "2023-12-07T09:05:29.937Z",
      updatedAt: "2023-12-07T09:05:40.946Z",
      publishedAt: "2023-12-07T09:05:40.934Z",
      image: {
        data: getStrapiImageData(),
      },
      author: {
        data: {
          id: 3,
          attributes: {
            first_name: "John",
            last_name: "Johnson",
            position: "Developer ",
            meta_created_at: "2023-11-28T08:46:37.306Z",
            meta_updated_at: "2023-11-28T08:55:06.658Z",
            createdAt: "2023-11-28T08:54:34.559Z",
            updatedAt: "2023-11-28T08:55:06.658Z",
            publishedAt: "2023-11-28T08:55:06.647Z",
            image: {
              data: getStrapiImageData(),
            },
          },
        },
      },
    },
  },
  {
    id: 1,
    attributes: {
      title:
        "UI/UX case study: a step-by- step guide to the process of designing",
      slug: "test-dedicated-team",
      body: "Body",
      html_: "<html><head></head><body><p>Body</p>\n</body></html>",
      toc_: '<ul style="list-style-type: disc"></ul>',
      meta_created_at: "2023-12-07T09:05:29.987Z",
      meta_updated_at: "2023-12-07T09:05:40.946Z",
      createdAt: "2023-12-07T09:05:29.937Z",
      updatedAt: "2023-12-07T09:05:40.946Z",
      publishedAt: "2023-12-07T09:05:40.934Z",
      image: {
        data: getStrapiImageData(),
      },
      author: {
        data: {
          id: 3,
          attributes: {
            first_name: "John",
            last_name: "Johnson",
            position: "Developer ",
            meta_created_at: "2023-11-28T08:46:37.306Z",
            meta_updated_at: "2023-11-28T08:55:06.658Z",
            createdAt: "2023-11-28T08:54:34.559Z",
            updatedAt: "2023-11-28T08:55:06.658Z",
            publishedAt: "2023-11-28T08:55:06.647Z",
            image: {
              data: getStrapiImageData(),
            },
          },
        },
      },
    },
  },
  {
    id: 1,
    attributes: {
      title:
        "UI/UX case study: a step-by- step guide to the process of designing",
      slug: "test-dedicated-team",
      body: "Body",
      html_: "<html><head></head><body><p>Body</p>\n</body></html>",
      toc_: '<ul style="list-style-type: disc"></ul>',
      meta_created_at: "2023-12-07T09:05:29.987Z",
      meta_updated_at: "2023-12-07T09:05:40.946Z",
      createdAt: "2023-12-07T09:05:29.937Z",
      updatedAt: "2023-12-07T09:05:40.946Z",
      publishedAt: "2023-12-07T09:05:40.934Z",
      image: {
        data: getStrapiImageData(),
      },
      author: {
        data: {
          id: 3,
          attributes: {
            first_name: "John",
            last_name: "Johnson",
            position: "Developer ",
            meta_created_at: "2023-11-28T08:46:37.306Z",
            meta_updated_at: "2023-11-28T08:55:06.658Z",
            createdAt: "2023-11-28T08:54:34.559Z",
            updatedAt: "2023-11-28T08:55:06.658Z",
            publishedAt: "2023-11-28T08:55:06.647Z",
            image: {
              data: getStrapiImageData(),
            },
          },
        },
      },
    },
  },
];
