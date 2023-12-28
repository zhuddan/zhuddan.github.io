```ts

type AppendGood<T> = {
  [P in keyof T as `good_${string & P}`]: T[P];
};


```