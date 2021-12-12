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
                  buildHookId: "61a704932c173498859abbee",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-9eo5bkbh",
                  apiId: "7a5df77c-c585-463f-85a0-056b2bc139e9",
                },
                {
                  buildHookId: "61a7049333f234c3c94e55c4",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-1che24p3",
                  apiId: "5d06d131-4f71-42b3-b48c-41f0d7eb1914",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/jimarment/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-1che24p3.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
  ],
};
