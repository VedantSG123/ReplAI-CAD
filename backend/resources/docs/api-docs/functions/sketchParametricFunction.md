# Function: sketchParametricFunction()

```ts
function sketchParametricFunction(
   func, 
   planeConfig, 
   __namedParameters, 
   approximationConfig): Sketch;
```

Defined in: [sketches/cannedSketches.ts:202](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/cannedSketches.ts#L202)

Creates the `Sketch` of parametric function in a specified plane

The sketch will be a spline approximating the function

## Parameters

### func

(`t`) => [`Point2D`](../type-aliases/Point2D.md)

### planeConfig

`PlaneConfig` = `{}`

### \_\_namedParameters

#### pointsCount?

`number` = `400`

#### start?

`number` = `0`

#### stop?

`number` = `1`

### approximationConfig

[`BSplineApproximationConfig`](../interfaces/BSplineApproximationConfig.md) = `{}`

## Returns

[`Sketch`](../classes/Sketch.md)
