module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    'ban-ts-comment': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-this-alias': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'vue/no-unused-components': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['off'],
    'vue/valid-template-root': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
}
