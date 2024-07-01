::: danger
please use [https://github.com/antfu/eslint-config](https://github.com/antfu/eslint-config) replace
:::


# antfu/eslint-config

### Starter Wizard

We provided a CLI tool to help you set up your project, or migrate from the legacy config to the new flat config with one command.

```bash
npx @antfu/eslint-config@latest
```

### Manual Install

If you prefer to set up manually:

```bash
pnpm i -D eslint @antfu/eslint-config
```

And create `eslint.config.mjs` in your project root:

```js
// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu()
```
