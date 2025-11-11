# Function: sketchPolysides()

```ts
function sketchPolysides(
   radius, 
   sidesCount, 
   sagitta, 
   planeConfig): Sketch;
```

Defined in: [sketches/cannedSketches.ts:130](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/cannedSketches.ts#L130)

Creates the `Sketch` of an polygon in a defined plane

The sides of the polygon can be arcs of circle with a defined sagitta.
The radius defines the out radius of the polygon without sagitta

## Parameters

### radius

`number`

### sidesCount

`number`

### sagitta

`number` = `0`

### planeConfig

`PlaneConfig` = `{}`

## Returns

[`Sketch`](../classes/Sketch.md)
