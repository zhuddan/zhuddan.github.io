---
tags: [vue, vue3,element-plus,typescript]
---

# vue 定义指令类型

```ts
import type { ElLoadingDirective } from 'element-plus'
// import type { vShow } from 'vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Component: (props: { is: Component | string }) => void
  }

  export interface ComponentCustomProperties {
    // vShow: typeof vShow
    vLoading: typeof ElLoadingDirective
  }
}

export {}
```
