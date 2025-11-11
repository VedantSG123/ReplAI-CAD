# Interface: GenericSketcher\<ReturnType\>

Defined in: [sketcherlib.ts:77](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L77)

Sketchers allow the user to draw a two dimentional shape using segment of
curve. You start by defining where you sketch will start (with the method
`movePointerTo`.
Each sketching method corresponds to drawing a curve of some type (line,
arc, elliptic arc, bezier curve to a new point. The next segment will start
from the end point of the previous segment.
Once you end your sketch you will receive a `Sketch` object that allows you
to give some three dimentionlity to your finished sketch.

## Type Parameters

### ReturnType

`ReturnType`

## Arc Segment

### bulgeArc()

```ts
bulgeArc(
   xDist, 
   yDist, 
   bulge): this;
```

Defined in: [sketcherlib.ts:206](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L206)

Draws an arc of circle by defining its end point and the bulge - the
maximum distance between the arc and the straight line going from start to
end point in units of half the chord. The end point is defined by its horizontal and vertical distances
from the start point.

#### Parameters

##### xDist

`number`

##### yDist

`number`

##### bulge

`number`

#### Returns

`this`

***

### bulgeArcTo()

```ts
bulgeArcTo(end, bulge): this;
```

Defined in: [sketcherlib.ts:198](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L198)

Draws an arc of circle by defining its end point and the bulge - the
maximum distance between the arc and the straight line going from start to
end point.

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

##### bulge

`number`

#### Returns

`this`

***

### hBulgeArc()

```ts
hBulgeArc(distance, bulge): this;
```

Defined in: [sketcherlib.ts:222](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L222)

Draws an horizontal arc of circle by defining its end point and the bulge
- the maximum distance between the arc and the straight line going from
start to end point in units of half the chord. The end point is defined by
its horizontal distance from the start point.

#### Parameters

##### distance

`number`

##### bulge

`number`

#### Returns

`this`

***

### hSagittaArc()

```ts
hSagittaArc(distance, sagitta): this;
```

Defined in: [sketcherlib.ts:191](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L191)

Draws an horizontal arc of circle by defining its end point and the
sagitta - the maximum distance between the arc and the straight line going
from start to end point.The end point is defined by its horizontal
distance from the start point.

#### Parameters

##### distance

`number`

##### sagitta

`number`

#### Returns

`this`

***

### sagittaArc()

```ts
sagittaArc(
   xDist, 
   yDist, 
   sagitta): this;
```

Defined in: [sketcherlib.ts:175](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L175)

Draws an arc of circle by defining its end point and the sagitta - the
maximum distance between the arc and the straight line going from start to
end point.The end point is defined by its horizontal and vertical
distances from the start point.

#### Parameters

##### xDist

`number`

##### yDist

`number`

##### sagitta

`number`

#### Returns

`this`

***

### sagittaArcTo()

```ts
sagittaArcTo(end, sagitta): this;
```

Defined in: [sketcherlib.ts:167](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L167)

Draws an arc of circle by defining its end point and the sagitta - the
maximum distance between the arc and the straight line going from start to
end point.

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

##### sagitta

`number`

#### Returns

`this`

***

### tangentArc()

```ts
tangentArc(xDist, yDist): this;
```

Defined in: [sketcherlib.ts:238](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L238)

Draws an arc of circle from the current point as a tangent to the previous
part of curve drawn.The end point is defined by its horizontal and vertical
distances from the start point.

#### Parameters

##### xDist

`number`

##### yDist

`number`

#### Returns

`this`

***

### tangentArcTo()

```ts
tangentArcTo(end): this;
```

Defined in: [sketcherlib.ts:230](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L230)

Draws an arc of circle from the current point as a tangent to the previous
part of curve drawn.

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`this`

***

### threePointsArc()

```ts
threePointsArc(
   xDist, 
   yDist, 
   viaXDist, 
   viaYDist): this;
```

Defined in: [sketcherlib.ts:155](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L155)

Draws an arc of circle by defining its end point and a third point
through which the arc will pass. Both poinats are defined in horizontal
(x) and vertical (y) distances from the start point.

#### Parameters

##### xDist

`number`

##### yDist

`number`

##### viaXDist

`number`

##### viaYDist

`number`

#### Returns

`this`

***

### threePointsArcTo()

```ts
threePointsArcTo(end, innerPoint): this;
```

Defined in: [sketcherlib.ts:148](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L148)

Draws an arc of circle by defining its end point and a third point
through which the arc will pass.

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

##### innerPoint

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`this`

***

### vBulgeArc()

```ts
vBulgeArc(distance, bulge): this;
```

Defined in: [sketcherlib.ts:214](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L214)

Draws a vertical arc of circle by defining its end point and the bulge
- the maximum distance between the arc and the straight line going from
start to end point in units of half the chord. The end point is defined by its  vertical distance from
the start point.

#### Parameters

##### distance

`number`

##### bulge

`number`

#### Returns

`this`

***

### vSagittaArc()

```ts
vSagittaArc(distance, sagitta): this;
```

Defined in: [sketcherlib.ts:183](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L183)

Draws a vertical arc of circle by defining its end point and the sagitta
- the maximum distance between the arc and the straight line going from
start to end point.The end point is defined by its  vertical distance from
the start point.

#### Parameters

##### distance

`number`

##### sagitta

`number`

#### Returns

`this`

## Bezier Curve

### bezierCurveTo()

```ts
bezierCurveTo(end, controlPoints): this;
```

Defined in: [sketcherlib.ts:312](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L312)

Draws a generic bezier curve to the end point, going using a set of
control points.

This is the generic definition of a bézier curve, you might want to use
either the quadratic or cubic (most common) version, unless you know
exactly what you are aiming at.

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

##### controlPoints

[`Point2D`](../type-aliases/Point2D.md) | [`Point2D`](../type-aliases/Point2D.md)[]

#### Returns

`this`

***

### cubicBezierCurveTo()

```ts
cubicBezierCurveTo(
   end, 
   startControlPoint, 
   endControlPoint): this;
```

Defined in: [sketcherlib.ts:328](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L328)

Draws a cubic bezier curve to the end point, using the start  and end
control point to define its shape. This corresponds to the most commonly
used bezier curve.

If you are struggling setting your control points, the smoothSpline might
be better for your needs.

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

##### startControlPoint

[`Point2D`](../type-aliases/Point2D.md)

##### endControlPoint

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`this`

***

### quadraticBezierCurveTo()

```ts
quadraticBezierCurveTo(end, controlPoint): this;
```

Defined in: [sketcherlib.ts:318](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L318)

Draws a quadratic bezier curve to the end point, using the single control
point.

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

##### controlPoint

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`this`

***

### smoothSpline()

```ts
smoothSpline(
   xDist, 
   yDist, 
   splineConfig): this;
```

Defined in: [sketcherlib.ts:370](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L370)

Draws a cubic bezier curve to the end point, attempting to make the line
smooth with the previous segment. The end point is defined by its distance
to the first point.

It will base its first control point so that its tangent is the same than
the previous segment. You can force another tangent by defining
`startTangent`.

You can configure the tangent of the end point by configuring the
`endTangent`, either as "symmetric" to reproduce the start angle, as an
angle from the X axis (in the coordinate system) or a 2d direction (still
in the coordinate system.

The start- and end- factors decide on how far the control point is from
the start and end point. At a factor of 1, the distance corresponds to
a quarter of the straight line distance.

#### Parameters

##### xDist

`number`

##### yDist

`number`

##### splineConfig

[`SplineConfig`](../type-aliases/SplineConfig.md)

#### Returns

`this`

***

### smoothSplineTo()

```ts
smoothSplineTo(end, config?): this;
```

Defined in: [sketcherlib.ts:350](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L350)

Draws a cubic bezier curve to the end point, attempting to make the line
smooth with the previous segment.

It will base its first control point so that its tangent is the same than
the previous segment.

The control point relative to the end is by default set to be in the
direction of the straight line between start and end. You can specifiy the
`endSkew` either as an angle (in degrees) to this direction, or as an
absolute direction in the coordinate system (a Point).

The start- and end- factors decide on how far the control point is from
the start and end point. At a factor of 1, the distance corresponds to
a quarter of the straight line distance.

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

##### config?

[`SplineConfig`](../type-aliases/SplineConfig.md)

#### Returns

`this`

## Ellipse Arc Segment

### ellipse()

```ts
ellipse(
   xDist, 
   yDist, 
   horizontalRadius, 
   verticalRadius, 
   rotation, 
   longAxis, 
   sweep): this;
```

Defined in: [sketcherlib.ts:267](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L267)

Draws an arc of ellipse by defining its end point and an ellipse. The end
point is defined by distances from he start point.

The  shape of the ellipse is defined by both its radiuses, its angle
relative to the current coordinat system, as well as the long and sweep
flags (as defined for SVG paths)

#### Parameters

##### xDist

`number`

##### yDist

`number`

##### horizontalRadius

`number`

##### verticalRadius

`number`

##### rotation

`number`

##### longAxis

`boolean`

##### sweep

`boolean`

#### Returns

`this`

***

### ellipseTo()

```ts
ellipseTo(
   end, 
   horizontalRadius, 
   verticalRadius, 
   rotation, 
   longAxis, 
   sweep): this;
```

Defined in: [sketcherlib.ts:249](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L249)

Draws an arc of ellipse by defining its end point and an ellipse.

The  shape of the ellipse is defined by both its radiuses, its angle
relative to the current coordinat system, as well as the long and sweep
flags (as defined for SVG paths)

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

##### horizontalRadius

`number`

##### verticalRadius

`number`

##### rotation

`number`

##### longAxis

`boolean`

##### sweep

`boolean`

#### Returns

`this`

***

### halfEllipse()

```ts
halfEllipse(
   xDist, 
   yDist, 
   radius, 
   sweep): this;
```

Defined in: [sketcherlib.ts:296](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L296)

Draws an arc as half an ellipse, defined by the sagitta of the ellipse
(which corresponds to the radius in the axe orthogonal to the straight
line).The end point is defined by distances from he start point.

The sweep flag is to be understood as defined for SVG paths.

#### Parameters

##### xDist

`number`

##### yDist

`number`

##### radius

`number`

##### sweep

`boolean`

#### Returns

`this`

***

### halfEllipseTo()

```ts
halfEllipseTo(
   end, 
   radius, 
   sweep): this;
```

Defined in: [sketcherlib.ts:285](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L285)

Draws an arc as half an ellipse, defined by the sagitta of the ellipse
(which corresponds to the radius in the axe orthogonal to the straight
line).

The sweep flag is to be understood as defined for SVG paths.

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

##### radius

`number`

##### sweep

`boolean`

#### Returns

`this`

## Line Segment

### hLine()

```ts
hLine(distance): this;
```

Defined in: [sketcherlib.ts:107](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L107)

Draws an horizontal line of length distance from the current point

#### Parameters

##### distance

`number`

#### Returns

`this`

***

### hLineTo()

```ts
hLineTo(xPos): this;
```

Defined in: [sketcherlib.ts:119](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L119)

Draws an horizontal line to the x coordinate

#### Parameters

##### xPos

`number`

#### Returns

`this`

***

### line()

```ts
line(xDist, yDist): this;
```

Defined in: [sketcherlib.ts:95](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L95)

Draws a line at the horizontal distance xDist and the vertical distance
yDist of the current point

#### Parameters

##### xDist

`number`

##### yDist

`number`

#### Returns

`this`

***

### lineTo()

```ts
lineTo(point): this;
```

Defined in: [sketcherlib.ts:88](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L88)

Draws a line from the current point to the point given in argument

#### Parameters

##### point

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`this`

***

### polarLine()

```ts
polarLine(r, theta): this;
```

Defined in: [sketcherlib.ts:134](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L134)

Draws a line from the current point to the point defined in polar
coordiates, of radius r and angle theta (in degrees) from the current
point

#### Parameters

##### r

`number`

##### theta

`number`

#### Returns

`this`

***

### polarLineTo()

```ts
polarLineTo(__namedParameters): this;
```

Defined in: [sketcherlib.ts:126](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L126)

Draws a line from the current point to the point defined in polar
coordiates, of radius r and angle theta (in degrees) from the origin

#### Parameters

##### \_\_namedParameters

\[`number`, `number`\]

#### Returns

`this`

***

### tangentLine()

```ts
tangentLine(distance): this;
```

Defined in: [sketcherlib.ts:141](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L141)

Draws a line from the current point as a tangent to the previous part of
curve drawn. The distance defines how long the line will be.

#### Parameters

##### distance

`number`

#### Returns

`this`

***

### vLine()

```ts
vLine(distance): this;
```

Defined in: [sketcherlib.ts:101](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L101)

Draws a vertical line of length distance from the current point

#### Parameters

##### distance

`number`

#### Returns

`this`

***

### vLineTo()

```ts
vLineTo(yPos): this;
```

Defined in: [sketcherlib.ts:113](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L113)

Draws a vertical line to the y coordinate

#### Parameters

##### yPos

`number`

#### Returns

`this`

## Other

### close()

```ts
close(): ReturnType;
```

Defined in: [sketcherlib.ts:380](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L380)

Stop drawing, make sure the sketch is closed (by adding a straight line to
from the last point to the first) and returns the sketch.

#### Returns

`ReturnType`

***

### closeWithMirror()

```ts
closeWithMirror(): ReturnType;
```

Defined in: [sketcherlib.ts:385](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L385)

Stop drawing, make sure the sketch is closed (by mirroring the lines
between the first and last points drawn) and returns the sketch.

#### Returns

`ReturnType`

***

### done()

```ts
done(): ReturnType;
```

Defined in: [sketcherlib.ts:375](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L375)

Stop drawing and returns the sketch.

#### Returns

`ReturnType`

***

### movePointerTo()

```ts
movePointerTo(point): this;
```

Defined in: [sketcherlib.ts:81](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketcherlib.ts#L81)

Changes the point to start your drawing from

#### Parameters

##### point

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`this`
