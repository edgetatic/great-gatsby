import React from 'react';
import { createRoot } from 'react-dom/client';
import type { GatsbyBrowser } from 'gatsby';
import RootLayout from './src/App/RootLayout';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
   element,
}) => <RootLayout>{element}</RootLayout>;

export const replaceHydrateFunction = () => {
   return (element, container) => {
      const root = createRoot(container);
      root.render(element);
   };
};
