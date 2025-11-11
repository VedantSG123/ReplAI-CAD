# Function: drawProjection()

```ts
function drawProjection(shape, projectionCamera): object;
```

Defined in: [draw.ts:491](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L491)

Creates the `Drawing` of a projection of a shape on a plane.

The projection is done by projecting the edges of the shape on the plane.

## Parameters

### shape

[`AnyShape`](../type-aliases/AnyShape.md)

### projectionCamera

[`ProjectionPlane`](../type-aliases/ProjectionPlane.md) | [`ProjectionCamera`](../classes/ProjectionCamera.md)

## Returns

`object`

### hidden

```ts
hidden: Drawing;
```

### visible

```ts
visible: Drawing;
```
