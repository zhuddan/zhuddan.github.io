---
sidebar_position: 99
---

# eslint 规则

## [no-restricted-imports](https://eslint.org/docs/latest/rules/no-restricted-imports)

- monorepo 项目中防止从路径导入而不是从报名导入

```json
{
  "rules": {
    "no-restricted-imports": ["error", {
      "patterns": [
        {
          "group": ["packages/**"],
          "message": "Do not import from packages directory, please use \"@mono/*\" instead."
        }
      ]
    }]
  }
}
```

假设项目目录如下：

```shell
project-root/
├── app/     @mono/app
├── packages/
│   ├── ui/  @mono/ui
└── ...
```

在`@mono/app`中下面这种方式导入`Button`将会报错

```ts
import { Button } from 'packages/ui/src/button'
```

:::danger
'packages/ui/src/button' import is restricted from being used by a pattern. Do not import from packages directory, please use "@mono/\*" instead.eslintno-restricted-imports
:::

你应该这种方式导入

```ts
import { Button } from '@mono/ui'
```

- 从模块入口导入而不是从具体的文件导入

```json
{
  "rules": {
    "no-restricted-imports": ["error", {
      "patterns": [
        {
          "group": ["test/**"],
          "message": "Do not import from packages directory, please use \"test\" instead."
        }
      ]
    }]
  }
}
```

假设`test`项目目录如下：

```shell
│---test
        bar.ts
        foo.ts
        index.ts
```

`test/index.ts`内容如下：

```ts title="test/index.ts"
export * from './bar'
export * from './foo'
```

你应该使用下面这种方式导入

```ts
import { bar } from './test'
```

而不是：

```ts
import { bar } from './test/bar'
```
