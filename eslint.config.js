export default [
  {
    // Flat config: ignore patterns
    ignores: [
      "node_modules",
      "scripts/*",
      "config/*",
      "pnpm-lock.yaml",
      "pnpm-workspace.yaml",
      ".DS_Store",
      "package.json",
      "tsconfig.json",
      "**/*.md",
      "build",
      ".eslintrc.cjs",
      "eslint.config.js",
      "**/.*" // Ignore all dotfiles (like .gitignore)
    ],
  },
  {
    // Language options (ES Modules, JSX)
    languageOptions: {
      ecmaVersion: 2021,  // ES2021 syntax support
      sourceType: 'module',
      globals: {
        window: 'readonly', // For browser-based globals
        document: 'readonly',
        Edit: 'writable',
        console: 'writable',
        _: 'writable',
        $: 'writable',
      },
      ecmaFeatures: {
        jsx: true, // Enable JSX parsing
      },
    },
    
    // Plugins to be used
    plugins: {
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      prettier: require('eslint-plugin-prettier'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      'react-refresh': require('eslint-plugin-react-refresh'),
      import: require('eslint-plugin-import'),
    },
    
    // ESLint rule configurations (extends equivalent in Flat Config)
    rules: {
      ...require('eslint-plugin-react').configs.recommended.rules,
      ...require('eslint-plugin-react-hooks').configs.recommended.rules,
      ...require('@typescript-eslint/eslint-plugin').configs.recommended.rules,
      ...require('eslint-plugin-prettier').configs.recommended.rules,
      'prettier/prettier': 'error', // Prettier formatting as an ESLint rule
    },
    
    settings: {
      react: {
        version: 'detect',  // Automatically detect the React version
      },
    },
  },
];