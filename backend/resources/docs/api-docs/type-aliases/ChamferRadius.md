# Type Alias: ChamferRadius

```ts
type ChamferRadius = 
  | number
  | {
  distances: [number, number];
  selectedFace: (f) => FaceFinder;
}
  | {
  angle: number;
  distance: number;
  selectedFace: (f) => FaceFinder;
};
```

Defined in: [shapes.ts:91](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L91)

We can defined a chamfer with only a number - in that case it will be
symmetric

We can also define a chamfer with two distances, in that case the chamfer
will be asymmetric, and the first distance will be used for selected face.

We can also define a chamfer with a distance and an angle, in that case
the chamfer will be asymmetric, and the distance will be used
for selected face.

Note that the selected face is a function that takes a FaceFinder, and if
this fails, you might expect an error.
