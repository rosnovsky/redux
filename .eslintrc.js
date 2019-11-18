module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  "env": {
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "react",
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "ecmaVersion": 2018,
      "jsx": true,
    },
  },
  "settings": {
    "react": {
      "version": "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "single", { "allowTemplateLiterals": true }]
  }
}
