export default {
  root: true,
  env: {
    browser: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['eslint:recommended'],
  ignorePatterns: ['node_modules/'],
  overrides: [
    {
      files: ['scripts/**/*.js', 'blocks/**/*.js'],
    },
  ],
  rules: {},
};
