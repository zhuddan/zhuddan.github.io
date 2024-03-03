electron 静默打印 (issues)[https://github.com/electron/electron/issues/39179]

```ts {2}
  const printOptions: WebContentsPrintOptions = {
    silent: true,
  };
```
> 本质是 electron 获取的打印机DPI不正确，导致打印出来的结果很小，切换一下electron版本即可

``` 
ni electron@24.8.3
```