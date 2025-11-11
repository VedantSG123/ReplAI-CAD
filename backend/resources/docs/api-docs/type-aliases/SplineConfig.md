# Type Alias: SplineConfig

```ts
type SplineConfig = 
  | SplineTangent
  | {
  endFactor: number;
  endTangent: SplineTangent;
  startFactor: number;
  startTangent: StartSplineTangent;
};
```

Defined in: [sketcherlib.ts:7](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L7)
