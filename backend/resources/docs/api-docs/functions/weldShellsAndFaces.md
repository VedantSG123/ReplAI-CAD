# Function: weldShellsAndFaces()

```ts
function weldShellsAndFaces(facesOrShells, ignoreType): Shell;
```

Defined in: [shapeHelpers.ts:587](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapeHelpers.ts#L587)

Welds faces and shells into a single shell.

## Parameters

### facesOrShells

([`Face`](../classes/Face.md) \| [`Shell`](../classes/Shell.md))[]

An array of faces and shells to be welded.

### ignoreType

`boolean` = `false`

If true, the function will not check if the result is
a shell.

## Returns

[`Shell`](../classes/Shell.md)

A shell that contains all the faces and shells.
