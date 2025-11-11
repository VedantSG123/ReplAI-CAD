# Type Alias: Point

```ts
type Point = 
  | SimplePoint
  | Vector
  | [number, number]
  | {
  delete: () => void;
  XYZ: () => gp_XYZ;
};
```

Defined in: [geom.ts:22](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L22)
