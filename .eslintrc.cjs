module.exports = {
  /** 表示这是项目的根ESLint配置文件，ESLint在查找配置时会在找到这个文件后停止向上查找 */
  root: true,
  env: {
    /** 允许使用Node.js全局变量和语法，例如module.exports等 */
    node: true,
    /** 允许在代码中使用浏览器全局变量，例如window等 */
    browser: true,
    /** 允许使用ES2021的语法和全局变量 */
    es2021: true,
  },
  settings: {
    react: {
      /** 自动检测React的版本，确保正确应用React的规则 */
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    /** 允许使用ECMAScript模块 */
    sourceType: 'module',
    ecmaFeatures: {
      /** 允许解析JSX语法 */
      jsx: true,
    },
  },
  plugins: [
    'react',
    'react-hooks',
    'prettier',
    '@typescript-eslint',
    'react-refresh',
    'import',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    /** 关闭所有不必要或可能与Prettier冲突的规则 */
    'eslint-config-prettier',
  ],
  rules: {},
  ignorePatterns: ['dist', 'node_modules', '.eslintrc.cjs', 'eslint.config.js'],
  globals: {
    Edit: 'writable',
    console: 'writable',
    _: 'writable',
    $: 'writable',
  },
};
