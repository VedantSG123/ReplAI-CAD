# Class: CompoundBlueprint

Defined in: [blueprints/CompoundBlueprint.ts:13](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/CompoundBlueprint.ts#L13)

## Implements

- [`DrawingInterface`](../interfaces/DrawingInterface.md)

## Constructors

### Constructor

```ts
new CompoundBlueprint(blueprints): CompoundBlueprint;
```

Defined in: [blueprints/CompoundBlueprint.ts:17](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/CompoundBlueprint.ts#L17)

#### Parameters

##### blueprints

[`Blueprint`](Blueprint.md)[]

#### Returns

`CompoundBlueprint`

## Properties

### blueprints

```ts
blueprints: Blueprint[];
```

Defined in: [blueprints/CompoundBlueprint.ts:14](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/CompoundBlueprint.ts#L14)

## Accessors

### boundingBox

#### Get Signature

```ts
get boundingBox(): BoundingBox2d;
```

Defined in: [blueprints/CompoundBlueprint.ts:26](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/CompoundBlueprint.ts#L26)

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

Defined in: [blueprints/CompoundBlueprint.ts:35](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/CompoundBlueprint.ts#L35)

##### Returns

`string`

## Methods

### clone()

```ts
clone(): CompoundBlueprint;
```

Defined in: [blueprints/CompoundBlueprint.ts:22](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/CompoundBlueprint.ts#L22)

#### Returns

`CompoundBlueprint`

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`clone`](../interfaces/DrawingInterface.md#clone)

***

### mirror()

```ts
mirror(
   centerOrDirection, 
   origin?, 
   mode?): CompoundBlueprint;
```

Defined in: [blueprints/CompoundBlueprint.ts:76](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/CompoundBlueprint.ts#L76)

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

`CompoundBlueprint`

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`mirror`](../interfaces/DrawingInterface.md#mirror)

***

### rotate()

```ts
rotate(angle, center?): CompoundBlueprint;
```

Defined in: [blueprints/CompoundBlueprint.ts:55](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/CompoundBlueprint.ts#L55)

#### Parameters

##### angle

`number`

##### center?

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`CompoundBlueprint`

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`rotate`](../interfaces/DrawingInterface.md#rotate)

***

### scale()

```ts
scale(scaleFactor, center?): CompoundBlueprint;
```

Defined in: [blueprints/CompoundBlueprint.ts:61](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/CompoundBlueprint.ts#L61)

#### Parameters

##### scaleFactor

`number`

##### center?

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`CompoundBlueprint`

***

### sketchOnFace()

```ts
sketchOnFace(face, scaleMode?): CompoundSketch;
```

Defined in: [blueprints/CompoundBlueprint.ts:97](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/CompoundBlueprint.ts#L97)

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

[`CompoundSketch`](CompoundSketch.md)

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`sketchOnFace`](../interfaces/DrawingInterface.md#sketchonface)

***

### sketchOnPlane()

```ts
sketchOnPlane(plane?, origin?): CompoundSketch;
```

Defined in: [blueprints/CompoundBlueprint.ts:86](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/CompoundBlueprint.ts#L86)

Returns the sketched version of the drawing, on a plane

#### Parameters

##### plane?

[`Plane`](Plane.md) | [`PlaneName`](../type-aliases/PlaneName.md)

##### origin?

`number` | [`Point`](../type-aliases/Point.md)

#### Returns

[`CompoundSketch`](CompoundSketch.md)

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`sketchOnPlane`](../interfaces/DrawingInterface.md#sketchonplane)

***

### stretch()

```ts
stretch(
   ratio, 
   direction, 
   origin): CompoundBlueprint;
```

Defined in: [blueprints/CompoundBlueprint.ts:45](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/CompoundBlueprint.ts#L45)

#### Parameters

##### ratio

`number`

##### direction

[`Point2D`](../type-aliases/Point2D.md)

##### origin

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`CompoundBlueprint`

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`stretch`](../interfaces/DrawingInterface.md#stretch)

***

### toSVG()

```ts
toSVG(margin): string;
```

Defined in: [blueprints/CompoundBlueprint.ts:117](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/CompoundBlueprint.ts#L117)

Formats the drawing as an SVG image

#### Parameters

##### margin

`number` = `1`

#### Returns

`string`

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`toSVG`](../interfaces/DrawingInterface.md#tosvg)

***

### toSVGGroup()

```ts
toSVGGroup(): string;
```

Defined in: [blueprints/CompoundBlueprint.ts:113](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/CompoundBlueprint.ts#L113)

#### Returns

`string`

***

### toSVGPaths()

```ts
toSVGPaths(): string[];
```

Defined in: [blueprints/CompoundBlueprint.ts:109](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/CompoundBlueprint.ts#L109)

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

Defined in: [blueprints/CompoundBlueprint.ts:105](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/CompoundBlueprint.ts#L105)

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
translate(xDist, yDist): CompoundBlueprint;
```

Defined in: [blueprints/CompoundBlueprint.ts:68](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/CompoundBlueprint.ts#L68)

##### Parameters

###### xDist

`number`

###### yDist

`number`

##### Returns

`CompoundBlueprint`

##### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`translate`](../interfaces/DrawingInterface.md#translate)

#### Call Signature

```ts
translate(translationVector): CompoundBlueprint;
```

Defined in: [blueprints/CompoundBlueprint.ts:69](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/CompoundBlueprint.ts#L69)

##### Parameters

###### translationVector

[`Point2D`](../type-aliases/Point2D.md)

##### Returns

`CompoundBlueprint`

##### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`translate`](../interfaces/DrawingInterface.md#translate)
