// import { graphql } from "gatsby";
// import React from "react";
// import GraphQLErrorList from "../components/graphql-error-list";
// import Layout from "../containers/layout";
// import Container from "../components/container";
// import SEO from "../components/seo";
// import { toPlainText } from "../lib/helpers";

// export const query = graphql`
//   query ResumeTemplateQuery($id: String!) {
//     post: sanityPost(id: { eq: $id }) {
//       id
//       publishedAt
//       categories {
//         _id
//         title
//       }
//       mainImage {
//         ...SanityImage
//         alt
//       }
//       title
//       slug {
//         current
//       }
//       _rawExcerpt(resolveReferences: { maxDepth: 5 })
//       _rawBody(resolveReferences: { maxDepth: 5 })
//       authors {
//         _key
//         author {
//           image {
//             crop {
//               _key
//               _type
//               top
//               bottom
//               left
//               right
//             }
//             hotspot {
//               _key
//               _type
//               x
//               y
//               height
//               width
//             }
//             asset {
//               _id
//             }
//           }
//           name
//         }
//       }
//     }
//   }
// `;

// const BlogPostTemplate = (props) => {
//   const { data, errors } = props;
//   const post = data && data.post;
//   return (
//     <Layout>
//       {errors && <SEO title="GraphQL Error" />}
//       {post && (
//         <SEO
//           title={(post.title || "Untitled") + " Resume"}
//           description={toPlainText(post._rawExcerpt)}
//           image={post.mainImage}
//         />
//       )}

//       {errors && (
//         <Container>
//           <GraphQLErrorList errors={errors} />
//         </Container>
//       )}

//       {post && (
//         <div>
//           <h1>Hello Resume</h1>
//         </div>
//       )}
//     </Layout>
//   );
// };

// export default BlogPostTemplate;
