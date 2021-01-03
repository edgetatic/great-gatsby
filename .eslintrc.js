/** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */
module.exports = {
   globals: {
      __PATH_PREFIX__: true,
   },
   extends: [
      'eslint:recommended',
      'react-app',
      'plugin:@typescript-eslint/recommended',
   ],
   plugins: ['@typescript-eslint', 'unused-imports'],
   ignorePatterns: ['.eslintrc.js', 'gatsby-config.js', 'gatsby-node.js'],
   rules: {
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/no-unused-vars': [
         'warn',
         { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/prefer-ts-expect-error': 'warn',
      '@typescript-eslint/no-restricted-imports': [
         'error',
         {
            patterns: ['@mui/material/*/*/*'],
            paths: [
               {
                  name: '@mui/material/styles/overrides',
                  allowTypeImports: true,
               },
            ],
         },
      ],
   },
};
