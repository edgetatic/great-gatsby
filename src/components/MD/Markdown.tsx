'use client';

import { Fragment } from 'react';
import MD from 'markdown-to-jsx';
import overrides from './overrides';

const Markdown = (props: { children: string }) => {
   return (
      <MD
         options={{
            overrides,
            wrapper: Fragment,
         }}
      >
         {props.children}
      </MD>
   );
};

export default Markdown;
