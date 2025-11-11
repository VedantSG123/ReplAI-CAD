# Function: importSTL()

```ts
function importSTL(STLBlob): Promise<AnyShape>;
```

Defined in: [importers.ts:47](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/importers.ts#L47)

Creates a new shapes from a STL file (as a Blob or a File).

This process can be relatively long depending on how much tesselation has
been done to your STL.

This function tries to clean a bit the triangulation of faces, but can fail
in bad ways.

## Parameters

### STLBlob

`Blob`

## Returns

`Promise`\<[`AnyShape`](../type-aliases/AnyShape.md)\>
