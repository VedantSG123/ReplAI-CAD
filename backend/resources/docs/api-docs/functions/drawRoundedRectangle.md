# Function: drawRoundedRectangle()

```ts
function drawRoundedRectangle(
   width, 
   height, 
   r): Drawing;
```

Defined in: [draw.ts:329](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L329)

Creates the `Drawing` of a rectangle with (optional) rounded corners.

The rectangle is centered on [0, 0]

## Parameters

### width

`number`

### height

`number`

### r

`number` | \{
`rx`: `number`;
`ry`: `number`;
\}

## Returns

[`Drawing`](../classes/Drawing.md)
