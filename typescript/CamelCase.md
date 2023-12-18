把横线命名的字符串类名转化为驼峰命名


```ts
export type CamelCase<S extends string> =
  S extends `${infer Head}-${infer Rest}`
    ? `${Lowercase<Head>}${CamelCase<Capitalize<Rest>>}`
    : S;

type A = 'list-change'

type B = CamelCase<A> // ==> listChange

```