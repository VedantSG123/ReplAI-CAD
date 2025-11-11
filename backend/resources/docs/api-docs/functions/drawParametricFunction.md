# Function: drawParametricFunction()

```ts
function drawParametricFunction(
   func, 
   __namedParameters, 
   approximationConfig): Drawing;
```

Defined in: [draw.ts:458](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L458)

Creates the `Drawing` of parametric function

The drawing will be a spline approximating the function. Note that the
degree should be at maximum 3 if you need to export the drawing as an SVG.

## Parameters

### func

(`t`) => [`Point2D`](../type-aliases/Point2D.md)

### \_\_namedParameters

#### closeShape?

`boolean` = `false`

#### pointsCount?

`number` = `400`

#### start?

`number` = `0`

#### stop?

`number` = `1`

### approximationConfig

[`BSplineApproximationConfig`](../interfaces/BSplineApproximationConfig.md) = `{}`

## Returns

[`Drawing`](../classes/Drawing.md)
