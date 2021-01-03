import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import type { ProjectMD, BlogMD } from 'interfaces';
import SEO from 'com/SEO';
import getKeywords from 'libs/getKeywords';
import { createTitleFromSlug } from 'libs/utils';
import BlogView from '../templates/BlogView';
import ProjectView from '../templates/ProjectView';

interface Data {
   markdownRemark: ProjectMD & BlogMD;
}

export function Head({ data }: { data: Data }) {
   const md = data.markdownRemark;
   const headTitle = createTitleFromSlug(md.fields.slug);

   let description = md.excerpt;
   if (md.frontmatter.template === 'project') {
      description = md.frontmatter.subtitle;
   }

   let content = md.html;
   if (md.frontmatter.template === 'project') {
      content = md.frontmatter.tags + ' ' + md.html;
   }

   return (
      <SEO
         title={headTitle}
         description={description}
         keywords={getKeywords(content, 50)}
         slug={md.fields.slug}
         type='article'
      />
   );
}

export default function DetailPage({ data }: PageProps<Data>) {
   const markdownRemark = data.markdownRemark;
   const { template } = markdownRemark.frontmatter;

   const templates = {
      project: <ProjectView markdownRemark={markdownRemark} />,
      blog: <BlogView markdownRemark={markdownRemark} />,
   };

   return templates[template] ? templates[template] : null;
}

export const query = graphql`
   query ($id: String!) {
      markdownRemark(id: { eq: $id }) {
         ...commonFields
         ...blogFields
         ...blogViewFields
         html
         frontmatter {
            ...projectViewFM
            ...blogViewFM
         }
      }
   }
`;
