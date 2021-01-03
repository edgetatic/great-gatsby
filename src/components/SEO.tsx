import { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getScreenshotURL } from 'libs/getSSURL';
import config from 'config';

interface Props extends React.PropsWithChildren {
   title: string;
   description?: string;
   keywords?: string;
   slug?: string;
   type?: string;
}

const SEO: React.FC<Props> = props => {
   const { title, description, keywords, slug, type } = props;

   const { site } = useStaticQuery(graphql`
      {
         site {
            siteMetadata {
               author
               title
               description
            }
         }
      }
   `);

   const pageURL = `${config.DOMAIN}${slug || ''}`;
   const snapshotURL = useMemo(
      () =>
         getScreenshotURL(pageURL, {
            width: 1327,
            height: 755,
            scaleFactor: 1.0,
            waitTime: 700,
         }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
   );

   const metaDescription = description || site.siteMetadata.description;
   const metaTitle = title || site.siteMetadata.title;
   const ogTitle = `${title} | ${site.siteMetadata.title}`;

   return (
      <>
         {title ? (
            <title>{`${metaTitle} ~ ${site.siteMetadata.title}`}</title>
         ) : (
            <title>{site.siteMetadata.title}</title>
         )}
         <meta name='description' content={metaDescription} />
         <meta name='keywords' content={keywords || ''} />
         <meta property='og:description' content={metaDescription} />
         <meta property='og:title' content={ogTitle} />
         <meta property='og:image' content={snapshotURL} />
         <meta property='og:image:alt' content={title} />
         <meta property='og:type' content={type || 'website'} />
         <meta property='og:url' content={pageURL} />

         <link rel='canonical' href={config.DOMAIN} />
         <meta property='fb:app_id' content={config.FB_APP_ID} />
         <meta name='twitter:card' content='summary_large_image' />
         <meta name='twitter:site' content={site.siteMetadata.author} />
         <meta name='twitter:creator' content={site.siteMetadata.author} />
         <meta name='author' content={site.siteMetadata.author} />
         <meta
            name='google-site-verification'
            content='0k9G4rgMHfwNDEKIwMtfN4dwtrWy9cuU9XAgA_3A0vw'
         />

         {props.children}
      </>
   );
};

export default SEO;
