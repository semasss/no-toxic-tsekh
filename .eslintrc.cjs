module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn',
    'import/extensions': ['error', 'always', { ignorePackages: true }],
    'eol-last': 'error',
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      extends: ['plugin:astro/recommended'],
    },
  ],
}; 