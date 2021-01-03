// Converted from the VSCode theme using ./tools/themeFromVsCode
import type { PrismTheme } from 'prism-react-renderer';

const cyberDark: PrismTheme = {
   plain: {
      color: '#6688cc',
      backgroundColor: '#021416',
   },
   styles: [
      {
         types: ['comment'],
         style: {
            color: 'rgb(56, 72, 135)',
         },
      },
      {
         types: ['string'],
         style: {
            color: 'rgb(34, 170, 68)',
         },
      },
      {
         types: ['number', 'builtin', 'char', 'constant'],
         style: {
            color: 'rgb(242, 128, 208)',
         },
      },
      {
         types: ['class-name'],
         style: {
            color: 'rgb(255, 238, 187)',
         },
      },
      {
         types: ['function', 'attr-name'],
         style: {
            color: '#22aa11',
         },
      },
      {
         types: ['variable'],
         style: {
            color: 'rgb(34, 119, 255)',
            fontStyle: 'italic',
         },
      },
      {
         types: ['tag'],
         style: {
            color: 'rgb(34, 85, 136)',
         },
      },
      {
         types: ['deleted'],
         style: {
            color: 'rgb(220, 50, 47)',
         },
      },
      {
         types: ['changed'],
         style: {
            color: 'rgb(203, 75, 22)',
         },
      },
      {
         types: ['inserted'],
         style: {
            color: 'rgb(33, 145, 134)',
         },
      },
      {
         types: ['keyword'],
         style: {
            color: 'rgb(34, 84, 135)',
         },
      },
   ],
};

export default cyberDark;
