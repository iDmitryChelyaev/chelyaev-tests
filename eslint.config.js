module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  root: true,
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  plugins: ["@typescript-eslint", "import"], // Добавлено: явное указание используемых плагинов
  rules: {
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "import/default": "off",
    "import/no-unused-modules": ["error", { // Исправлено: добавлены параметры для правила
      unusedExports: true,
      missingExports: true,
    }],
    "camelcase": "off",
    "@typescript-eslint/naming-convention": [
      "error", // Исправлено: было "er,, (очевидно опечатка)
      {
        selector: "default",
        format: ["camelCase"],
      },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE"],
      },
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "classProperty",
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        selector: "typeProperty",
        format: null,
      },
      {
        selector: [
          "classProperty",
          "objectLiteralProperty",
          "typeProperty",
          "classMethod",
          "objectLiteralMethod",
          "typeMethod",
          "accessor",
        ],
        format: null,
        modifiers: ["requiresQuotes"],
      },
      {
        selector: "enumMember",
        format: ["PascalCase", "UPPER_CASE"],
      },
      {
        selector: "objectLiteralProperty",
        format: null,
      },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true },
    ],
    "arrow-parens": ["error", "as-needed"],
    // Добавлены рекомендуемые правила:
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "import/order": ["error", { // Добавлено: правило для порядка импортов
      "groups": [
        "builtin",
        "external",
        "internal",
        "parent",
        "sibling",
        "index"
      ],
      "newlines-between": "always"
    }]
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json", // Исправлено: убраны лишние <>
      },
      node: { // Добавлено: резолвер для node
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }
    },
  },
  env: { // Добавлено: определение окружения
    node: true,
    es6: true
  }
};