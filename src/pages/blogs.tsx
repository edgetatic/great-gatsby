import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import Grid from '@mui/material/Grid';
import type { BlogCardProps } from 'interfaces';
import BlogCard from 'com/CardBlog';
import Layout from 'com/Layout';
import PageContainer from 'com/PageContainer';
import SEO from 'com/SEO';

interface Data {
   allMarkdownRemark: {
      edges: [{ node: BlogCardProps }];
   };
}

export function Head() {
   return <SEO title='Blogs' slug='/blogs' />;
}

export default function Blogs({ data }: PageProps<Data>) {
   const edges = data.allMarkdownRemark.edges;

   return (
      <Layout appBarTitle='Blogs'>
         <PageContainer>
            <Grid container spacing={2}>
               {edges.map(({ node }) => {
                  const fields = node.fields;

                  return (
                     <Grid item key={fields.slug} xs={12} md={6}>
                        <BlogCard
                           fields={fields}
                           timeToRead={node.timeToRead}
                           excerpt={node.excerpt}
                           frontmatter={node.frontmatter}
                        />
                     </Grid>
                  );
               })}
            </Grid>
         </PageContainer>
      </Layout>
   );
}

export const query = graphql`
   {
      allMarkdownRemark(
         limit: 10
         filter: {
            frontmatter: { template: { eq: "blog" }, published: { eq: true } }
         }
         sort: { frontmatter: { date: DESC } }
      ) {
         edges {
            node {
               ...blogCardFields
               ...commonFields
               frontmatter {
                  ...blogCardFM
               }
            }
         }
      }
   }
`;
