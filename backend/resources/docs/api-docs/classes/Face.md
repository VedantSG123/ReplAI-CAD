# Class: Face

Defined in: [shapes.ts:836](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L836)

## Extends

- [`Shape`](Shape.md)\<`TopoDS_Face`\>

## Constructors

### Constructor

```ts
new Face(ocShape): Face;
```

Defined in: [shapes.ts:212](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L212)

#### Parameters

##### ocShape

`TopoDS_Face`

#### Returns

`Face`

#### Inherited from

[`Shape`](Shape.md).[`constructor`](Shape.md#constructor)

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

[`Shape`](Shape.md).[`boundingBox`](Shape.md#boundingbox)

***

### center

#### Get Signature

```ts
get center(): Vector;
```

Defined in: [shapes.ts:931](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L931)

##### Returns

[`Vector`](Vector.md)

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

[`Shape`](Shape.md).[`edges`](Shape.md#edges)

***

### faces

#### Get Signature

```ts
get faces(): Face[];
```

Defined in: [shapes.ts:377](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L377)

##### Returns

`Face`[]

#### Inherited from

[`Shape`](Shape.md).[`faces`](Shape.md#faces)

***

### geomType

#### Get Signature

```ts
get geomType(): SurfaceType;
```

Defined in: [shapes.ts:851](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L851)

##### Returns

[`SurfaceType`](../type-aliases/SurfaceType.md)

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

[`Shape`](Shape.md).[`hashCode`](Shape.md#hashcode)

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

[`Shape`](Shape.md).[`isNull`](Shape.md#isnull)

***

### orientation

#### Get Signature

```ts
get orientation(): "forward" | "backward";
```

Defined in: [shapes.ts:845](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L845)

##### Returns

`"forward"` \| `"backward"`

***

### surface

#### Get Signature

```ts
get surface(): Surface;
```

Defined in: [shapes.ts:841](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L841)

##### Returns

[`Surface`](Surface.md)

***

### UVBounds

#### Get Signature

```ts
get UVBounds(): object;
```

Defined in: [shapes.ts:858](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L858)

##### Returns

`object`

###### uMax

```ts
uMax: number;
```

###### uMin

```ts
uMin: number;
```

###### vMax

```ts
vMax: number;
```

###### vMin

```ts
vMin: number;
```

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

[`Shape`](Shape.md).[`wires`](Shape.md#wires)

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

[`Shape`](Shape.md).[`wrapped`](Shape.md#wrapped)

***

### clone()

```ts
clone(): this;
```

Defined in: [shapes.ts:216](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L216)

#### Returns

`this`

#### Inherited from

[`Shape`](Shape.md).[`clone`](Shape.md#clone)

***

### delete()

```ts
delete(): void;
```

Defined in: [register.ts:54](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/register.ts#L54)

#### Returns

`void`

#### Inherited from

[`Shape`](Shape.md).[`delete`](Shape.md#delete)

***

### innerWires()

```ts
innerWires(): Wire[];
```

Defined in: [shapes.ts:946](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L946)

#### Returns

[`Wire`](Wire.md)[]

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

[`Shape`](Shape.md).[`isEqual`](Shape.md#isequal)

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

[`Shape`](Shape.md).[`isSame`](Shape.md#issame)

***

### normalAt()

```ts
normalAt(locationVector?): Vector;
```

Defined in: [shapes.ts:891](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L891)

#### Parameters

##### locationVector?

[`Point`](../type-aliases/Point.md)

#### Returns

[`Vector`](Vector.md)

***

### outerWire()

```ts
outerWire(): Wire;
```

Defined in: [shapes.ts:940](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L940)

#### Returns

[`Wire`](Wire.md)

***

### pointOnSurface()

```ts
pointOnSurface(u, v): Vector;
```

Defined in: [shapes.ts:875](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L875)

#### Parameters

##### u

`number`

##### v

`number`

#### Returns

[`Vector`](Vector.md)

***

### serialize()

```ts
serialize(): string;
```

Defined in: [shapes.ts:220](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L220)

#### Returns

`string`

#### Inherited from

[`Shape`](Shape.md).[`serialize`](Shape.md#serialize)

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

[`Shape`](Shape.md).[`simplify`](Shape.md#simplify)

***

### triangulation()

```ts
triangulation(index0): null | FaceTriangulation;
```

Defined in: [shapes.ts:957](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L957)

#### Parameters

##### index0

`number` = `0`

#### Returns

`null` \| [`FaceTriangulation`](../interfaces/FaceTriangulation.md)

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

[`Shape`](Shape.md).[`blobSTEP`](Shape.md#blobstep)

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

[`Shape`](Shape.md).[`blobSTL`](Shape.md#blobstl)

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

[`Shape`](Shape.md).[`mesh`](Shape.md#mesh)

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

[`Shape`](Shape.md).[`meshEdges`](Shape.md#meshedges)

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

[`Shape`](Shape.md).[`mirror`](Shape.md#mirror)

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

[`Shape`](Shape.md).[`rotate`](Shape.md#rotate)

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

[`Shape`](Shape.md).[`scale`](Shape.md#scale)

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

[`Shape`](Shape.md).[`translate`](Shape.md#translate)

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

[`Shape`](Shape.md).[`translate`](Shape.md#translate)

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

[`Shape`](Shape.md).[`translateX`](Shape.md#translatex)

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

[`Shape`](Shape.md).[`translateY`](Shape.md#translatey)

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

[`Shape`](Shape.md).[`translateZ`](Shape.md#translatez)
