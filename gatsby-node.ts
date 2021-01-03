import type { GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({
   actions,
}) => {
   actions.setBabelPlugin({
      name: '@babel/plugin-transform-react-jsx',
      options: {
         runtime: 'automatic',
      },
   });
};

export const onCreateNode: GatsbyNode['onCreateNode'] = props => {
   const { node, actions, getNode } = props;

   if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode, basePath: `pages` });

      actions.createNodeField({
         name: `slug`,
         node,
         value,
      });
   }
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
   ({ actions }) => {
      const { createTypes } = actions;

      const typeDefs = `
        type MarkdownRemark implements Node {
          frontmatter: Frontmatter
        }

        type Frontmatter {
          title: String
          template: String
          title: String
          tags: [String]
          published: Boolean
          platforms: Platforms
        }

        type Platforms {
          web: String
          android: String
          ios: String
          desktop: String
        }
      `;

      createTypes(typeDefs);
   };
