# Class: Sketcher

Defined in: [Sketcher.ts:30](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L30)

The FaceSketcher allows you to sketch on a plane.

## Implements

- [`GenericSketcher`](../interfaces/GenericSketcher.md)\<[`Sketch`](Sketch.md)\>

## Constructors

### Constructor

```ts
new Sketcher(plane): Sketcher;
```

Defined in: [Sketcher.ts:42](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L42)

The sketcher can be defined by a plane, or a simple plane definition,
with either a point of origin, or the position on the normal axis from
the coordinates origin

#### Parameters

##### plane

[`Plane`](Plane.md)

#### Returns

`Sketcher`

### Constructor

```ts
new Sketcher(plane?, origin?): Sketcher;
```

Defined in: [Sketcher.ts:43](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L43)

#### Parameters

##### plane?

[`PlaneName`](../type-aliases/PlaneName.md)

##### origin?

`number` | [`Point`](../type-aliases/Point.md)

#### Returns

`Sketcher`

## Arc Segment

### bulgeArc()

```ts
bulgeArc(
   xDist, 
   yDist, 
   bulge): this;
```

Defined in: [Sketcher.ts:217](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L217)

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

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`bulgeArc`](../interfaces/GenericSketcher.md#bulgearc)

***

### bulgeArcTo()

```ts
bulgeArcTo(end, bulge): this;
```

Defined in: [Sketcher.ts:208](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L208)

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

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`bulgeArcTo`](../interfaces/GenericSketcher.md#bulgearcto)

***

### hBulgeArc()

```ts
hBulgeArc(distance, bulge): this;
```

Defined in: [Sketcher.ts:226](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L226)

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

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`hBulgeArc`](../interfaces/GenericSketcher.md#hbulgearc)

***

### hSagittaArc()

```ts
hSagittaArc(distance, sagitta): this;
```

Defined in: [Sketcher.ts:204](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L204)

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

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`hSagittaArc`](../interfaces/GenericSketcher.md#hsagittaarc)

***

### sagittaArc()

```ts
sagittaArc(
   xDist, 
   yDist, 
   sagitta): this;
```

Defined in: [Sketcher.ts:195](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L195)

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

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`sagittaArc`](../interfaces/GenericSketcher.md#sagittaarc)

***

### sagittaArcTo()

```ts
sagittaArcTo(end, sagitta): this;
```

Defined in: [Sketcher.ts:175](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L175)

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

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`sagittaArcTo`](../interfaces/GenericSketcher.md#sagittaarcto)

***

### tangentArc()

```ts
tangentArc(xDist, yDist): this;
```

Defined in: [Sketcher.ts:170](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L170)

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

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`tangentArc`](../interfaces/GenericSketcher.md#tangentarc)

***

### tangentArcTo()

```ts
tangentArcTo(end): this;
```

Defined in: [Sketcher.ts:158](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L158)

Draws an arc of circle from the current point as a tangent to the previous
part of curve drawn.

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`tangentArcTo`](../interfaces/GenericSketcher.md#tangentarcto)

***

### threePointsArc()

```ts
threePointsArc(
   xDist, 
   yDist, 
   viaXDist, 
   viaYDist): this;
```

Defined in: [Sketcher.ts:145](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L145)

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

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`threePointsArc`](../interfaces/GenericSketcher.md#threepointsarc)

***

### threePointsArcTo()

```ts
threePointsArcTo(end, innerPoint): this;
```

Defined in: [Sketcher.ts:135](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L135)

Draws an arc of circle by defining its end point and a third point
through which the arc will pass.

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

##### innerPoint

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`threePointsArcTo`](../interfaces/GenericSketcher.md#threepointsarcto)

***

### vBulgeArc()

```ts
vBulgeArc(distance, bulge): this;
```

Defined in: [Sketcher.ts:222](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L222)

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

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`vBulgeArc`](../interfaces/GenericSketcher.md#vbulgearc)

***

### vSagittaArc()

```ts
vSagittaArc(distance, sagitta): this;
```

Defined in: [Sketcher.ts:200](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L200)

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

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`vSagittaArc`](../interfaces/GenericSketcher.md#vsagittaarc)

## Bezier Curve

### bezierCurveTo()

```ts
bezierCurveTo(end, controlPoints): this;
```

Defined in: [Sketcher.ts:343](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L343)

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

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`bezierCurveTo`](../interfaces/GenericSketcher.md#beziercurveto)

***

### cubicBezierCurveTo()

```ts
cubicBezierCurveTo(
   end, 
   startControlPoint, 
   endControlPoint): this;
```

Defined in: [Sketcher.ts:366](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L366)

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

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`cubicBezierCurveTo`](../interfaces/GenericSketcher.md#cubicbeziercurveto)

***

### quadraticBezierCurveTo()

```ts
quadraticBezierCurveTo(end, controlPoint): this;
```

Defined in: [Sketcher.ts:362](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L362)

Draws a quadratic bezier curve to the end point, using the single control
point.

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

##### controlPoint

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`quadraticBezierCurveTo`](../interfaces/GenericSketcher.md#quadraticbeziercurveto)

***

### smoothSpline()

```ts
smoothSpline(
   xDist, 
   yDist, 
   splineConfig): this;
```

Defined in: [Sketcher.ts:432](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L432)

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

[`SplineConfig`](../type-aliases/SplineConfig.md) = `{}`

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`smoothSpline`](../interfaces/GenericSketcher.md#smoothspline)

***

### smoothSplineTo()

```ts
smoothSplineTo(end, config?): this;
```

Defined in: [Sketcher.ts:374](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L374)

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

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`smoothSplineTo`](../interfaces/GenericSketcher.md#smoothsplineto)

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

Defined in: [Sketcher.ts:292](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L292)

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

`number` = `0`

##### longAxis

`boolean` = `false`

##### sweep

`boolean` = `false`

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`ellipse`](../interfaces/GenericSketcher.md#ellipse)

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

Defined in: [Sketcher.ts:230](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L230)

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

`number` = `0`

##### longAxis

`boolean` = `false`

##### sweep

`boolean` = `false`

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`ellipseTo`](../interfaces/GenericSketcher.md#ellipseto)

***

### halfEllipse()

```ts
halfEllipse(
   xDist, 
   yDist, 
   verticalRadius, 
   sweep): this;
```

Defined in: [Sketcher.ts:329](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L329)

Draws an arc as half an ellipse, defined by the sagitta of the ellipse
(which corresponds to the radius in the axe orthogonal to the straight
line).The end point is defined by distances from he start point.

The sweep flag is to be understood as defined for SVG paths.

#### Parameters

##### xDist

`number`

##### yDist

`number`

##### verticalRadius

`number`

##### sweep

`boolean` = `false`

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`halfEllipse`](../interfaces/GenericSketcher.md#halfellipse)

***

### halfEllipseTo()

```ts
halfEllipseTo(
   end, 
   verticalRadius, 
   sweep): this;
```

Defined in: [Sketcher.ts:312](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L312)

Draws an arc as half an ellipse, defined by the sagitta of the ellipse
(which corresponds to the radius in the axe orthogonal to the straight
line).

The sweep flag is to be understood as defined for SVG paths.

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

##### verticalRadius

`number`

##### sweep

`boolean` = `false`

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`halfEllipseTo`](../interfaces/GenericSketcher.md#halfellipseto)

## Line Segment

### hLine()

```ts
hLine(distance): this;
```

Defined in: [Sketcher.ts:89](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L89)

Draws an horizontal line of length distance from the current point

#### Parameters

##### distance

`number`

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`hLine`](../interfaces/GenericSketcher.md#hline)

***

### hLineTo()

```ts
hLineTo(xPos): this;
```

Defined in: [Sketcher.ts:98](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L98)

Draws an horizontal line to the x coordinate

#### Parameters

##### xPos

`number`

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`hLineTo`](../interfaces/GenericSketcher.md#hlineto)

***

### line()

```ts
line(xDist, yDist): this;
```

Defined in: [Sketcher.ts:80](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L80)

Draws a line at the horizontal distance xDist and the vertical distance
yDist of the current point

#### Parameters

##### xDist

`number`

##### yDist

`number`

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`line`](../interfaces/GenericSketcher.md#line)

***

### lineTo()

```ts
lineTo(__namedParameters): this;
```

Defined in: [Sketcher.ts:73](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L73)

Draws a line from the current point to the point given in argument

#### Parameters

##### \_\_namedParameters

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`lineTo`](../interfaces/GenericSketcher.md#lineto)

***

### polarLine()

```ts
polarLine(distance, angle): this;
```

Defined in: [Sketcher.ts:103](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L103)

Draws a line from the current point to the point defined in polar
coordiates, of radius r and angle theta (in degrees) from the current
point

#### Parameters

##### distance

`number`

##### angle

`number`

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`polarLine`](../interfaces/GenericSketcher.md#polarline)

***

### polarLineTo()

```ts
polarLineTo(__namedParameters): this;
```

Defined in: [Sketcher.ts:109](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L109)

Draws a line from the current point to the point defined in polar
coordiates, of radius r and angle theta (in degrees) from the origin

#### Parameters

##### \_\_namedParameters

\[`number`, `number`\]

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`polarLineTo`](../interfaces/GenericSketcher.md#polarlineto)

***

### tangentLine()

```ts
tangentLine(distance): this;
```

Defined in: [Sketcher.ts:115](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L115)

Draws a line from the current point as a tangent to the previous part of
curve drawn. The distance defines how long the line will be.

#### Parameters

##### distance

`number`

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`tangentLine`](../interfaces/GenericSketcher.md#tangentline)

***

### vLine()

```ts
vLine(distance): this;
```

Defined in: [Sketcher.ts:85](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L85)

Draws a vertical line of length distance from the current point

#### Parameters

##### distance

`number`

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`vLine`](../interfaces/GenericSketcher.md#vline)

***

### vLineTo()

```ts
vLineTo(yPos): this;
```

Defined in: [Sketcher.ts:93](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L93)

Draws a vertical line to the y coordinate

#### Parameters

##### yPos

`number`

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`vLineTo`](../interfaces/GenericSketcher.md#vlineto)

## Other

### close()

```ts
close(): Sketch;
```

Defined in: [Sketcher.ts:483](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L483)

Stop drawing, make sure the sketch is closed (by adding a straight line to
from the last point to the first) and returns the sketch.

#### Returns

[`Sketch`](Sketch.md)

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`close`](../interfaces/GenericSketcher.md#close)

***

### closeWithMirror()

```ts
closeWithMirror(): Sketch;
```

Defined in: [Sketcher.ts:488](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L488)

Stop drawing, make sure the sketch is closed (by mirroring the lines
between the first and last points drawn) and returns the sketch.

#### Returns

[`Sketch`](Sketch.md)

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`closeWithMirror`](../interfaces/GenericSketcher.md#closewithmirror)

***

### delete()

```ts
delete(): void;
```

Defined in: [Sketcher.ts:55](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L55)

#### Returns

`void`

***

### done()

```ts
done(): Sketch;
```

Defined in: [Sketcher.ts:475](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L475)

Stop drawing and returns the sketch.

#### Returns

[`Sketch`](Sketch.md)

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`done`](../interfaces/GenericSketcher.md#done)

***

### movePointerTo()

```ts
movePointerTo(__namedParameters): this;
```

Defined in: [Sketcher.ts:63](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher.ts#L63)

Changes the point to start your drawing from

#### Parameters

##### \_\_namedParameters

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`movePointerTo`](../interfaces/GenericSketcher.md#movepointerto)
