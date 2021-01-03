import { graphql } from 'gatsby';

export const commonFields = graphql`
   fragment commonFields on MarkdownRemark {
      fields {
         slug
      }
   }
`;

export const blogFields = graphql`
   fragment blogFields on MarkdownRemark {
      timeToRead
      wordCount {
         words
      }
   }
`;

export const blogViewFields = graphql`
   fragment blogViewFields on MarkdownRemark {
      excerpt(pruneLength: 120, truncate: false)
   }
`;

export const blogCardFields = graphql`
   fragment blogCardFields on MarkdownRemark {
      excerpt(pruneLength: 120, truncate: false)
      ...blogFields
   }
`;

export const commonFM = graphql`
   fragment commonFM on Frontmatter {
      template
      title
      tags
   }
`;

export const readViewFM = graphql`
   fragment readViewFM on Frontmatter {
      cover_image {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 70)
         }
      }
   }
`;

export const cardFM = graphql`
   fragment cardFM on Frontmatter {
      cover_image {
         childImageSharp {
            gatsbyImageData(width: 500, quality: 100)
         }
      }
   }
`;

export const projectCommonFM = graphql`
   fragment projectCommonFM on Frontmatter {
      subtitle
      projectDate: date(formatString: "YYYY")
      isOpenSource
      platforms {
         web
         android
         ios
         desktop
      }
   }
`;

export const projectViewFM = graphql`
   fragment projectViewFM on Frontmatter {
      ...projectCommonFM
      ...commonFM
      ...readViewFM
   }
`;

export const blogViewFM = graphql`
   fragment blogViewFM on Frontmatter {
      blogViewDate: date(formatString: "MMMM Do, YYYY")
   }
`;

export const blogCardFM = graphql`
   fragment blogCardFM on Frontmatter {
      ...cardFM
      ...commonFM
      blogCardDate: date(formatString: "DD/MM/YYYY")
   }
`;

export const projectCardFM = graphql`
   fragment projectCardFM on Frontmatter {
      ...cardFM
      ...commonFM
      ...projectCommonFM
   }
`;
