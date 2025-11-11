# Class: Shell

Defined in: [shapes.ts:1355](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L1355)

## Extends

- [`_3DShape`](3DShape.md)\<`TopoDS_Shell`\>

## Constructors

### Constructor

```ts
new Shell(ocShape): Shell;
```

Defined in: [shapes.ts:212](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L212)

#### Parameters

##### ocShape

`TopoDS_Shell`

#### Returns

`Shell`

#### Inherited from

[`_3DShape`](3DShape.md).[`constructor`](3DShape.md#constructor)

## Other

### boundingBox

#### Get Signature

```ts
get boundingBox(): BoundingBox;
```

Defined in: [shapes.ts:385](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L385)

##### Returns

[`BoundingBox`](BoundingBox.md)

#### Inherited from

[`_3DShape`](3DShape.md).[`boundingBox`](3DShape.md#boundingbox)

***

### edges

#### Get Signature

```ts
get edges(): Edge[];
```

Defined in: [shapes.ts:373](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L373)

##### Returns

[`Edge`](Edge.md)[]

#### Inherited from

[`_3DShape`](3DShape.md).[`edges`](3DShape.md#edges)

***

### faces

#### Get Signature

```ts
get faces(): Face[];
```

Defined in: [shapes.ts:377](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L377)

##### Returns

[`Face`](Face.md)[]

#### Inherited from

[`_3DShape`](3DShape.md).[`faces`](3DShape.md#faces)

***

### hashCode

#### Get Signature

```ts
get hashCode(): number;
```

Defined in: [shapes.ts:225](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L225)

##### Returns

`number`

#### Inherited from

[`_3DShape`](3DShape.md).[`hashCode`](3DShape.md#hashcode)

***

### isNull

#### Get Signature

```ts
get isNull(): boolean;
```

Defined in: [shapes.ts:229](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L229)

##### Returns

`boolean`

#### Inherited from

[`_3DShape`](3DShape.md).[`isNull`](3DShape.md#isnull)

***

### wires

#### Get Signature

```ts
get wires(): Wire[];
```

Defined in: [shapes.ts:381](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L381)

##### Returns

[`Wire`](Wire.md)[]

#### Inherited from

[`_3DShape`](3DShape.md).[`wires`](3DShape.md#wires)

***

### wrapped

#### Get Signature

```ts
get wrapped(): Type;
```

Defined in: [register.ts:39](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/register.ts#L39)

##### Returns

`Type`

#### Set Signature

```ts
set wrapped(newWrapped): void;
```

Defined in: [register.ts:44](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/register.ts#L44)

##### Parameters

###### newWrapped

`Type`

##### Returns

`void`

#### Inherited from

[`_3DShape`](3DShape.md).[`wrapped`](3DShape.md#wrapped)

***

### clone()

```ts
clone(): this;
```

Defined in: [shapes.ts:216](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L216)

#### Returns

`this`

#### Inherited from

[`_3DShape`](3DShape.md).[`clone`](3DShape.md#clone)

***

### delete()

```ts
delete(): void;
```

Defined in: [register.ts:54](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/register.ts#L54)

#### Returns

`void`

#### Inherited from

[`_3DShape`](3DShape.md).[`delete`](3DShape.md#delete)

***

### isEqual()

```ts
isEqual(other): boolean;
```

Defined in: [shapes.ts:237](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L237)

#### Parameters

##### other

[`AnyShape`](../type-aliases/AnyShape.md)

#### Returns

`boolean`

#### Inherited from

[`_3DShape`](3DShape.md).[`isEqual`](3DShape.md#isequal)

***

### isSame()

```ts
isSame(other): boolean;
```

Defined in: [shapes.ts:233](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L233)

#### Parameters

##### other

[`AnyShape`](../type-aliases/AnyShape.md)

#### Returns

`boolean`

#### Inherited from

[`_3DShape`](3DShape.md).[`isSame`](3DShape.md#issame)

***

### serialize()

```ts
serialize(): string;
```

Defined in: [shapes.ts:220](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L220)

#### Returns

`string`

#### Inherited from

[`_3DShape`](3DShape.md).[`serialize`](3DShape.md#serialize)

***

### simplify()

```ts
simplify(): this;
```

Defined in: [shapes.ts:244](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L244)

Simplifies the shape by removing unnecessary edges and faces

#### Returns

`this`

#### Inherited from

[`_3DShape`](3DShape.md).[`simplify`](3DShape.md#simplify)

## Shape Export

### blobSTEP()

```ts
blobSTEP(): Blob;
```

Defined in: [shapes.ts:561](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L561)

Exports the current shape as a STEP file as a Blob

#### Returns

`Blob`

#### Inherited from

[`_3DShape`](3DShape.md).[`blobSTEP`](3DShape.md#blobstep)

***

### blobSTL()

```ts
blobSTL(__namedParameters): Blob;
```

Defined in: [shapes.ts:603](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L603)

Exports the current shape as a STL file as a Blob

In order to create a STL file, the shape needs to be meshed. The
tolerances correspond to the values used to mesh the shape.

#### Parameters

##### \_\_namedParameters

###### angularTolerance?

`number` = `0.1`

###### binary?

`boolean` = `false`

###### tolerance?

`number` = `1e-3`

#### Returns

`Blob`

#### Inherited from

[`_3DShape`](3DShape.md).[`blobSTL`](3DShape.md#blobstl)

***

### mesh()

```ts
mesh(__namedParameters): ShapeMesh;
```

Defined in: [shapes.ts:407](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L407)

Exports the current shape as a set of triangle. These can be used by threejs
for instance to represent the the shape

#### Parameters

##### \_\_namedParameters

###### angularTolerance?

`number` = `0.1`

###### tolerance?

`number` = `1e-3`

#### Returns

[`ShapeMesh`](../interfaces/ShapeMesh.md)

#### Inherited from

[`_3DShape`](3DShape.md).[`mesh`](3DShape.md#mesh)

***

### meshEdges()

```ts
meshEdges(__namedParameters): object;
```

Defined in: [shapes.ts:444](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L444)

Exports the current shape as a set of lines. These can be used by threejs
for instance to represent the edges of the shape

#### Parameters

##### \_\_namedParameters

###### angularTolerance?

`number` = `0.1`

###### tolerance?

`number` = `1e-3`

#### Returns

`object`

##### edgeGroups

```ts
edgeGroups: object[];
```

##### lines

```ts
lines: number[];
```

#### Inherited from

[`_3DShape`](3DShape.md).[`meshEdges`](3DShape.md#meshedges)

## Shape Modifications

### chamfer()

```ts
chamfer(radiusConfig, filter?): Shape3D;
```

Defined in: [shapes.ts:1299](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L1299)

Creates a new shapes with some edges chamfered, as specified in the
radius config.

If the radius is a filter finder object (with an EdgeFinder as filter,
and a radius to specifiy the chamfer radius), the fillet will only be
applied to the edges as selected by the finder. The finder will be
deleted unless it is explicitly specified to `keep` it.

If the radius is a number all the edges will be chamfered.

If the radius is a function edges will be chamfered according to the
value returned by the function (0 or null will not add any chamfer).

#### Parameters

##### radiusConfig

[`RadiusConfig`](../type-aliases/RadiusConfig.md)\<[`ChamferRadius`](../type-aliases/ChamferRadius.md)\>

##### filter?

(`e`) => [`EdgeFinder`](EdgeFinder.md)

#### Returns

[`Shape3D`](../type-aliases/Shape3D.md)

#### Inherited from

[`_3DShape`](3DShape.md).[`chamfer`](3DShape.md#chamfer)

***

### cut()

```ts
cut(tool, __namedParameters): Shape3D;
```

Defined in: [shapes.ts:1068](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L1068)

Builds a new shape by removing the tool tape from this shape

#### Parameters

##### tool

[`Shape3D`](../type-aliases/Shape3D.md)

##### \_\_namedParameters

###### optimisation?

`"none"` \| `"commonFace"` \| `"sameFace"` = `"none"`

#### Returns

[`Shape3D`](../type-aliases/Shape3D.md)

#### Inherited from

[`_3DShape`](3DShape.md).[`cut`](3DShape.md#cut)

***

### fillet()

```ts
fillet(radiusConfig, filter?): Shape3D;
```

Defined in: [shapes.ts:1246](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L1246)

Creates a new shapes with some edges filletted, as specified in the
radius config.

If the radius is a filter finder object (with an EdgeFinder as filter,
and a radius to specifiy the fillet radius), the fillet will only be
applied to the edges as selected by the finder. The finder will be
deleted unless it is explicitly specified to `keep` it.

If the radius is a number all the edges will be filletted.

If the radius is a function edges will be filletted according to the
value returned by the function (0 or null will not add any fillet).

#### Parameters

##### radiusConfig

[`RadiusConfig`](../type-aliases/RadiusConfig.md)\<[`FilletRadius`](../type-aliases/FilletRadius.md)\>

##### filter?

(`e`) => [`EdgeFinder`](EdgeFinder.md)

#### Returns

[`Shape3D`](../type-aliases/Shape3D.md)

#### Inherited from

[`_3DShape`](3DShape.md).[`fillet`](3DShape.md#fillet)

***

### fuse()

```ts
fuse(other, __namedParameters): Shape3D;
```

Defined in: [shapes.ts:1037](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L1037)

Builds a new shape out of the two, fused, shapes

#### Parameters

##### other

[`Shape3D`](../type-aliases/Shape3D.md)

##### \_\_namedParameters

###### optimisation?

`"none"` \| `"commonFace"` \| `"sameFace"` = `"none"`

#### Returns

[`Shape3D`](../type-aliases/Shape3D.md)

#### Inherited from

[`_3DShape`](3DShape.md).[`fuse`](3DShape.md#fuse)

***

### intersect()

```ts
intersect(tool): AnyShape;
```

Defined in: [shapes.ts:1098](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L1098)

Builds a new shape by intersecting this shape and another

#### Parameters

##### tool

[`AnyShape`](../type-aliases/AnyShape.md)

#### Returns

[`AnyShape`](../type-aliases/AnyShape.md)

#### Inherited from

[`_3DShape`](3DShape.md).[`intersect`](3DShape.md#intersect)

***

### shell()

#### Call Signature

```ts
shell(config, tolerance?): Shape3D;
```

Defined in: [shapes.ts:1119](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L1119)

Hollows out the current shape, removing the faces found by the `filter` and
keeping a border of `thickness`

##### Parameters

###### config

###### filter

[`FaceFinder`](FaceFinder.md)

###### thickness

`number`

###### tolerance?

`number`

##### Returns

[`Shape3D`](../type-aliases/Shape3D.md)

##### Inherited from

[`_3DShape`](3DShape.md).[`shell`](3DShape.md#shell)

#### Call Signature

```ts
shell(
   thickness, 
   finderFcn, 
   tolerance?): Shape3D;
```

Defined in: [shapes.ts:1123](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L1123)

Hollows out the current shape, removing the faces found by the `filter` and
keeping a border of `thickness`

##### Parameters

###### thickness

`number`

###### finderFcn

(`f`) => [`FaceFinder`](FaceFinder.md)

###### tolerance?

`number`

##### Returns

[`Shape3D`](../type-aliases/Shape3D.md)

##### Inherited from

[`_3DShape`](3DShape.md).[`shell`](3DShape.md#shell)

## Shape Transformations

### mirror()

```ts
mirror(inputPlane?, origin?): this;
```

Defined in: [shapes.ts:336](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L336)

Mirrors the shape through a plane

#### Parameters

##### inputPlane?

[`Point`](../type-aliases/Point.md) | [`Plane`](Plane.md) | [`PlaneName`](../type-aliases/PlaneName.md)

##### origin?

[`Point`](../type-aliases/Point.md)

#### Returns

`this`

#### Inherited from

[`_3DShape`](3DShape.md).[`mirror`](3DShape.md#mirror)

***

### rotate()

```ts
rotate(
   angle, 
   position, 
   direction): this;
```

Defined in: [shapes.ts:317](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L317)

Rotates the shape

#### Parameters

##### angle

`number`

##### position

[`Point`](../type-aliases/Point.md) = `...`

##### direction

[`Point`](../type-aliases/Point.md) = `...`

#### Returns

`this`

#### Inherited from

[`_3DShape`](3DShape.md).[`rotate`](3DShape.md#rotate)

***

### scale()

```ts
scale(scale, center): this;
```

Defined in: [shapes.ts:352](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L352)

Returns a scaled version of the shape

#### Parameters

##### scale

`number`

##### center

[`Point`](../type-aliases/Point.md) = `...`

#### Returns

`this`

#### Inherited from

[`_3DShape`](3DShape.md).[`scale`](3DShape.md#scale)

***

### translate()

#### Call Signature

```ts
translate(
   xDist, 
   yDist, 
   zDist): this;
```

Defined in: [shapes.ts:268](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L268)

Translates the shape of an arbitrary vector

##### Parameters

###### xDist

`number`

###### yDist

`number`

###### zDist

`number`

##### Returns

`this`

##### Inherited from

[`_3DShape`](3DShape.md).[`translate`](3DShape.md#translate)

#### Call Signature

```ts
translate(vector): this;
```

Defined in: [shapes.ts:269](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L269)

Translates the shape of an arbitrary vector

##### Parameters

###### vector

[`Point`](../type-aliases/Point.md)

##### Returns

`this`

##### Inherited from

[`_3DShape`](3DShape.md).[`translate`](3DShape.md#translate)

***

### translateX()

```ts
translateX(distance): this;
```

Defined in: [shapes.ts:290](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L290)

Translates the shape on the X axis

#### Parameters

##### distance

`number`

#### Returns

`this`

#### Inherited from

[`_3DShape`](3DShape.md).[`translateX`](3DShape.md#translatex)

***

### translateY()

```ts
translateY(distance): this;
```

Defined in: [shapes.ts:299](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L299)

Translates the shape on the Y axis

#### Parameters

##### distance

`number`

#### Returns

`this`

#### Inherited from

[`_3DShape`](3DShape.md).[`translateY`](3DShape.md#translatey)

***

### translateZ()

```ts
translateZ(distance): this;
```

Defined in: [shapes.ts:308](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L308)

Translates the shape on the Z axis

#### Parameters

##### distance

`number`

#### Returns

`this`

#### Inherited from

[`_3DShape`](3DShape.md).[`translateZ`](3DShape.md#translatez)
