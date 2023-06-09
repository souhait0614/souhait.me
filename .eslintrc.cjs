module.exports = {
  extends: ["next/core-web-vitals", "prettier", "plugin:react-hooks/recommended"],
  plugins: ["@typescript-eslint", "unused-imports", "import", "react-hooks"],
  rules: {
    "eol-last": ["error", "always"],
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "import/order": [
      "warn",
      {
        groups: ["index", "sibling", "parent", "internal", "external", "builtin", "object", "type"],
        "newlines-between": "always",
      },
    ],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react-hooks/exhaustive-deps": [
      "error",
      {
        additionalHooks: "(useAsync|useAsyncFn|useAsyncRetry)",
      },
    ],
  },
}
