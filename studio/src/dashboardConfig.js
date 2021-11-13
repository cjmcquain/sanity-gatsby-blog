export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "618f41fd77337c5861c65ae3",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-c78bj13k",
                  apiId: "8d4401ac-50a9-4fb7-8c8f-ccfd1664c786",
                },
                {
                  buildHookId: "618f41fdec13b74382318a1d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-eisknv9m",
                  apiId: "fd87ff11-8e51-4024-80c1-f5215defe06e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/cjmcquain/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-eisknv9m.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
