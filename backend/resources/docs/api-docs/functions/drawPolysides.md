# Function: drawPolysides()

```ts
function drawPolysides(
   radius, 
   sidesCount, 
   sagitta): Drawing;
```

Defined in: [draw.ts:404](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L404)

Creates the `Drawing` of an polygon in a defined plane

The sides of the polygon can be arcs of circle with a defined sagitta.
The radius defines the out radius of the polygon without sagitta

## Parameters

### radius

`number`

### sidesCount

`number`

### sagitta

`number` = `0`

## Returns

[`Drawing`](../classes/Drawing.md)
