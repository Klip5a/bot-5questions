import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    ignores: [
      '**/node_modules/',
      '.git/',
      '.history/',
      'dist/',
      'build/',
      'scene.js',
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  pluginJs.configs.recommended,
];
