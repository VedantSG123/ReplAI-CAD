# Class: Blueprint

Defined in: [blueprints/Blueprint.ts:41](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L41)

A Blueprint is an abstract Sketch, a 2D set of curves that can then be
sketched on different surfaces (faces or planes)

You should create them by "sketching" with a `BlueprintSketcher`

## Implements

- [`DrawingInterface`](../interfaces/DrawingInterface.md)

## Constructors

### Constructor

```ts
new Blueprint(curves): Blueprint;
```

Defined in: [blueprints/Blueprint.ts:46](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L46)

#### Parameters

##### curves

[`Curve2D`](Curve2D.md)[]

#### Returns

`Blueprint`

## Properties

### curves

```ts
curves: Curve2D[];
```

Defined in: [blueprints/Blueprint.ts:42](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L42)

## Accessors

### boundingBox

#### Get Signature

```ts
get boundingBox(): BoundingBox2d;
```

Defined in: [blueprints/Blueprint.ts:67](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L67)

##### Returns

[`BoundingBox2d`](BoundingBox2d.md)

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`boundingBox`](../interfaces/DrawingInterface.md#boundingbox)

***

### firstPoint

#### Get Signature

```ts
get firstPoint(): Point2D;
```

Defined in: [blueprints/Blueprint.ts:231](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L231)

##### Returns

[`Point2D`](../type-aliases/Point2D.md)

***

### lastPoint

#### Get Signature

```ts
get lastPoint(): Point2D;
```

Defined in: [blueprints/Blueprint.ts:235](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L235)

##### Returns

[`Point2D`](../type-aliases/Point2D.md)

***

### orientation

#### Get Signature

```ts
get orientation(): "clockwise" | "counterClockwise";
```

Defined in: [blueprints/Blueprint.ts:74](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L74)

##### Returns

`"clockwise"` \| `"counterClockwise"`

***

### repr

#### Get Signature

```ts
get repr(): string;
```

Defined in: [blueprints/Blueprint.ts:63](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L63)

##### Returns

`string`

## Methods

### clone()

```ts
clone(): Blueprint;
```

Defined in: [blueprints/Blueprint.ts:59](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L59)

#### Returns

`Blueprint`

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`clone`](../interfaces/DrawingInterface.md#clone)

***

### delete()

```ts
delete(): void;
```

Defined in: [blueprints/Blueprint.ts:54](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L54)

#### Returns

`void`

***

### intersects()

```ts
intersects(other): boolean;
```

Defined in: [blueprints/Blueprint.ts:265](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L265)

#### Parameters

##### other

`Blueprint`

#### Returns

`boolean`

***

### isClosed()

```ts
isClosed(): boolean;
```

Defined in: [blueprints/Blueprint.ts:261](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L261)

#### Returns

`boolean`

***

### isInside()

```ts
isInside(point): boolean;
```

Defined in: [blueprints/Blueprint.ts:239](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L239)

#### Parameters

##### point

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`boolean`

***

### mirror()

```ts
mirror(
   centerOrDirection, 
   origin, 
   mode): Blueprint;
```

Defined in: [blueprints/Blueprint.ts:137](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L137)

Returns the mirror image of this drawing made with a single point (in
center mode, the default, or a plane, (plane mode, with both direction and
origin of the plane).

#### Parameters

##### centerOrDirection

[`Point2D`](../type-aliases/Point2D.md)

##### origin

[`Point2D`](../type-aliases/Point2D.md) = `...`

##### mode

`"center"` | `"plane"`

#### Returns

`Blueprint`

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`mirror`](../interfaces/DrawingInterface.md#mirror)

***

### rotate()

```ts
rotate(angle, center?): Blueprint;
```

Defined in: [blueprints/Blueprint.ts:118](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L118)

#### Parameters

##### angle

`number`

##### center?

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`Blueprint`

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`rotate`](../interfaces/DrawingInterface.md#rotate)

***

### scale()

```ts
scale(scaleFactor, center?): Blueprint;
```

Defined in: [blueprints/Blueprint.ts:110](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L110)

#### Parameters

##### scaleFactor

`number`

##### center?

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`Blueprint`

***

### sketchOnFace()

```ts
sketchOnFace(face, scaleMode?): Sketch;
```

Defined in: [blueprints/Blueprint.ts:168](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L168)

Returns the sketched version of the drawing, on a face.

The scale mode corresponds to the way the coordinates of the drawing are
interpreted match with the face:

- `original` uses global coordinates (1mm in the drawing is 1mm on the
  face). This is the default, but currently supported only for planar
  and circular faces
- `bounds` normalises the UV parameters on the face to [0,1] intervals.
- `native` uses the default UV parameters of opencascade

#### Parameters

##### face

[`Face`](Face.md)

##### scaleMode?

[`ScaleMode`](../type-aliases/ScaleMode.md)

#### Returns

[`Sketch`](Sketch.md)

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`sketchOnFace`](../interfaces/DrawingInterface.md#sketchonface)

***

### sketchOnPlane()

```ts
sketchOnPlane(inputPlane?, origin?): Sketch;
```

Defined in: [blueprints/Blueprint.ts:150](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L150)

Returns the sketched version of the drawing, on a plane

#### Parameters

##### inputPlane?

[`Plane`](Plane.md) | [`PlaneName`](../type-aliases/PlaneName.md)

##### origin?

`number` | [`Point`](../type-aliases/Point.md)

#### Returns

[`Sketch`](Sketch.md)

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`sketchOnPlane`](../interfaces/DrawingInterface.md#sketchonplane)

***

### stretch()

```ts
stretch(
   ratio, 
   direction, 
   origin): Blueprint;
```

Defined in: [blueprints/Blueprint.ts:99](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L99)

#### Parameters

##### ratio

`number`

##### direction

[`Point2D`](../type-aliases/Point2D.md)

##### origin

[`Point2D`](../type-aliases/Point2D.md) = `...`

#### Returns

`Blueprint`

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`stretch`](../interfaces/DrawingInterface.md#stretch)

***

### toSVG()

```ts
toSVG(margin): string;
```

Defined in: [blueprints/Blueprint.ts:227](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L227)

Formats the drawing as an SVG image

#### Parameters

##### margin

`number` = `1`

#### Returns

`string`

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`toSVG`](../interfaces/DrawingInterface.md#tosvg)

***

### toSVGPath()

```ts
toSVGPath(): string;
```

Defined in: [blueprints/Blueprint.ts:215](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L215)

#### Returns

`string`

***

### toSVGPathD()

```ts
toSVGPathD(): string;
```

Defined in: [blueprints/Blueprint.ts:199](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L199)

#### Returns

`string`

***

### toSVGPaths()

```ts
toSVGPaths(): string[];
```

Defined in: [blueprints/Blueprint.ts:223](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L223)

Formats the drawing as a list of SVG paths

#### Returns

`string`[]

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`toSVGPaths`](../interfaces/DrawingInterface.md#tosvgpaths)

***

### toSVGViewBox()

```ts
toSVGViewBox(margin): string;
```

Defined in: [blueprints/Blueprint.ts:219](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L219)

Returns the SVG viewbox that corresponds to this drawing

#### Parameters

##### margin

`number` = `1`

#### Returns

`string`

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`toSVGViewBox`](../interfaces/DrawingInterface.md#tosvgviewbox)

***

### translate()

#### Call Signature

```ts
translate(xDist, yDist): Blueprint;
```

Defined in: [blueprints/Blueprint.ts:125](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L125)

##### Parameters

###### xDist

`number`

###### yDist

`number`

##### Returns

`Blueprint`

##### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`translate`](../interfaces/DrawingInterface.md#translate)

#### Call Signature

```ts
translate(translationVector): Blueprint;
```

Defined in: [blueprints/Blueprint.ts:126](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprint.ts#L126)

##### Parameters

###### translationVector

[`Point2D`](../type-aliases/Point2D.md)

##### Returns

`Blueprint`

##### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`translate`](../interfaces/DrawingInterface.md#translate)
