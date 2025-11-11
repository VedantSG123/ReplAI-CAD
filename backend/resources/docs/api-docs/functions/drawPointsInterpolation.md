# Function: drawPointsInterpolation()

```ts
function drawPointsInterpolation(
   points, 
   approximationConfig, 
   options): Drawing;
```

Defined in: [draw.ts:435](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L435)

Creates the `Drawing` by interpolating points as a curve

The drawing will be a spline approximating the points. Note that the
degree should be at maximum 3 if you need to export the drawing as an SVG.

## Parameters

### points

[`Point2D`](../type-aliases/Point2D.md)[]

### approximationConfig

[`BSplineApproximationConfig`](../interfaces/BSplineApproximationConfig.md) = `{}`

### options

#### closeShape?

`boolean`

## Returns

[`Drawing`](../classes/Drawing.md)
