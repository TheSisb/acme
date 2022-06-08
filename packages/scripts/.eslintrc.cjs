/**
 * @type { import("eslint").Linter.Config }
 */
module.exports = {
  env: {
    // https://kangax.github.io/compat-table/es2016plus/#node16_11
    es2022: true,
    node: true,
  },
  extends: ["@acme/eslint-config/recommended"],
  root: true,
};
