import React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { getInitColorSchemeScript } from '@mui/material/styles';
import config from './config';
import RootLayout from './src/App/RootLayout';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
   element,
}) => <RootLayout>{element}</RootLayout>;

export function onRenderBody({ setPreBodyComponents }) {
   setPreBodyComponents([
      getInitColorSchemeScript({
         colorSchemeStorageKey: 'edgetatic-color-scheme',
         defaultMode: config.theme.defaultMode,
      }),
   ]);
}
