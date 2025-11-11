# Class: Blueprints

Defined in: [blueprints/Blueprints.ts:14](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprints.ts#L14)

## Implements

- [`DrawingInterface`](../interfaces/DrawingInterface.md)

## Constructors

### Constructor

```ts
new Blueprints(blueprints): Blueprints;
```

Defined in: [blueprints/Blueprints.ts:17](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprints.ts#L17)

#### Parameters

##### blueprints

([`CompoundBlueprint`](CompoundBlueprint.md) \| [`Blueprint`](Blueprint.md))[]

#### Returns

`Blueprints`

## Properties

### blueprints

```ts
blueprints: (CompoundBlueprint | Blueprint)[];
```

Defined in: [blueprints/Blueprints.ts:15](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprints.ts#L15)

## Accessors

### boundingBox

#### Get Signature

```ts
get boundingBox(): BoundingBox2d;
```

Defined in: [blueprints/Blueprints.ts:30](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprints.ts#L30)

##### Returns

[`BoundingBox2d`](BoundingBox2d.md)

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`boundingBox`](../interfaces/DrawingInterface.md#boundingbox)

***

### repr

#### Get Signature

```ts
get repr(): string;
```

Defined in: [blueprints/Blueprints.ts:22](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprints.ts#L22)

##### Returns

`string`

## Methods

### clone()

```ts
clone(): Blueprints;
```

Defined in: [blueprints/Blueprints.ts:26](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprints.ts#L26)

#### Returns

`Blueprints`

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`clone`](../interfaces/DrawingInterface.md#clone)

***

### mirror()

```ts
mirror(
   centerOrDirection, 
   origin?, 
   mode?): Blueprints;
```

Defined in: [blueprints/Blueprints.ts:66](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprints.ts#L66)

Returns the mirror image of this drawing made with a single point (in
center mode, the default, or a plane, (plane mode, with both direction and
origin of the plane).

#### Parameters

##### centerOrDirection

[`Point2D`](../type-aliases/Point2D.md)

##### origin?

[`Point2D`](../type-aliases/Point2D.md)

##### mode?

`"center"` | `"plane"`

#### Returns

`Blueprints`

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`mirror`](../interfaces/DrawingInterface.md#mirror)

***

### rotate()

```ts
rotate(angle, center?): Blueprints;
```

Defined in: [blueprints/Blueprints.ts:45](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprints.ts#L45)

#### Parameters

##### angle

`number`

##### center?

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`Blueprints`

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`rotate`](../interfaces/DrawingInterface.md#rotate)

***

### scale()

```ts
scale(scaleFactor, center?): Blueprints;
```

Defined in: [blueprints/Blueprints.ts:51](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprints.ts#L51)

#### Parameters

##### scaleFactor

`number`

##### center?

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`Blueprints`

***

### sketchOnFace()

```ts
sketchOnFace(face, scaleMode?): Sketches;
```

Defined in: [blueprints/Blueprints.ts:82](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprints.ts#L82)

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

[`Sketches`](Sketches.md)

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`sketchOnFace`](../interfaces/DrawingInterface.md#sketchonface)

***

### sketchOnPlane()

```ts
sketchOnPlane(plane?, origin?): Sketches;
```

Defined in: [blueprints/Blueprints.ts:76](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprints.ts#L76)

Returns the sketched version of the drawing, on a plane

#### Parameters

##### plane?

[`Plane`](Plane.md) | [`PlaneName`](../type-aliases/PlaneName.md)

##### origin?

`number` | [`Point`](../type-aliases/Point.md)

#### Returns

[`Sketches`](Sketches.md)

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`sketchOnPlane`](../interfaces/DrawingInterface.md#sketchonplane)

***

### stretch()

```ts
stretch(
   ratio, 
   direction, 
   origin): Blueprints;
```

Defined in: [blueprints/Blueprints.ts:39](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprints.ts#L39)

#### Parameters

##### ratio

`number`

##### direction

[`Point2D`](../type-aliases/Point2D.md)

##### origin

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`Blueprints`

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`stretch`](../interfaces/DrawingInterface.md#stretch)

***

### toSVG()

```ts
toSVG(margin): string;
```

Defined in: [blueprints/Blueprints.ts:96](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprints.ts#L96)

Formats the drawing as an SVG image

#### Parameters

##### margin

`number` = `1`

#### Returns

`string`

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`toSVG`](../interfaces/DrawingInterface.md#tosvg)

***

### toSVGPaths()

```ts
toSVGPaths(): string[][];
```

Defined in: [blueprints/Blueprints.ts:92](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprints.ts#L92)

Formats the drawing as a list of SVG paths

#### Returns

`string`[][]

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`toSVGPaths`](../interfaces/DrawingInterface.md#tosvgpaths)

***

### toSVGViewBox()

```ts
toSVGViewBox(margin): string;
```

Defined in: [blueprints/Blueprints.ts:88](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprints.ts#L88)

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
translate(xDist, yDist): Blueprints;
```

Defined in: [blueprints/Blueprints.ts:58](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprints.ts#L58)

##### Parameters

###### xDist

`number`

###### yDist

`number`

##### Returns

`Blueprints`

##### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`translate`](../interfaces/DrawingInterface.md#translate)

#### Call Signature

```ts
translate(translationVector): Blueprints;
```

Defined in: [blueprints/Blueprints.ts:59](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/Blueprints.ts#L59)

##### Parameters

###### translationVector

[`Point2D`](../type-aliases/Point2D.md)

##### Returns

`Blueprints`

##### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`translate`](../interfaces/DrawingInterface.md#translate)
