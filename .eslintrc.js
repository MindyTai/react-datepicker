module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'eslint:recommended'
  ],
  plugins: ['react', 'import'],
  rules: {
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'warn',
    'consistent-return': 'warn',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'no-continue': 'off',
    'no-bitwise': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    "no-use-before-define": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "react/jsx-curly-spacing": ["warn", {
      "when": "always",
      "children": {
        "when": "always"
      }
    }],
    "no-nested-ternary": "off"
  },
  settings: {
    "react": {
      "version": "detect"
    }
  }
};