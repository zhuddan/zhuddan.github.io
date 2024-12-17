import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: true,
  rules: {
    'prefer-spread': 'off',
    'no-console': 'off',
  },
})
