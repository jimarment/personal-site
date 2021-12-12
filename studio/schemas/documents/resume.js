export default {
  name: "resume",
  type: "document",
  title: "Resume",
  fields: [
    {
      name: "applicant",
      type: "reference",
      title: "Applicant",
      to: {
        type: "applicant"
      }
    },
    {
      name: "company",
      type: "string",
      title: "Company"
    },
    {
      name: "role",
      type: "string",
      title: "Role"
    },
    {
      name: "connection",
      type: "contact",
      title: "Who I know"
    },
    {
      name: "why",
      type: "bodyPortableText",
      title: "Why I want to be here"
    },
    {
      name: "value",
      type: "bodyPortableText",
      title: "How I add value"
    },
    {
      name: "experience",
      type: "bodyPortableText",
      title: "TODO Experience"
    },
    {
      name: "skills",
      type: "bodyPortableText",
      title: "TODO Education"
    }
  ]
};
