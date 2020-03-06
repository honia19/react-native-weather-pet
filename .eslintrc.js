const path = require('path');

module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  "env": {
    "node": true, // this is the best starting point
    "browser": true, // for react web
    "es6": true, // enables es6 
    "react-native/react-native": true
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'comma-dangle': ['error', 'never'],
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-multiple-empty-lines': [2, { max: 1 }],
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 1,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 0,
    "react-native/no-single-element-style-arrays": 2,
    "global-require": 0 
  },
  plugins: ['react', 'react-native', 'jsx-a11y', 'import']
};
