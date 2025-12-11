// eslint.config.js
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const prettier = require("eslint-config-prettier");

module.exports = tseslint.config(
  // TypeScript
  {
    files: ["**/*.ts"],
    extends: [
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      prettier, // ALWAYS LAST ONE
    ],
    processor: angular.processInlineTemplates,
    rules: {
      // Angular selectors configuration
      "@angular-eslint/directive-selector": [
        "error",
        { "type": "attribute", "prefix": "app", "style": "camelCase" }
      ],
      "@angular-eslint/component-selector": [
        "error",
        { "type": "element", "prefix": "app", "style": "kebab-case" }
      ],
    },
  },
  // HTML
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
      prettier, // ALWAYS LAST ONE
    ],
    rules: {}
  }
);
