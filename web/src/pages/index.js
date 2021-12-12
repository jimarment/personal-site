import React from "react";
import { graphql } from "gatsby";
import Callout from "../components/callout";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { imageUrlFor } from "../lib/image-url";
import { buildImageObj } from "../lib/helpers";

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      author {
        image {
          crop {
            _key
            _type
            top
            bottom
            left
            right
          }
          hotspot {
            _key
            _type
            x
            y
            height
            width
          }
          asset {
            _id
          }
          alt
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  console.log(data);
  const familyPhoto = imageUrlFor(buildImageObj(data.site.author.image))
    .width(250)
    .url();

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  // const postNodes = (data || {}).posts
  //   ? mapEdgesToNodes(data.posts)
  //       .filter(filterOutDocsWithoutSlugs)
  //       .filter(filterOutDocsPublishedInTheFuture)
  //   : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} />
      <Container>
        <h1>My name is Jim, and I&apos;m a software engineer leader.</h1>
        <p>
          I&apos;ve spent the last decade of my life working for Zillow.com. In
          my time, I&apos;ve seen the company grow from 300 employees to nearly
          8,000. As the company has grown in maturity, I have also grown
          professionally. Starting as an entry-level engineer, I&apos;ve
          fostered both my engineering and leadership skills to be one of the
          most tenured members of the product development org.
        </p>
        <p>
          During that time, I&apos;ve held various roles: team lead, engineer
          manager, senior engineer. One thing I&apos;ve found vital to success
          in all of these roles is an intentional focus on the team. My greatest
          accomplishments at Zillow have been built on that foundation. The
          relationships I&apos;ve built, the trust developed, and the loyalty
          shown are the linchpins to the incredible products we&apos;ve shipped.
        </p>
        <p>Some of my favorite projects at Zillow include:</p>
        <ul>
          <li>
            Pitching, building, and implementing the company&apos;s first design
            system.
          </li>
          <li>
            Leading accessibility improvements across all Zillow Group brands.
          </li>
          <li>
            Crafting user experiences across the most trafficked pages on
            Zillow.com
          </li>
        </ul>
        <p>
          These last 10-years have been life-changing. I will forever be
          grateful for my time at Zillow, and the blessing it has been to my
          family. I look forward to my next venture, and finding another company
          to mutually invest into each other&apos;s lives.
        </p>

        <hr />

        <h2>Here&apos;s some more about me.</h2>
        <img src={familyPhoto} alt={data.site.author.image.alt} />
        <p>
          My family means the world to me. I work hard, so that I can provide
          for them. I get my work done, so that I can unplug from the office and
          engage with them. They serve as a daily motivator to do my best.
        </p>
        <p>
          My wife and I got married young, but we&apos;ve grown together. Life
          hasn&apos;t always been perfect, but she&apos;s been the best teammate
          through the good times and the bad. Having her in my corner makes
          anything and everything seem possible. Our two kids, bring so much joy
          and meaning to our lives. Parenting has been a constant learning curve
          that continues to enrich our lives as our children grow.
        </p>
        <p>
          My faith defines me. What I do, how I do it, and why I do it is a
          reflection of my faith in Jesus. I want to make Him look good, and
          that is done by loving people and serving them ahead of myself.
        </p>
        <Callout>
          <h2>Let&apos;s connect</h2>
          <div>
            <p>
              I'd love to hear more about your company and find out if we might
              be a good fit for each other. Find me online here:
            </p>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/jimarment/">
                  LinkedIn profile
                </a>
              </li>
              <li>
                <a href="mailto:jimarment@gmail.com">jimarment@gmail.com</a>
              </li>
              {/* <li>
              <a href="/cv">Resume</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li> */}
            </ul>
          </div>
        </Callout>
      </Container>
    </Layout>
  );
};

export default IndexPage;
