# Class: CompoundSketch

Defined in: [sketches/CompoundSketch.ts:117](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/CompoundSketch.ts#L117)

A group of sketches that should correspond to a unique face (i.e. an outer
sketch, and multiple holes within this sketch.

All the sketches should share the same base face (or surface)

Ideally generated from a `CompoundBlueprint`

## Implements

- [`SketchInterface`](../interfaces/SketchInterface.md)

## Constructors

### Constructor

```ts
new CompoundSketch(sketches): CompoundSketch;
```

Defined in: [sketches/CompoundSketch.ts:119](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/CompoundSketch.ts#L119)

#### Parameters

##### sketches

[`Sketch`](Sketch.md)[]

#### Returns

`CompoundSketch`

## Properties

### sketches

```ts
sketches: Sketch[];
```

Defined in: [sketches/CompoundSketch.ts:118](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/CompoundSketch.ts#L118)

## Accessors

### innerSketches

#### Get Signature

```ts
get innerSketches(): Sketch[];
```

Defined in: [sketches/CompoundSketch.ts:131](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/CompoundSketch.ts#L131)

##### Returns

[`Sketch`](Sketch.md)[]

***

### outerSketch

#### Get Signature

```ts
get outerSketch(): Sketch;
```

Defined in: [sketches/CompoundSketch.ts:127](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/CompoundSketch.ts#L127)

##### Returns

[`Sketch`](Sketch.md)

***

### wires

#### Get Signature

```ts
get wires(): AnyShape;
```

Defined in: [sketches/CompoundSketch.ts:135](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/CompoundSketch.ts#L135)

##### Returns

[`AnyShape`](../type-aliases/AnyShape.md)

## Methods

### delete()

```ts
delete(): void;
```

Defined in: [sketches/CompoundSketch.ts:123](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/CompoundSketch.ts#L123)

#### Returns

`void`

***

### extrude()

```ts
extrude(extrusionDistance, __namedParameters): Shape3D;
```

Defined in: [sketches/CompoundSketch.ts:150](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/CompoundSketch.ts#L150)

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

Defined in: [sketches/CompoundSketch.ts:140](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/CompoundSketch.ts#L140)

Transforms the lines into a face. The lines should be closed.

#### Returns

[`Face`](Face.md)

#### Implementation of

[`SketchInterface`](../interfaces/SketchInterface.md).[`face`](../interfaces/SketchInterface.md#face)

***

### loftWith()

```ts
loftWith(otherCompound, loftConfig): Shape3D;
```

Defined in: [sketches/CompoundSketch.ts:218](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/CompoundSketch.ts#L218)

Loft between this sketch and another sketch (or an array of them)

You can also define a `startPoint` for the loft (that will be placed
before this sketch) and an `endPoint` after the last one.

You can also define if you want the loft to result in a ruled surface.

Note that all sketches will be deleted by this operation

#### Parameters

##### otherCompound

`this`

##### loftConfig

[`LoftConfig`](../interfaces/LoftConfig.md)

#### Returns

[`Shape3D`](../type-aliases/Shape3D.md)

#### Implementation of

[`SketchInterface`](../interfaces/SketchInterface.md).[`loftWith`](../interfaces/SketchInterface.md#loftwith)

***

### revolve()

```ts
revolve(revolutionAxis?, __namedParameters?): Shape3D;
```

Defined in: [sketches/CompoundSketch.ts:206](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/CompoundSketch.ts#L206)

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
