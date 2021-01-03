import type { PaletteMode } from '@mui/material';

const config = {
   first_name: 'John',
   last_name: 'Doe',
   symbol: 'J',

   // please change it manually in src/components/Avatar.tsx
   // avatar: 'avatar.jpeg',

   profession: '<Prompt Engineer />',
   basedIn: 'Outer Space, AI',
   siteDescription: 'My portfolio and blog that no one visits',
   email: 'randomperson@mail.com',
   DOMAIN: 'https://r0mankon.me' || process.env.GATSBY_VERCEL_URL,
   FB_APP_ID: '449830832707233',

   theme: {
      dark: {
         primary: '#1d2526',
         background: '#121212',
         surface: '#1212129f',
         accent: '#ab47bc',
      },
      light: {
         primary: '#90caf9',
         background: '#ffffff',
         surface: '#ffffff9f',
         accent: '#015a87',
      },
      borderRadius: 16, // in pixel
      elevation: 4,
      defaultMode: 'dark' as PaletteMode,
   },
};

export default config;
