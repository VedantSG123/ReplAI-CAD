# Class: Sketch

Defined in: [sketches/Sketch.ts:26](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketch.ts#L26)

A line drawing to be acted upon. It defines directions to be acted upon by
definition (extrusion direction for instance).

Note that all operations will delete the sketch

## Implements

- [`SketchInterface`](../interfaces/SketchInterface.md)

## Constructors

### Constructor

```ts
new Sketch(wire, __namedParameters): Sketch;
```

Defined in: [sketches/Sketch.ts:39](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketch.ts#L39)

#### Parameters

##### wire

[`Wire`](Wire.md)

##### \_\_namedParameters

###### defaultDirection?

[`Point`](../type-aliases/Point.md) = `...`

###### defaultOrigin?

[`Point`](../type-aliases/Point.md) = `...`

#### Returns

`Sketch`

## Properties

### wire

```ts
wire: Wire;
```

Defined in: [sketches/Sketch.ts:27](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketch.ts#L27)

## Accessors

### baseFace

#### Get Signature

```ts
get baseFace(): undefined | null | Face;
```

Defined in: [sketches/Sketch.ts:55](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketch.ts#L55)

##### Returns

`undefined` \| `null` \| [`Face`](Face.md)

#### Set Signature

```ts
set baseFace(newFace): void;
```

Defined in: [sketches/Sketch.ts:59](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketch.ts#L59)

##### Parameters

###### newFace

`undefined` | `null` | [`Face`](Face.md)

##### Returns

`void`

***

### defaultDirection

#### Get Signature

```ts
get defaultDirection(): Vector;
```

Defined in: [sketches/Sketch.ts:88](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketch.ts#L88)

##### Returns

[`Vector`](Vector.md)

#### Set Signature

```ts
set defaultDirection(newDirection): void;
```

Defined in: [sketches/Sketch.ts:92](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketch.ts#L92)

##### Parameters

###### newDirection

[`Point`](../type-aliases/Point.md)

##### Returns

`void`

***

### defaultOrigin

#### Get Signature

```ts
get defaultOrigin(): Vector;
```

Defined in: [sketches/Sketch.ts:80](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketch.ts#L80)

##### Returns

[`Vector`](Vector.md)

#### Set Signature

```ts
set defaultOrigin(newOrigin): void;
```

Defined in: [sketches/Sketch.ts:84](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketch.ts#L84)

##### Parameters

###### newOrigin

[`Point`](../type-aliases/Point.md)

##### Returns

`void`

## Methods

### clone()

```ts
clone(): Sketch;
```

Defined in: [sketches/Sketch.ts:71](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketch.ts#L71)

#### Returns

`Sketch`

***

### delete()

```ts
delete(): void;
```

Defined in: [sketches/Sketch.ts:64](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketch.ts#L64)

#### Returns

`void`

***

### extrude()

```ts
extrude(extrusionDistance, __namedParameters): Shape3D;
```

Defined in: [sketches/Sketch.ts:146](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketch.ts#L146)

Extrudes the sketch to a certain distance.(along the default direction
and origin of the sketch).

You can define another extrusion direction or origin,

It is also possible to twist extrude with an angle (in degrees), or to
give a profile to the extrusion (the endFactor will scale the face, and
the profile will define how the scale is applied (either linarly or with
a s-shape).

#### Parameters

##### extrusionDistance

`number`

##### \_\_namedParameters

###### extrusionDirection?

[`Point`](../type-aliases/Point.md)

###### extrusionProfile?

[`ExtrusionProfile`](../interfaces/ExtrusionProfile.md)

###### origin?

[`Point`](../type-aliases/Point.md)

###### twistAngle?

`number`

#### Returns

[`Shape3D`](../type-aliases/Shape3D.md)

#### Implementation of

[`SketchInterface`](../interfaces/SketchInterface.md).[`extrude`](../interfaces/SketchInterface.md#extrude)

***

### face()

```ts
face(): Face;
```

Defined in: [sketches/Sketch.ts:99](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketch.ts#L99)

Transforms the lines into a face. The lines should be closed.

#### Returns

[`Face`](Face.md)

#### Implementation of

[`SketchInterface`](../interfaces/SketchInterface.md).[`face`](../interfaces/SketchInterface.md#face)

***

### faces()

```ts
faces(): Face;
```

Defined in: [sketches/Sketch.ts:113](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketch.ts#L113)

#### Returns

[`Face`](Face.md)

***

### loftWith()

```ts
loftWith(
   otherSketches, 
   loftConfig, 
   returnShell): Shape3D;
```

Defined in: [sketches/Sketch.ts:243](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketch.ts#L243)

Loft between this sketch and another sketch (or an array of them)

You can also define a `startPoint` for the loft (that will be placed
before this sketch) and an `endPoint` after the last one.

You can also define if you want the loft to result in a ruled surface.

Note that all sketches will be deleted by this operation

#### Parameters

##### otherSketches

`Sketch` | `Sketch`[]

##### loftConfig

[`LoftConfig`](../interfaces/LoftConfig.md) = `{}`

##### returnShell

`boolean` = `false`

#### Returns

[`Shape3D`](../type-aliases/Shape3D.md)

#### Implementation of

[`SketchInterface`](../interfaces/SketchInterface.md).[`loftWith`](../interfaces/SketchInterface.md#loftwith)

***

### revolve()

```ts
revolve(revolutionAxis?, __namedParameters?): Shape3D;
```

Defined in: [sketches/Sketch.ts:121](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketch.ts#L121)

Revolves the drawing on an axis (defined by its direction and an origin
(defaults to the sketch origin)

#### Parameters

##### revolutionAxis?

[`Point`](../type-aliases/Point.md)

##### \_\_namedParameters?

###### origin?

[`Point`](../type-aliases/Point.md)

#### Returns

[`Shape3D`](../type-aliases/Shape3D.md)

#### Implementation of

[`SketchInterface`](../interfaces/SketchInterface.md).[`revolve`](../interfaces/SketchInterface.md#revolve)

***

### sweepSketch()

```ts
sweepSketch(sketchOnPlane, sweepConfig): Shape3D;
```

Defined in: [sketches/Sketch.ts:208](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketch.ts#L208)

Sweep along this sketch another sketch defined in the function
`sketchOnPlane`.

TODO: clean the interface of the sweep config to make it more
understandable.

#### Parameters

##### sketchOnPlane

(`plane`, `origin`) => `this`

##### sweepConfig

[`GenericSweepConfig`](../interfaces/GenericSweepConfig.md) = `{}`

#### Returns

[`Shape3D`](../type-aliases/Shape3D.md)

***

### wires()

```ts
wires(): Wire;
```

Defined in: [sketches/Sketch.ts:109](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketch.ts#L109)

#### Returns

[`Wire`](Wire.md)
