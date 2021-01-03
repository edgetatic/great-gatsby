import {
   experimental_extendTheme as extendTheme,
   responsiveFontSizes,
} from '@mui/material/styles';
import type {} from '@mui/material/themeCssVarsAugmentation';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import config from 'config';
import overrides from 'theme/overrides';

const theme = extendTheme({
   colorSchemes: {
      dark: {
         palette: {
            primary: {
               main: config.theme.dark.primary,
            },
            secondary: {
               main: config.theme.dark.accent,
            },
            background: {
               default: config.theme.dark.background,
               paper: config.theme.dark.surface,
            },
         },
      },
      light: {
         palette: {
            primary: {
               main: config.theme.light.primary,
            },
            secondary: {
               main: config.theme.light.accent,
            },
            background: {
               default: config.theme.light.background,
               paper: config.theme.light.surface,
            },
         },
      },
   },

   typography: {
      fontFamily: 'roboto, sans-serif',
      body1: {
         letterSpacing: 0.3,
         fontSize: 18,
      },
      h1: {
         fontSize: '3.85rem',
      },
      h2: {
         fontSize: '2.75rem',
      },
      h3: {
         fontSize: '2rem',
      },
      h4: {
         fontSize: '1.56rem',
      },
      h5: {
         fontSize: '1.25rem',
      },
      h6: {
         fontSize: '0.8rem',
      },
   },
   breakpoints: {
      values: {
         xs: 0,
         sm: 500,
         md: 900,
         lg: 1024,
         xl: 1440,
      },
   },
   shape: {
      borderRadius: config.theme.borderRadius,
   },
   components: overrides,
});

export default responsiveFontSizes(theme);
