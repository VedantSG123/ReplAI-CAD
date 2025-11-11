# Interface: SketchInterface

Defined in: [sketches/lib.ts:6](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/lib.ts#L6)

## Methods

### extrude()

```ts
extrude(extrusionDistance, extrusionConfig?): Shape3D;
```

Defined in: [sketches/lib.ts:29](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/lib.ts#L29)

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

##### extrusionConfig?

###### extrusionDirection?

[`Point`](../type-aliases/Point.md)

###### extrusionProfile?

[`ExtrusionProfile`](ExtrusionProfile.md)

###### origin?

[`Point`](../type-aliases/Point.md)

###### twistAngle?

`number`

#### Returns

[`Shape3D`](../type-aliases/Shape3D.md)

***

### face()

```ts
face(): Face;
```

Defined in: [sketches/lib.ts:10](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/lib.ts#L10)

Transforms the lines into a face. The lines should be closed.

#### Returns

[`Face`](../classes/Face.md)

***

### loftWith()

```ts
loftWith(
   otherSketches, 
   loftConfig, 
   returnShell?): Shape3D;
```

Defined in: [sketches/lib.ts:49](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/lib.ts#L49)

Loft between this sketch and another sketch (or an array of them)

You can also define a `startPoint` for the loft (that will be placed
before this sketch) and an `endPoint` after the last one.

You can also define if you want the loft to result in a ruled surface.

Note that all sketches will be deleted by this operation

#### Parameters

##### otherSketches

`SketchInterface` | `SketchInterface`[]

##### loftConfig

[`LoftConfig`](LoftConfig.md)

##### returnShell?

`boolean`

#### Returns

[`Shape3D`](../type-aliases/Shape3D.md)

***

### revolve()

```ts
revolve(revolutionAxis?, config?): Shape3D;
```

Defined in: [sketches/lib.ts:16](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/sketches/lib.ts#L16)

Revolves the drawing on an axis (defined by its direction and an origin
(defaults to the sketch origin)

#### Parameters

##### revolutionAxis?

[`Point`](../type-aliases/Point.md)

##### config?

###### origin?

[`Point`](../type-aliases/Point.md)

#### Returns

[`Shape3D`](../type-aliases/Shape3D.md)
