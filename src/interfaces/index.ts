import type { IGatsbyImageData } from 'gatsby-plugin-image';

export interface Frontmatter {
   template: 'project' | 'blog';
   title: string;
   tags: Array<string>;
   cover_image: IGatsbyImageData;
   published?: boolean;
}

export interface ProjectFM extends Frontmatter {
   subtitle: string;
   /** date(formatString: "YYYY") */
   projectDate: string;
   isOpenSource: string;
   platforms: Platforms;
}

export interface BlogViewFM extends Frontmatter {
   /** date(formatString: "MMMM Do, YYYY") */
   blogViewDate: string;
}

export interface BlogCardFM extends Frontmatter {
   /** date(formatString: "DD/MM/YYYY") */
   blogCardDate: string;
}

export interface Platforms {
   web?: string;
   android?: string;
   ios?: string;
   desktop?: string;
}

export interface GraphqlNode<FMType> {
   fields: { slug: string };
   frontmatter: FMType;
}

export interface ProjectMD extends GraphqlNode<ProjectFM> {
   html: string;
}

export interface BlogMD extends GraphqlNode<BlogViewFM> {
   html: string;
   excerpt: string;
   wordCount: { words: number };
   timeToRead: number;
}

export interface CardProps {
   slug: string;
}

interface BlogNode<FMType> extends GraphqlNode<FMType> {
   excerpt: string;
   timeToRead: string;
}

export type BlogCardProps = BlogNode<BlogCardFM>;

type ProjectNode<FMType> = GraphqlNode<FMType>;

export type ProjectCardProps = ProjectNode<ProjectFM>;
