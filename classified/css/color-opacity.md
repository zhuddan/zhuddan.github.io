css透明度的写法16进制透明度的转化

| 百分比 | 十六进制 |
|--------|----------|
| 100%   | FF       |
| 95%    | F2       |
| 90%    | E6       |
| 85%    | D9       |
| 80%    | CC       |
| 75%    | BF       |
| 70%    | B3       |
| 65%    | A6       |
| 60%    | 99       |
| 55%    | 8C       |
| 50%    | 80       |
| 45%    | 73       |
| 40%    | 66       |
| 35%    | 59       |
| 30%    | 4D       |
| 25%    | 40       |
| 20%    | 33       |
| 15%    | 26       |
| 10%    | 1A       |
| 5%     | 0D       |
| 0%     | 00       |



```ts
import type { ElLoadingDirective } from 'element-plus'
import type { vShow } from 'vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Component: (props: { is: Component | string }) => void
  }

  export interface ComponentCustomProperties {
    vShow: typeof vShow
    vLoading: typeof ElLoadingDirective
  }
}

export {}

```