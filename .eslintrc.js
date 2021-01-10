
module.exports = {
  root: true,
  plugins: [
    /* only if using React. If so, run 'yarn add eslint-plugin-react' */
    'react',
  ],
  parserOptions: {
    // will be used most of the time as I typically work in module-based frameworks
    sourceType: 'module',
    ecmaFeatures: {
      //  only if using JSX
      jsx: true
    },
  },
  extends: [
    'eslint:recommended',
    // only if using React
    'plugin:react/recommended',
  ],
  rules: {
    'no-console': 'warn',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
}

