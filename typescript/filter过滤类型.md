```ts
const cookbook:{_cookbookDetailSrc?:string}[] = []
const img1 = cookbook
  .map(e => e._cookbookDetailSrc)
  .filter(e => e !== undefined) as string[];
// 或者
const img2 = cookbook
  .map(e => e._cookbookDetailSrc)
  .filter((e): e is string => e !== undefined);

```