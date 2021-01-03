import type { Options } from '@emotion/cache';

const options: Options = {
   key: 'edgetatic',
   prepend: true,
   stylisPlugins: process.env.NODE_ENV === 'development' ? [] : undefined,
};

export default options;
