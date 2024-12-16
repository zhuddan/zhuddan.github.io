import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: false,
  rules: {
    'prefer-spread': 'off',
    'no-console': 'off',
  },
})
