/**
 * @type { import("eslint").Linter.Config }
 */
module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["@acme/eslint-config/recommended"],
  root: true,
};
