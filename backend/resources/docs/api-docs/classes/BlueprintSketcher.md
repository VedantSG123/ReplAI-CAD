# Class: BlueprintSketcher

Defined in: [Sketcher2d.ts:632](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L632)

Sketchers allow the user to draw a two dimentional shape using segment of
curve. You start by defining where you sketch will start (with the method
`movePointerTo`.
Each sketching method corresponds to drawing a curve of some type (line,
arc, elliptic arc, bezier curve to a new point. The next segment will start
from the end point of the previous segment.
Once you end your sketch you will receive a `Sketch` object that allows you
to give some three dimentionlity to your finished sketch.

## Extends

- [`BaseSketcher2d`](BaseSketcher2d.md)

## Implements

- [`GenericSketcher`](../interfaces/GenericSketcher.md)\<[`Blueprint`](Blueprint.md)\>

## Constructors

### Constructor

```ts
new BlueprintSketcher(origin): BlueprintSketcher;
```

Defined in: [Sketcher2d.ts:636](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L636)

#### Parameters

##### origin

[`Point2D`](../type-aliases/Point2D.md) = `...`

#### Returns

`BlueprintSketcher`

#### Overrides

[`BaseSketcher2d`](BaseSketcher2d.md).[`constructor`](BaseSketcher2d.md#constructor)

## Arc Segment

### bulgeArc()

```ts
bulgeArc(
   xDist, 
   yDist, 
   bulge): this;
```

Defined in: [Sketcher2d.ts:226](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L226)

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

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`bulgeArc`](BaseSketcher2d.md#bulgearc)

***

### bulgeArcTo()

```ts
bulgeArcTo(end, bulge): this;
```

Defined in: [Sketcher2d.ts:218](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L218)

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

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`bulgeArcTo`](BaseSketcher2d.md#bulgearcto)

***

### hBulgeArc()

```ts
hBulgeArc(distance, bulge): this;
```

Defined in: [Sketcher2d.ts:237](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L237)

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

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`hBulgeArc`](BaseSketcher2d.md#hbulgearc)

***

### hSagittaArc()

```ts
hSagittaArc(distance, sagitta): this;
```

Defined in: [Sketcher2d.ts:214](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L214)

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

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`hSagittaArc`](BaseSketcher2d.md#hsagittaarc)

***

### sagittaArc()

```ts
sagittaArc(
   xDist, 
   yDist, 
   sagitta): this;
```

Defined in: [Sketcher2d.ts:203](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L203)

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

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`sagittaArc`](BaseSketcher2d.md#sagittaarc)

***

### sagittaArcTo()

```ts
sagittaArcTo(end, sagitta): this;
```

Defined in: [Sketcher2d.ts:176](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L176)

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

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`sagittaArcTo`](BaseSketcher2d.md#sagittaarcto)

***

### tangentArc()

```ts
tangentArc(xDist, yDist): this;
```

Defined in: [Sketcher2d.ts:261](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L261)

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

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`tangentArc`](BaseSketcher2d.md#tangentarc)

***

### tangentArcTo()

```ts
tangentArcTo(end): this;
```

Defined in: [Sketcher2d.ts:241](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L241)

Draws an arc of circle from the current point as a tangent to the previous
part of curve drawn.

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`tangentArcTo`](../interfaces/GenericSketcher.md#tangentarcto)

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`tangentArcTo`](BaseSketcher2d.md#tangentarcto)

***

### threePointsArc()

```ts
threePointsArc(
   xDist, 
   yDist, 
   viaXDist, 
   viaYDist): this;
```

Defined in: [Sketcher2d.ts:163](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L163)

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

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`threePointsArc`](BaseSketcher2d.md#threepointsarc)

***

### threePointsArcTo()

```ts
threePointsArcTo(end, midPoint): this;
```

Defined in: [Sketcher2d.ts:151](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L151)

Draws an arc of circle by defining its end point and a third point
through which the arc will pass.

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

##### midPoint

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`threePointsArcTo`](../interfaces/GenericSketcher.md#threepointsarcto)

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`threePointsArcTo`](BaseSketcher2d.md#threepointsarcto)

***

### vBulgeArc()

```ts
vBulgeArc(distance, bulge): this;
```

Defined in: [Sketcher2d.ts:233](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L233)

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

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`vBulgeArc`](BaseSketcher2d.md#vbulgearc)

***

### vSagittaArc()

```ts
vSagittaArc(distance, sagitta): this;
```

Defined in: [Sketcher2d.ts:210](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L210)

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

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`vSagittaArc`](BaseSketcher2d.md#vsagittaarc)

## Bezier Curve

### bezierCurveTo()

```ts
bezierCurveTo(end, controlPoints): this;
```

Defined in: [Sketcher2d.ts:378](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L378)

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

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`bezierCurveTo`](BaseSketcher2d.md#beziercurveto)

***

### cubicBezierCurveTo()

```ts
cubicBezierCurveTo(
   end, 
   startControlPoint, 
   endControlPoint): this;
```

Defined in: [Sketcher2d.ts:402](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L402)

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

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`cubicBezierCurveTo`](BaseSketcher2d.md#cubicbeziercurveto)

***

### quadraticBezierCurveTo()

```ts
quadraticBezierCurveTo(end, controlPoint): this;
```

Defined in: [Sketcher2d.ts:398](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L398)

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

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`quadraticBezierCurveTo`](BaseSketcher2d.md#quadraticbeziercurveto)

***

### smoothSpline()

```ts
smoothSpline(
   xDist, 
   yDist, 
   splineConfig?): this;
```

Defined in: [Sketcher2d.ts:451](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L451)

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

##### splineConfig?

[`SplineConfig`](../type-aliases/SplineConfig.md)

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`smoothSpline`](../interfaces/GenericSketcher.md#smoothspline)

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`smoothSpline`](BaseSketcher2d.md#smoothspline)

***

### smoothSplineTo()

```ts
smoothSplineTo(end, config?): this;
```

Defined in: [Sketcher2d.ts:410](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L410)

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

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`smoothSplineTo`](BaseSketcher2d.md#smoothsplineto)

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

Defined in: [Sketcher2d.ts:334](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L334)

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

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`ellipse`](BaseSketcher2d.md#ellipse)

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

Defined in: [Sketcher2d.ts:266](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L266)

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

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`ellipseTo`](BaseSketcher2d.md#ellipseto)

***

### halfEllipse()

```ts
halfEllipse(
   xDist, 
   yDist, 
   minorRadius, 
   sweep): this;
```

Defined in: [Sketcher2d.ts:368](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L368)

Draws an arc as half an ellipse, defined by the sagitta of the ellipse
(which corresponds to the radius in the axe orthogonal to the straight
line).The end point is defined by distances from he start point.

The sweep flag is to be understood as defined for SVG paths.

#### Parameters

##### xDist

`number`

##### yDist

`number`

##### minorRadius

`number`

##### sweep

`boolean` = `false`

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`halfEllipse`](../interfaces/GenericSketcher.md#halfellipse)

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`halfEllipse`](BaseSketcher2d.md#halfellipse)

***

### halfEllipseTo()

```ts
halfEllipseTo(
   end, 
   minorRadius, 
   sweep): this;
```

Defined in: [Sketcher2d.ts:354](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L354)

Draws an arc as half an ellipse, defined by the sagitta of the ellipse
(which corresponds to the radius in the axe orthogonal to the straight
line).

The sweep flag is to be understood as defined for SVG paths.

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

##### minorRadius

`number`

##### sweep

`boolean` = `false`

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`halfEllipseTo`](../interfaces/GenericSketcher.md#halfellipseto)

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`halfEllipseTo`](BaseSketcher2d.md#halfellipseto)

## Line Segment

### hLine()

```ts
hLine(distance): this;
```

Defined in: [Sketcher2d.ts:113](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L113)

Draws an horizontal line of length distance from the current point

#### Parameters

##### distance

`number`

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`hLine`](../interfaces/GenericSketcher.md#hline)

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`hLine`](BaseSketcher2d.md#hline)

***

### hLineTo()

```ts
hLineTo(xPos): this;
```

Defined in: [Sketcher2d.ts:121](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L121)

Draws an horizontal line to the x coordinate

#### Parameters

##### xPos

`number`

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`hLineTo`](../interfaces/GenericSketcher.md#hlineto)

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`hLineTo`](BaseSketcher2d.md#hlineto)

***

### line()

```ts
line(xDist, yDist): this;
```

Defined in: [Sketcher2d.ts:105](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L105)

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

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`line`](BaseSketcher2d.md#line)

***

### lineTo()

```ts
lineTo(point): this;
```

Defined in: [Sketcher2d.ts:95](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L95)

Draws a line from the current point to the point given in argument

#### Parameters

##### point

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`lineTo`](../interfaces/GenericSketcher.md#lineto)

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`lineTo`](BaseSketcher2d.md#lineto)

***

### polarLine()

```ts
polarLine(distance, angle): this;
```

Defined in: [Sketcher2d.ts:131](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L131)

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

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`polarLine`](BaseSketcher2d.md#polarline)

***

### polarLineTo()

```ts
polarLineTo(__namedParameters): this;
```

Defined in: [Sketcher2d.ts:125](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L125)

Draws a line from the current point to the point defined in polar
coordiates, of radius r and angle theta (in degrees) from the origin

#### Parameters

##### \_\_namedParameters

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`polarLineTo`](../interfaces/GenericSketcher.md#polarlineto)

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`polarLineTo`](BaseSketcher2d.md#polarlineto)

***

### tangentLine()

```ts
tangentLine(distance): this;
```

Defined in: [Sketcher2d.ts:137](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L137)

Draws a line from the current point as a tangent to the previous part of
curve drawn. The distance defines how long the line will be.

#### Parameters

##### distance

`number`

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`tangentLine`](../interfaces/GenericSketcher.md#tangentline)

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`tangentLine`](BaseSketcher2d.md#tangentline)

***

### vLine()

```ts
vLine(distance): this;
```

Defined in: [Sketcher2d.ts:109](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L109)

Draws a vertical line of length distance from the current point

#### Parameters

##### distance

`number`

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`vLine`](../interfaces/GenericSketcher.md#vline)

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`vLine`](BaseSketcher2d.md#vline)

***

### vLineTo()

```ts
vLineTo(yPos): this;
```

Defined in: [Sketcher2d.ts:117](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L117)

Draws a vertical line to the y coordinate

#### Parameters

##### yPos

`number`

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`vLineTo`](../interfaces/GenericSketcher.md#vlineto)

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`vLineTo`](BaseSketcher2d.md#vlineto)

## Other

### close()

```ts
close(): Blueprint;
```

Defined in: [Sketcher2d.ts:648](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L648)

Stop drawing, make sure the sketch is closed (by adding a straight line to
from the last point to the first) and returns the sketch.

#### Returns

[`Blueprint`](Blueprint.md)

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`close`](../interfaces/GenericSketcher.md#close)

***

### closeWithCustomCorner()

```ts
closeWithCustomCorner(radius, mode): Blueprint;
```

Defined in: [Sketcher2d.ts:664](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L664)

Stop drawing, make sure the sketch is closed (by adding a straight line to
from the last point to the first), add a fillet between the last and the
first segments and returns the sketch.

#### Parameters

##### radius

`number`

##### mode

`"fillet"` | `"chamfer"`

#### Returns

[`Blueprint`](Blueprint.md)

***

### closeWithMirror()

```ts
closeWithMirror(): Blueprint;
```

Defined in: [Sketcher2d.ts:653](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L653)

Stop drawing, make sure the sketch is closed (by mirroring the lines
between the first and last points drawn) and returns the sketch.

#### Returns

[`Blueprint`](Blueprint.md)

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`closeWithMirror`](../interfaces/GenericSketcher.md#closewithmirror)

***

### customCorner()

```ts
customCorner(radius, mode): BlueprintSketcher;
```

Defined in: [Sketcher2d.ts:465](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L465)

Changes the corner between the previous and next segments.

#### Parameters

##### radius

`number`

##### mode

`"fillet"` | `"chamfer"`

#### Returns

`BlueprintSketcher`

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`customCorner`](BaseSketcher2d.md#customcorner)

***

### done()

```ts
done(): Blueprint;
```

Defined in: [Sketcher2d.ts:644](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L644)

Stop drawing and returns the sketch.

#### Returns

[`Blueprint`](Blueprint.md)

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`done`](../interfaces/GenericSketcher.md#done)

***

### movePointerTo()

```ts
movePointerTo(point): this;
```

Defined in: [Sketcher2d.ts:66](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L66)

Changes the point to start your drawing from

#### Parameters

##### point

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`this`

#### Implementation of

[`GenericSketcher`](../interfaces/GenericSketcher.md).[`movePointerTo`](../interfaces/GenericSketcher.md#movepointerto)

#### Inherited from

[`BaseSketcher2d`](BaseSketcher2d.md).[`movePointerTo`](BaseSketcher2d.md#movepointerto)
