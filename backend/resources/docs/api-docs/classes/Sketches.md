# Class: Sketches

Defined in: [sketches/Sketches.ts:9](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketches.ts#L9)

## Constructors

### Constructor

```ts
new Sketches(sketches): Sketches;
```

Defined in: [sketches/Sketches.ts:12](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketches.ts#L12)

#### Parameters

##### sketches

([`Sketch`](Sketch.md) \| [`CompoundSketch`](CompoundSketch.md))[]

#### Returns

`Sketches`

## Properties

### sketches

```ts
sketches: (Sketch | CompoundSketch)[];
```

Defined in: [sketches/Sketches.ts:10](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketches.ts#L10)

## Methods

### extrude()

```ts
extrude(extrusionDistance, extrusionConfig): AnyShape;
```

Defined in: [sketches/Sketches.ts:38](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketches.ts#L38)

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

##### extrusionConfig

###### extrusionDirection?

[`Point`](../type-aliases/Point.md)

###### extrusionProfile?

[`ExtrusionProfile`](../interfaces/ExtrusionProfile.md)

###### origin?

[`Point`](../type-aliases/Point.md)

###### twistAngle?

`number`

#### Returns

[`AnyShape`](../type-aliases/AnyShape.md)

***

### faces()

```ts
faces(): AnyShape;
```

Defined in: [sketches/Sketches.ts:23](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketches.ts#L23)

#### Returns

[`AnyShape`](../type-aliases/AnyShape.md)

***

### revolve()

```ts
revolve(revolutionAxis?, config?): AnyShape;
```

Defined in: [sketches/Sketches.ts:58](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketches.ts#L58)

Revolves the drawing on an axis (defined by its direction and an origin
(defaults to the sketch origin)

#### Parameters

##### revolutionAxis?

[`Point`](../type-aliases/Point.md)

##### config?

###### origin?

[`Point`](../type-aliases/Point.md)

#### Returns

[`AnyShape`](../type-aliases/AnyShape.md)

***

### wires()

```ts
wires(): AnyShape;
```

Defined in: [sketches/Sketches.ts:16](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/Sketches.ts#L16)

#### Returns

[`AnyShape`](../type-aliases/AnyShape.md)
