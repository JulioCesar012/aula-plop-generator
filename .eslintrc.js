module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: "18",
    },
  },
  extends: ["plugin:react/recommended", "google", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "require-jsdoc": 0,
    "prettier/prettier": 0,
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "react/prop-types": "off",
    semi: [2, "always"],
    "react/react-in-jsx-scope": 0,
    "react/jsx-uses-react": 0,
    "@next/next/no-img-element": "off",
    "react/jsx-props-no-spreading": [
      "error",
      {
        html: "ignore",
        custom: "ignore",
        exceptions: [""],
      },
    ],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
  },
};
