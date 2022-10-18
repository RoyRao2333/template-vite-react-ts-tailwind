module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks", "prettier", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    'plugin:react/jsx-runtime',
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "jsx-quotes": [2, "prefer-double"], //强制在JSX属性（jsx-quotes）中一致使用双引号
    "prettier/prettier": 1,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,
    "no-await-in-loop": 1,
    "react/display-name": 0, //防止在React组件定义中丢失displayName
    "react/forbid-prop-types": [1, { forbid: ["any"] }], //禁止某些propTypes
    "react/jsx-boolean-value": 2, //在JSX中强制布尔属性符号
    "react/jsx-closing-bracket-location": 2, //在JSX中验证右括号位置
    "react/jsx-curly-spacing": [2, { when: "never", children: true }], //在JSX属性和表达式中加强或禁止大括号内的空格。
    "react/jsx-indent": [1, 2], // 语法缩进控制
    "react/jsx-indent-props": [1, 2], //验证JSX中的props缩进是否为2个
    "react/jsx-key": 2, //在数组或迭代器中验证JSX具有key属性
    "react/jsx-max-props-per-line": [0, { maximum: 3 }], // 限制JSX中单行上的props的最大数量
    "react/jsx-no-bind": 0, //JSX中不允许使用箭头函数和bind
    "react/jsx-no-duplicate-props": 2, //防止在JSX中重复的props
    "react/jsx-no-literals": 0, //防止使用未包装的JSX字符串
    "react/jsx-pascal-case": 2, //为用户定义的JSX组件强制使用PascalCase
    "react/jsx-sort-props": 0, //强化props按字母排序
    "react/jsx-uses-react": 1, //防止react被错误地标记为未使用
    "react/jsx-uses-vars": 2, //防止在JSX中使用的变量被错误地标记为未使用
    "react/no-danger": 1, //防止使用危险的JSX属性
    "react/no-did-mount-set-state": 0, //防止在componentDidMount中使用setState
    "react/no-did-update-set-state": 1, //防止在componentDidUpdate中使用setState
    "react/no-direct-mutation-state": 2, //防止this.state的直接变异
    "react/no-multi-comp": 0, //防止每个文件有多个组件定义
    "react/no-unknown-property": 1, //防止使用未知的DOM属性
    "react/prop-types": [
      1,
      { ignore: ["dispatch", "location", "history", "form"] },
    ], //防止在React组件定义中丢失props验证
    "react/react-in-jsx-scope": 0, //使用JSX时防止丢失React
    "react/self-closing-comp": 2, //防止没有children的组件的额外结束标签
    "react/sort-comp": 1, //强制组件方法顺序
    "react/no-array-index-key": 1, //防止在数组中遍历中使用数组key做索引
    "react/no-deprecated": 1, //不使用弃用的方法
    "react/jsx-equals-spacing": 2, //在JSX属性中强制或禁止等号周围的空格
    "no-nested-ternary": "warn",
    // https://typescript-eslint.io/rules/prefer-enum-initializers
    // why: 防止enum顺序调整之后发生值的改变，避免bug
    "@typescript-eslint/prefer-enum-initializers": "warn",
    // 代码会变少，可以提升代码可读性
    "@typescript-eslint/prefer-optional-chain": "warn",
    // 命名规则
    // 还有其他选项可以陆续添加
    "@typescript-eslint/naming-convention": [
      // warn先用一段时间
      "warn",
      { selector: "enum", format: ["PascalCase"] },
      { selector: "enumMember", format: ["PascalCase"] },
      { selector: "typeLike", format: ["PascalCase"] },
    ],
    // 空interface仅作warning
    "@typescript-eslint/no-empty-interface": [
      "warn",
      {
        // 允许仅继承而不新增，如interface A extends B;
        allowSingleExtends: true,
      },
    ],
    // 项目中几乎不会用到，对于types而言，貌似用法相当于ES6的import，仅作warn
    // https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html
    // https://typescript-eslint.io/rules/triple-slash-reference/
    "@typescript-eslint/triple-slash-reference": "warn",
    // 空函数仅作warn
    // https://eslint.org/docs/latest/rules/no-empty-function
    // Note: you must disable the base rule as it can report incorrect errors
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "warn",
    // 若变量未重新赋值，需改为const，仅作warn
    // https://eslint.org/docs/latest/rules/prefer-const
    "prefer-const": "warn",
    // 单行if等block-like表达式最好包裹花括号
    // https://eslint.org/docs/latest/rules/curly
    curly: ["warn", "all"],
  },
  overrides: [
    // 针对type Props = {}声明, 仅关闭ReactComponent文件的规则
    // https://github.com/typescript-eslint/typescript-eslint/issues/2063#issuecomment-675156492
    {
      files: ["*.tsx", "*.jsx"],
      rules: {
        "@typescript-eslint/ban-types": [
          "error",
          {
            extendDefaults: true,
            types: {
              "{}": false,
            },
          },
        ],
      },
    },
  ],
  globals: {
    Edit: 'writable',
    console: 'writable',
    _: 'writable',
    $: 'writable',
  },
};
