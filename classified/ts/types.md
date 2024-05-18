1. 某个类型前面直接加`good_`前缀

```ts
type AppendGood<T> = {
  [P in keyof T as `good_${string & P}`]: T[P];
};
```

2. 把横线命名的字符串类名转化为驼峰命名 CamelCase

```ts
export type CamelCase<S extends string> =
  S extends `${infer Head}-${infer Rest}`
    ? `${Lowercase<Head>}${CamelCase<Capitalize<Rest>>}`
    : S;

type A = 'list-change'

type B = CamelCase<A> // ==> listChange

```
3. 对象合并

```ts
export type Merge<A, B> = {
  [K in keyof (A & B)]: K extends keyof B
    ? B[K]
    : K extends keyof A
      ? A[K]
      : never
}
```

4. 点点获取对象的key

```ts
type Primitive = string | boolean | number | bigint | symbol | undefined | null;

type DeepKeys<T, P extends string | number | symbol = ''> = {
  [K in keyof T]-?: T[K] extends Primitive
    ? `${P extends '' ? '' : `${P & string}.`}${K & string}`
    : `${P extends '' ? '' : `${P & string}.`}${K & string}` | DeepKeys<T[K], `${P & string}.${K & string}`>
}[keyof T];

interface Data {
  foo: {
    bar: {
      value: 'foobar';
    };
    count: 6;
    included: true;
  };
  hello: 'world';
}

type Keys = DeepKeys<Data>;
```

5. Merge类型
```ts
type Merge<A, B> = {
  [K in keyof (A & B)]: K extends keyof B
    ? B[K]
    : K extends keyof A
      ? A[K]
      : never
};
```

6. 指定某一个属性为必选参数
```ts
type MakeOptionalPropertyRequired<T, K extends keyof T> = T & Required<Pick<T, K>>;
```

7. 去除undefined
```ts
type WithoutUndefined<T> = T extends undefined ? never : T;
```

8. 去除 readonly
```ts
type RemoveReadonly<T> = {
  -readonly [K in keyof T]: T[K];
};
```

9. 类型 
三个ts中的类型

type c = string

type d = c[]

type e = number[]

我期望把type e 改为一个泛型，接受d，然后e的每一项都是d的每一项字符串的长度。

``` ts
type c = string;
type d = c[];
type e<T extends string[]> = {
  [K in keyof T]: T[K]['length'];
};

// 示例用法
const exampleArray: d = ["apple", "banana", "orange"];
const result: e<d> = [5, 6, 6]; // e<d> 的每一项都是 d 中每一项字符串的长度
```