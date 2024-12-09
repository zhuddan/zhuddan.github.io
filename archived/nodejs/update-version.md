---
sidebar_position: 4
---

# 项目版本升级

:::tip

推荐使用[bumpp](https://github.com/antfu-collective/bumpp)

:::

```shell
# 1.0.0 -> 1.0.1
npm version patch

# 1.0.1 -> 1.1.0
npm version minor

# 1.1.0 -> 2.0.0
npm version major
```

```shell
npm version patch --force

npm version patch --force --no-git-tag-version

npm version patch --no-git-tag-version
```
