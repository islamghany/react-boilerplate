module.exports = {
  //parser: 'babel-eslint',
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: '18.1.0',
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
};
