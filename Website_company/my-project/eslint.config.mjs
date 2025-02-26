import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Enforce consistent accessibility attributes
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-role": "error",
      
      // Ensure proper image optimization
      "@next/next/no-img-element": "error",
      
      // Enforce performance best practices
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-sync-scripts": "error",
      
      // Maintain clean code style
      "react/jsx-sort-props": "error",
      "react/jsx-max-props-per-line": ["error", { "maximum": 1 }],
      "react/self-closing-comp": "error",
      
      // Ensure proper i18n usage
      "@next/next/no-html-link-for-pages": "error",
    }
  }
];

export default eslintConfig;
