import { Script } from 'gatsby';
import type { PaletteMode as Mode } from '@mui/material';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import config from 'config';
import theme from 'theme';
import './app.css';
import emotionOptions from './emotion-options';

const RootLayout = (props: React.PropsWithChildren) => {
   return (
      <>
         <Script id='fb'>
            {`
             window.fbAsyncInit = function() {
               FB.init({
                 appId      : '${config.FB_APP_ID}',
                 cookie     : true,
                 xfbml      : true,
                 version    : 'v9.0'
               });
                 
               FB.AppEvents.logPageView();   
             };

             (function(d, s, id){
               var js, fjs = d.getElementsByTagName(s)[0];
               if (d.getElementById(id)) {return;}
               js = d.createElement(s); js.id = id;
               js.src = "https://connect.facebook.net/en_US/sdk.js";
               fjs.parentNode.insertBefore(js, fjs);
             }(document, 'script', 'facebook-jssdk'));
           `}
         </Script>

         <CacheProvider value={cache}>
            <CssVarsProvider
               defaultMode={config.theme.defaultMode as Mode}
               colorSchemeStorageKey='edgetatic-color-scheme'
               theme={theme}
            >
               <CssBaseline />

               {props.children}
            </CssVarsProvider>
         </CacheProvider>
      </>
   );
};

const cache = createCache(emotionOptions);

export default RootLayout;
