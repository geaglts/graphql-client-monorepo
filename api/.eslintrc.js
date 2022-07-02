module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    module: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    semi: [2, 'always'],
    quotes: [2, 'single'],
  },
};
