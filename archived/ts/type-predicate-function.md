# 类型守卫函数

使用 `A as B` 实现自定义类型保护函数

```ts
// 自定义类型保护函数
function isWxLoginData1(data: WxLoginData): data is WxLoginData1 {
  return (data as WxLoginData1).code !== undefined
}

function processLoginData(data: WxLoginData) {
  // 使用自定义类型保护函数
  if (isWxLoginData1(data)) {
    console.log(data.code)
  }
  else {
    console.log((data as WxLoginData2).phone)
  }
}
```
