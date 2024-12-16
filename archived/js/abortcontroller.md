---
sidebar_position: 2
title: abortcontroller
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 非dom环境下使用abortcontroller

在使用 `tarojs`+`react-query` 时，发现小程序没有`AbortController`导致`react-query`不能正常运行。

## 下载 abortcontroller-polyfill

<Tabs>
  <TabItem value="npm" label="npm">
  ```
    npm i abortcontroller-polyfill
  ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
  ```
    yarn add abortcontroller-polyfill
  ```

  </TabItem>
  <TabItem value="pnpm" label="pnpm" default>
  ```
    pnpm add abortcontroller-polyfill
  ```
  </TabItem>
</Tabs>

## 在入口文件导入

:::note

`abortcontroller`必须在入口顶部导入！

:::

```tsx title="src/app.tsx"
// highlight-start
import abortcontroller from 'abortcontroller-polyfill/dist/abortcontroller'
/* eslint-disable import/first */
if (typeof window !== 'undefined' && !window.AbortController) {
  globalThis.AbortController = abortcontroller
}
// highlight-end
import { StrictMode } from 'react'
import './app.scss'
import '@/utils/printAppInfo'

function App({ children }: { children: React.ReactNode }) {
  return (
    <StrictMode>
      {children}
    </StrictMode>
  )
}

export default App
```
