module.exports = {
  ...require('eslint-config-custom/index'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
};
