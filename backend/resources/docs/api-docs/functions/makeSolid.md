# Function: makeSolid()

```ts
function makeSolid(facesOrShells): Solid;
```

Defined in: [shapeHelpers.ts:606](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapeHelpers.ts#L606)

Welds faces and shells into a single shell and then makes a solid.

## Parameters

### facesOrShells

([`Face`](../classes/Face.md) \| [`Shell`](../classes/Shell.md))[]

An array of faces and shells to be welded.

## Returns

[`Solid`](../classes/Solid.md)

A solid that contains all the faces and shells.
