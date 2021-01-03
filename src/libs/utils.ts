import { useEffect, useState } from 'react';

export const px = (px: number) => `${px / 16}rem`;

/**
 * @return Capitalize the first letter in each word in a given string
 */
export function capitalize(string: string) {
   if (typeof string !== 'string') {
      throw new Error('capitalize expects a string argument');
   }

   let str = string.split(' ');
   str = str.map(
      word => (word = word.charAt(0).toUpperCase() + word.substr(1))
   );
   return str.join(' ');
}

export function createTitleFromSlug(slug: string) {
   return slug
      .split(/\//)
      .map(w => capitalize(w))
      .join('/')
      .replace(/^\/|\/$/g, '')
      .replace(/^\s$/g, '/');
}

export function usePathname() {
   const [pathname, setPathname] = useState('/');

   useEffect(() => {
      if (typeof window === 'undefined') return;
      setPathname(window.location.pathname);
   }, []);

   return [pathname, setPathname];
}

export function trimEmail(email: string) {
   const parts = email.split('@');

   return `${parts[0].replace(/.{3}$/, '...')}@${parts[1]}`;
}
