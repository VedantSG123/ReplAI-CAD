# Function: makeProjectedEdges()

```ts
function makeProjectedEdges(
   shape, 
   camera, 
   withHiddenLines): object;
```

Defined in: [projection/makeProjectedEdges.ts:14](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/projection/makeProjectedEdges.ts#L14)

## Parameters

### shape

[`AnyShape`](../type-aliases/AnyShape.md)

### camera

[`ProjectionCamera`](../classes/ProjectionCamera.md)

### withHiddenLines

`boolean` = `true`

## Returns

`object`

### hidden

```ts
hidden: Edge[];
```

### visible

```ts
visible: Edge[];
```
