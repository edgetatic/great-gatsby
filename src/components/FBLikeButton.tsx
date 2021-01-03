import { useEffect, useState } from 'react';
import View from '@mui/material/Box';
import config from 'config';

const isDev = process.env.NODE_ENV === 'development';

export default function FBLikeButton() {
   const [url, setUrl] = useState('');

   useEffect(() => {
      setUrl(getCurrentUrl());
      //@ts-expect-error global
      window.FB && window.FB.XFBML.parse();
   }, []);

   return (
      <View
         paddingY={5}
         width='100%'
         display='flex'
         alignItems='center'
         justifyContent='center'
      >
         <View
            textAlign='center'
            className='fb-like'
            data-href={url}
            data-width='300px'
            data-layout='button_count'
            data-action='like'
            data-share='true'
            data-colorscheme='dark'
         />
      </View>
   );
}

function getCurrentUrl() {
   if (window.location.href.includes('portfolio')) {
      return config.DOMAIN;
   }

   if (isDev) {
      return config.DOMAIN + window.location.pathname;
   }

   return window.location.href;
}
