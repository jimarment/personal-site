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
          I’ve spent the last 16 years of my life working with web technologies. The bulk of that time, I worked at Zillow.com where my ownership ranged across the primary home shopping experience and the company&apos;s central design system.
        </p>
        <p>
        More recently, I&apos;ve been working at Stripe where I build user-facing checkout interfaces allowing businesses to collect payment via Stripe&apos;s payment APIs. Through my career, I&apos;ve fostered both my engineering and leadership skills to be a well-rounded and highly experienced frontend focusessed engineer.
        </p>
        <p>
          I&apos;ve held various roles in my career: tech lead, engineer manager, engineer. One thing I&apos;ve found vital to success in all of these roles is an intentional focus on the team. My greatest professional accomplishments have been built on that foundation. The relationships I&apos;ve built, the trust developed, and the loyalty shown are the linchpins to the incredible products we&apos;ve shipped.
        </p>
        <p>Some of my favorite focus areas:</p>
        <ul>
          <li>
          Working with design systems to improve dev experience and build consistent user experiences.
          </li>
          <li>
          Accessibility as a fundamental aspect of usability.
          </li>
          <li>
          Creating subtly delightful experiences for users through an emphasis on quality and craftsmanship.
          </li>
        </ul>
        <p>
        My time working in web technologies has been life-changing. I will forever be grateful for the people I’ve met, things I’ve learned and products I’ve shipped. I look forward to my next venture, and finding another company to mutually invest into each other&apos;s lives.
        </p>

        <hr />

        <h2>My work</h2>
        <p>The products I've worked on continue to change, but they include significant frontend development for:</p>
        <ul>
          <li><a href="https://stripe.com/payments/elements">Stripe's Payment Element</a></li>
          <li><a href="https://www.zillow.com/homedetails/7316-Riverview-Rd-Snohomish-WA-98290/2052934177_zpid/">Zillow's home details pages</a></li>
          <li><a href="https://www.zillow.com/">Zillow's home page</a></li>
          <li>
            <a href="https://www.zillow.com/user/acct/login/">Zillow's login/registration</a>
          </li>
        </ul>

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
