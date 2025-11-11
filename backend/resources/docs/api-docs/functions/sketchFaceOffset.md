# Function: sketchFaceOffset()

```ts
function sketchFaceOffset(face, offset): Sketch;
```

Defined in: [sketches/cannedSketches.ts:183](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/cannedSketches.ts#L183)

Creates the `Sketch` of an offset of a certain face. A negative offset will
be within the face, a positive one outside.

## Parameters

### face

[`Face`](../classes/Face.md)

### offset

`number`

## Returns

[`Sketch`](../classes/Sketch.md)
