# Class: BaseSketcher2d

Defined in: [Sketcher2d.ts:44](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L44)

## Extended by

- [`DrawingPen`](DrawingPen.md)
- [`FaceSketcher`](FaceSketcher.md)
- [`BlueprintSketcher`](BlueprintSketcher.md)

## Constructors

### Constructor

```ts
new BaseSketcher2d(origin): BaseSketcher2d;
```

Defined in: [Sketcher2d.ts:50](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L50)

#### Parameters

##### origin

[`Point2D`](../type-aliases/Point2D.md) = `...`

#### Returns

`BaseSketcher2d`

## Methods

### bezierCurveTo()

```ts
bezierCurveTo(end, controlPoints): this;
```

Defined in: [Sketcher2d.ts:378](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L378)

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

##### controlPoints

[`Point2D`](../type-aliases/Point2D.md) | [`Point2D`](../type-aliases/Point2D.md)[]

#### Returns

`this`

***

### bulgeArc()

```ts
bulgeArc(
   xDist, 
   yDist, 
   bulge): this;
```

Defined in: [Sketcher2d.ts:226](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L226)

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

Defined in: [Sketcher2d.ts:218](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L218)

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

##### bulge

`number`

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

Defined in: [Sketcher2d.ts:402](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L402)

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

### customCorner()

```ts
customCorner(radius, mode): BaseSketcher2d;
```

Defined in: [Sketcher2d.ts:465](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L465)

Changes the corner between the previous and next segments.

#### Parameters

##### radius

`number`

##### mode

`"fillet"` | `"chamfer"`

#### Returns

`BaseSketcher2d`

***

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

***

### halfEllipseTo()

```ts
halfEllipseTo(
   end, 
   minorRadius, 
   sweep): this;
```

Defined in: [Sketcher2d.ts:354](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L354)

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

##### minorRadius

`number`

##### sweep

`boolean` = `false`

#### Returns

`this`

***

### hBulgeArc()

```ts
hBulgeArc(distance, bulge): this;
```

Defined in: [Sketcher2d.ts:237](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L237)

#### Parameters

##### distance

`number`

##### bulge

`number`

#### Returns

`this`

***

### hLine()

```ts
hLine(distance): this;
```

Defined in: [Sketcher2d.ts:113](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L113)

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

Defined in: [Sketcher2d.ts:121](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L121)

#### Parameters

##### xPos

`number`

#### Returns

`this`

***

### hSagittaArc()

```ts
hSagittaArc(distance, sagitta): this;
```

Defined in: [Sketcher2d.ts:214](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L214)

#### Parameters

##### distance

`number`

##### sagitta

`number`

#### Returns

`this`

***

### line()

```ts
line(xDist, yDist): this;
```

Defined in: [Sketcher2d.ts:105](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L105)

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

Defined in: [Sketcher2d.ts:95](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L95)

#### Parameters

##### point

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`this`

***

### movePointerTo()

```ts
movePointerTo(point): this;
```

Defined in: [Sketcher2d.ts:66](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L66)

#### Parameters

##### point

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`this`

***

### polarLine()

```ts
polarLine(distance, angle): this;
```

Defined in: [Sketcher2d.ts:131](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L131)

#### Parameters

##### distance

`number`

##### angle

`number`

#### Returns

`this`

***

### polarLineTo()

```ts
polarLineTo(__namedParameters): this;
```

Defined in: [Sketcher2d.ts:125](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L125)

#### Parameters

##### \_\_namedParameters

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`this`

***

### quadraticBezierCurveTo()

```ts
quadraticBezierCurveTo(end, controlPoint): this;
```

Defined in: [Sketcher2d.ts:398](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L398)

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

##### controlPoint

[`Point2D`](../type-aliases/Point2D.md)

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

Defined in: [Sketcher2d.ts:203](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L203)

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

Defined in: [Sketcher2d.ts:176](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L176)

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

##### sagitta

`number`

#### Returns

`this`

***

### smoothSpline()

```ts
smoothSpline(
   xDist, 
   yDist, 
   splineConfig?): this;
```

Defined in: [Sketcher2d.ts:451](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L451)

#### Parameters

##### xDist

`number`

##### yDist

`number`

##### splineConfig?

[`SplineConfig`](../type-aliases/SplineConfig.md)

#### Returns

`this`

***

### smoothSplineTo()

```ts
smoothSplineTo(end, config?): this;
```

Defined in: [Sketcher2d.ts:410](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L410)

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

##### config?

[`SplineConfig`](../type-aliases/SplineConfig.md)

#### Returns

`this`

***

### tangentArc()

```ts
tangentArc(xDist, yDist): this;
```

Defined in: [Sketcher2d.ts:261](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L261)

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

Defined in: [Sketcher2d.ts:241](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L241)

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`this`

***

### tangentLine()

```ts
tangentLine(distance): this;
```

Defined in: [Sketcher2d.ts:137](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L137)

#### Parameters

##### distance

`number`

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

Defined in: [Sketcher2d.ts:163](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L163)

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
threePointsArcTo(end, midPoint): this;
```

Defined in: [Sketcher2d.ts:151](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L151)

#### Parameters

##### end

[`Point2D`](../type-aliases/Point2D.md)

##### midPoint

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`this`

***

### vBulgeArc()

```ts
vBulgeArc(distance, bulge): this;
```

Defined in: [Sketcher2d.ts:233](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L233)

#### Parameters

##### distance

`number`

##### bulge

`number`

#### Returns

`this`

***

### vLine()

```ts
vLine(distance): this;
```

Defined in: [Sketcher2d.ts:109](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L109)

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

Defined in: [Sketcher2d.ts:117](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L117)

#### Parameters

##### yPos

`number`

#### Returns

`this`

***

### vSagittaArc()

```ts
vSagittaArc(distance, sagitta): this;
```

Defined in: [Sketcher2d.ts:210](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/Sketcher2d.ts#L210)

#### Parameters

##### distance

`number`

##### sagitta

`number`

#### Returns

`this`
