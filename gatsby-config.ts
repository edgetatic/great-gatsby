import type { GatsbyConfig } from 'gatsby';
import path from 'path';
import config from './config';

const gatsbyRequiredRules = path.join(
   process.cwd(),
   'node_modules',
   'gatsby',
   'dist',
   'utils',
   'eslint-rules'
);

const fullName = `${config.first_name} ${config.last_name}`;

const gatsbyConfig: GatsbyConfig = {
   siteMetadata: {
      title: fullName,
      description: config.siteDescription,
      author: `@r0mankon`,
   },
   flags: {
      DEV_SSR: true,
      PRESERVE_FILE_DOWNLOAD_CACHE: true,
   },
   plugins: [
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `${__dirname}/images`,
         },
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `page`,
            path: `${__dirname}/src/pages`,
         },
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `content`,
            path: `${__dirname}/content`,
         },
      },
      {
         resolve: 'gatsby-plugin-root-import',
         options: {
            theme: path.join(__dirname, 'src/theme'),
            config: path.join(__dirname, 'config'),
            com: path.join(__dirname, 'src/components'),
            libs: path.join(__dirname, 'src/libs'),
            interfaces: path.join(__dirname, 'src/interfaces'),
         },
      },
      {
         resolve: `gatsby-plugin-material-ui`,
         options: {
            pathToEmotionCacheProps: `src/App/emotion-options`,
         },
      },
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: fullName,
            short_name: fullName,
            start_url: `/`,
            background_color: config.theme.dark.surface,
            theme_color: config.theme.dark.surface,
            display: `standalone`,
            icon: `images/logo.webp`, // This path is relative to the root of the site.
         },
      },

      {
         resolve: 'gatsby-plugin-eslint',
         options: {
            rulePaths: [gatsbyRequiredRules],
            stages: ['develop'],
            extensions: ['js', 'jsx', 'ts', 'tsx'],
            exclude: ['node_modules', 'bower_components', '.cache', 'public'],
            // Any additional eslint-webpack-plugin options below
            // ...
         },
      },

      {
         resolve: `gatsby-transformer-remark`,
         options: {
            plugins: [
               {
                  resolve: `gatsby-remark-images`,
                  options: {
                     maxWidth: 1080,
                  },
               },
            ],
         },
      },

      {
         resolve: `gatsby-plugin-sharp`,
         options: {
            defaults: {
               quality: 70,
            },
         },
      },

      `gatsby-plugin-image`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-offline`,
      `gatsby-plugin-no-sourcemaps`,
   ],
};

export default gatsbyConfig;
