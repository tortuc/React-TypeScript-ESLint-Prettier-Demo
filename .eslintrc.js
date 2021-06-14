// .eslintrc.js
module.exports = {
  ignorePatterns: [".eslintrc.js"],
  extends: ['airbnb-typescript-prettier'],
  rules: {
    'no-param-reassign': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'no-console': 0,
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
  env: {
    'jest': true,
  },
};
