# Class: Drawing

Defined in: [draw.ts:50](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L50)

## Implements

- [`DrawingInterface`](../interfaces/DrawingInterface.md)

## Constructors

### Constructor

```ts
new Drawing(innerShape): Drawing;
```

Defined in: [draw.ts:53](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L53)

#### Parameters

##### innerShape

[`Shape2D`](../type-aliases/Shape2D.md) = `null`

#### Returns

`Drawing`

## Drawing Modifications

### chamfer()

```ts
chamfer(radius, filter?): Drawing;
```

Defined in: [draw.ts:171](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L171)

Creates a new drawing with some corners filletted, as specified by the
radius and the corner finder function

#### Parameters

##### radius

`number`

##### filter?

(`c`) => [`CornerFinder`](CornerFinder.md)

#### Returns

`Drawing`

***

### cut()

```ts
cut(other): Drawing;
```

Defined in: [draw.ts:132](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L132)

Builds a new drawing by cuting another drawing into this one

#### Parameters

##### other

`Drawing`

#### Returns

`Drawing`

***

### fillet()

```ts
fillet(radius, filter?): Drawing;
```

Defined in: [draw.ts:160](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L160)

Creates a new drawing with some corners filletted, as specified by the
radius and the corner finder function

#### Parameters

##### radius

`number`

##### filter?

(`c`) => [`CornerFinder`](CornerFinder.md)

#### Returns

`Drawing`

***

### fuse()

```ts
fuse(other): Drawing;
```

Defined in: [draw.ts:141](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L141)

Builds a new drawing by merging another drawing into this one

#### Parameters

##### other

`Drawing`

#### Returns

`Drawing`

***

### intersect()

```ts
intersect(other): Drawing;
```

Defined in: [draw.ts:150](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L150)

Builds a new drawing by intersection this drawing with another

#### Parameters

##### other

`Drawing`

#### Returns

`Drawing`

## Other

### blueprint

#### Get Signature

```ts
get blueprint(): Blueprint;
```

Defined in: [draw.ts:220](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L220)

##### Returns

[`Blueprint`](Blueprint.md)

***

### boundingBox

#### Get Signature

```ts
get boundingBox(): BoundingBox2d;
```

Defined in: [draw.ts:87](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L87)

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

Defined in: [draw.ts:96](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L96)

##### Returns

`string`

***

### approximate()

```ts
approximate(target, options): Drawing;
```

Defined in: [draw.ts:210](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L210)

#### Parameters

##### target

`"svg"` | `"arcs"`

##### options

`ApproximationOptions` = `{}`

#### Returns

`Drawing`

***

### clone()

```ts
clone(): Drawing;
```

Defined in: [draw.ts:57](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L57)

#### Returns

`Drawing`

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`clone`](../interfaces/DrawingInterface.md#clone)

***

### mirror()

```ts
mirror(
   centerOrDirection, 
   origin?, 
   mode?): Drawing;
```

Defined in: [draw.ts:118](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L118)

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

`Drawing`

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`mirror`](../interfaces/DrawingInterface.md#mirror)

***

### offset()

```ts
offset(distance, offsetConfig): Drawing;
```

Defined in: [draw.ts:206](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L206)

#### Parameters

##### distance

`number`

##### offsetConfig

`Offset2DConfig` = `{}`

#### Returns

`Drawing`

***

### rotate()

```ts
rotate(angle, center?): Drawing;
```

Defined in: [draw.ts:101](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L101)

#### Parameters

##### angle

`number`

##### center?

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`Drawing`

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`rotate`](../interfaces/DrawingInterface.md#rotate)

***

### scale()

```ts
scale(scaleFactor, center?): Drawing;
```

Defined in: [draw.ts:113](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L113)

#### Parameters

##### scaleFactor

`number`

##### center?

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`Drawing`

***

### serialize()

```ts
serialize(): string;
```

Defined in: [draw.ts:61](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L61)

#### Returns

`string`

***

### sketchOnFace()

```ts
sketchOnFace(face, scaleMode): 
  | SketchInterface
  | Sketches;
```

Defined in: [draw.ts:189](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L189)

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

##### scaleMode

[`ScaleMode`](../type-aliases/ScaleMode.md)

#### Returns

  \| [`SketchInterface`](../interfaces/SketchInterface.md)
  \| [`Sketches`](Sketches.md)

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`sketchOnFace`](../interfaces/DrawingInterface.md#sketchonface)

***

### sketchOnPlane()

#### Call Signature

```ts
sketchOnPlane(inputPlane): 
  | SketchInterface
  | Sketches;
```

Defined in: [draw.ts:176](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L176)

Returns the sketched version of the drawing, on a plane

##### Parameters

###### inputPlane

[`Plane`](Plane.md)

##### Returns

  \| [`SketchInterface`](../interfaces/SketchInterface.md)
  \| [`Sketches`](Sketches.md)

##### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`sketchOnPlane`](../interfaces/DrawingInterface.md#sketchonplane)

#### Call Signature

```ts
sketchOnPlane(inputPlane?, origin?): 
  | SketchInterface
  | Sketches;
```

Defined in: [draw.ts:177](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L177)

##### Parameters

###### inputPlane?

[`PlaneName`](../type-aliases/PlaneName.md)

###### origin?

`number` | [`Point`](../type-aliases/Point.md)

##### Returns

  \| [`SketchInterface`](../interfaces/SketchInterface.md)
  \| [`Sketches`](Sketches.md)

##### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`sketchOnPlane`](../interfaces/DrawingInterface.md#sketchonplane)

***

### stretch()

```ts
stretch(
   ratio, 
   direction, 
   origin): Drawing;
```

Defined in: [draw.ts:91](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L91)

#### Parameters

##### ratio

`number`

##### direction

[`Point2D`](../type-aliases/Point2D.md)

##### origin

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`Drawing`

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`stretch`](../interfaces/DrawingInterface.md#stretch)

***

### toSVG()

```ts
toSVG(margin?): string;
```

Defined in: [draw.ts:194](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L194)

Formats the drawing as an SVG image

#### Parameters

##### margin?

`number`

#### Returns

`string`

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`toSVG`](../interfaces/DrawingInterface.md#tosvg)

***

### toSVGPaths()

```ts
toSVGPaths(): string[] | string[][];
```

Defined in: [draw.ts:202](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L202)

Formats the drawing as a list of SVG paths

#### Returns

`string`[] \| `string`[][]

#### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`toSVGPaths`](../interfaces/DrawingInterface.md#tosvgpaths)

***

### toSVGViewBox()

```ts
toSVGViewBox(margin): string;
```

Defined in: [draw.ts:198](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L198)

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
translate(xDist, yDist): Drawing;
```

Defined in: [draw.ts:106](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L106)

##### Parameters

###### xDist

`number`

###### yDist

`number`

##### Returns

`Drawing`

##### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`translate`](../interfaces/DrawingInterface.md#translate)

#### Call Signature

```ts
translate(translationVector): Drawing;
```

Defined in: [draw.ts:107](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/draw.ts#L107)

##### Parameters

###### translationVector

[`Point2D`](../type-aliases/Point2D.md)

##### Returns

`Drawing`

##### Implementation of

[`DrawingInterface`](../interfaces/DrawingInterface.md).[`translate`](../interfaces/DrawingInterface.md#translate)
