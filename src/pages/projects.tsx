import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import Box from '@mui/material/Box';
import type { ProjectCardProps } from 'interfaces';
import ProjectCard from 'com/CardProject';
import Layout from 'com/Layout';
import PageContainer from 'com/PageContainer';
import SEO from 'com/SEO';

interface Data {
   allMarkdownRemark: {
      edges: [{ node: ProjectCardProps }];
   };
}

export function Head() {
   return <SEO title='Projects' slug='/projects' />;
}

export default function Projects({ data }: PageProps<Data>) {
   const edges = data.allMarkdownRemark.edges;

   return (
      <>
         <Layout appBarTitle='Projects'>
            <PageContainer>
               {edges.map(({ node }) => {
                  const fields = node.fields;

                  return (
                     <Box key={fields.slug} pb={2}>
                        <ProjectCard
                           fields={fields}
                           frontmatter={node.frontmatter}
                        />
                     </Box>
                  );
               })}
            </PageContainer>
         </Layout>
      </>
   );
}

export const query = graphql`
   {
      allMarkdownRemark(
         limit: 15
         filter: { frontmatter: { template: { eq: "project" } } }
         sort: { frontmatter: { date: DESC } }
      ) {
         edges {
            node {
               ...commonFields
               frontmatter {
                  ...projectCardFM
               }
            }
         }
      }
   }
`;
