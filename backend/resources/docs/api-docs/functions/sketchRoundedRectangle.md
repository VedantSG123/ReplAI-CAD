# Function: sketchRoundedRectangle()

```ts
function sketchRoundedRectangle(
   width, 
   height, 
   r, 
   planeConfig): Sketch;
```

Defined in: [sketches/cannedSketches.ts:112](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/cannedSketches.ts#L112)

Creates the `Sketch` of a rounded rectangle in a defined plane

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

### planeConfig

`PlaneConfig` = `{}`

## Returns

[`Sketch`](../classes/Sketch.md)
