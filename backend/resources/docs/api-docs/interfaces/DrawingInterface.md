# Interface: DrawingInterface

Defined in: [blueprints/lib.ts:136](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/lib.ts#L136)

## Properties

### boundingBox

```ts
boundingBox: BoundingBox2d;
```

Defined in: [blueprints/lib.ts:138](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/lib.ts#L138)

## Methods

### clone()

```ts
clone(): DrawingInterface;
```

Defined in: [blueprints/lib.ts:137](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/lib.ts#L137)

#### Returns

`DrawingInterface`

***

### mirror()

```ts
mirror(
   centerOrDirection, 
   origin?, 
   mode?): DrawingInterface;
```

Defined in: [blueprints/lib.ts:151](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/lib.ts#L151)

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

`DrawingInterface`

***

### rotate()

```ts
rotate(angle, center): DrawingInterface;
```

Defined in: [blueprints/lib.ts:141](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/lib.ts#L141)

#### Parameters

##### angle

`number`

##### center

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`DrawingInterface`

***

### sketchOnFace()

```ts
sketchOnFace(face, scaleMode): 
  | SketchInterface
  | Sketches;
```

Defined in: [blueprints/lib.ts:182](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/lib.ts#L182)

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

[`Face`](../classes/Face.md)

##### scaleMode

[`ScaleMode`](../type-aliases/ScaleMode.md)

#### Returns

  \| [`SketchInterface`](SketchInterface.md)
  \| [`Sketches`](../classes/Sketches.md)

***

### sketchOnPlane()

#### Call Signature

```ts
sketchOnPlane(inputPlane): 
  | SketchInterface
  | Sketches;
```

Defined in: [blueprints/lib.ts:160](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/lib.ts#L160)

Returns the sketched version of the drawing, on a plane

##### Parameters

###### inputPlane

[`Plane`](../classes/Plane.md)

##### Returns

  \| [`SketchInterface`](SketchInterface.md)
  \| [`Sketches`](../classes/Sketches.md)

#### Call Signature

```ts
sketchOnPlane(inputPlane?, origin?): 
  | SketchInterface
  | Sketches;
```

Defined in: [blueprints/lib.ts:161](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/lib.ts#L161)

##### Parameters

###### inputPlane?

[`PlaneName`](../type-aliases/PlaneName.md)

###### origin?

`number` | [`Point`](../type-aliases/Point.md)

##### Returns

  \| [`SketchInterface`](SketchInterface.md)
  \| [`Sketches`](../classes/Sketches.md)

#### Call Signature

```ts
sketchOnPlane(inputPlane?, origin?): 
  | SketchInterface
  | Sketches;
```

Defined in: [blueprints/lib.ts:165](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/lib.ts#L165)

##### Parameters

###### inputPlane?

[`Plane`](../classes/Plane.md) | [`PlaneName`](../type-aliases/PlaneName.md)

###### origin?

`number` | [`Point`](../type-aliases/Point.md)

##### Returns

  \| [`SketchInterface`](SketchInterface.md)
  \| [`Sketches`](../classes/Sketches.md)

***

### stretch()

```ts
stretch(
   ratio, 
   direction, 
   origin): DrawingInterface;
```

Defined in: [blueprints/lib.ts:139](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/lib.ts#L139)

#### Parameters

##### ratio

`number`

##### direction

[`Point2D`](../type-aliases/Point2D.md)

##### origin

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`DrawingInterface`

***

### toSVG()

```ts
toSVG(margin): string;
```

Defined in: [blueprints/lib.ts:187](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/lib.ts#L187)

Formats the drawing as an SVG image

#### Parameters

##### margin

`number`

#### Returns

`string`

***

### toSVGPaths()

```ts
toSVGPaths(): string[] | string[][];
```

Defined in: [blueprints/lib.ts:197](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/lib.ts#L197)

Formats the drawing as a list of SVG paths

#### Returns

`string`[] \| `string`[][]

***

### toSVGViewBox()

```ts
toSVGViewBox(margin?): string;
```

Defined in: [blueprints/lib.ts:192](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/lib.ts#L192)

Returns the SVG viewbox that corresponds to this drawing

#### Parameters

##### margin?

`number`

#### Returns

`string`

***

### translate()

#### Call Signature

```ts
translate(xDist, yDist): DrawingInterface;
```

Defined in: [blueprints/lib.ts:143](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/lib.ts#L143)

##### Parameters

###### xDist

`number`

###### yDist

`number`

##### Returns

`DrawingInterface`

#### Call Signature

```ts
translate(translationVector): DrawingInterface;
```

Defined in: [blueprints/lib.ts:144](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/lib.ts#L144)

##### Parameters

###### translationVector

[`Point2D`](../type-aliases/Point2D.md)

##### Returns

`DrawingInterface`
