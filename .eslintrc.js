module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    "import/resolver": { node: { extensions: [".js", ".jsx", ".ts", ".tsx"] } },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "airbnb",
    "airbnb/hooks",
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-shadow": 0,
    "linebreak-style": ["error", "unix"],
    "no-return-await": 0,
    "class-methods-use-this": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
};
