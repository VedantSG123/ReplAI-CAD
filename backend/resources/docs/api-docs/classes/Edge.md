# Class: Edge

Defined in: [shapes.ts:763](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L763)

## Extends

- [`_1DShape`](1DShape.md)\<`TopoDS_Edge`\>

## Constructors

### Constructor

```ts
new Edge(ocShape): Edge;
```

Defined in: [shapes.ts:212](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L212)

#### Parameters

##### ocShape

`TopoDS_Edge`

#### Returns

`Edge`

#### Inherited from

[`_1DShape`](1DShape.md).[`constructor`](1DShape.md#constructor)

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

[`_1DShape`](1DShape.md).[`boundingBox`](1DShape.md#boundingbox)

***

### curve

#### Get Signature

```ts
get curve(): Curve;
```

Defined in: [shapes.ts:645](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L645)

##### Returns

[`Curve`](Curve.md)

#### Inherited from

[`_1DShape`](1DShape.md).[`curve`](1DShape.md#curve)

***

### edges

#### Get Signature

```ts
get edges(): Edge[];
```

Defined in: [shapes.ts:373](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L373)

##### Returns

`Edge`[]

#### Inherited from

[`_1DShape`](1DShape.md).[`edges`](1DShape.md#edges)

***

### endPoint

#### Get Signature

```ts
get endPoint(): Vector;
```

Defined in: [shapes.ts:653](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L653)

##### Returns

[`Vector`](Vector.md)

#### Inherited from

[`_1DShape`](1DShape.md).[`endPoint`](1DShape.md#endpoint)

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

[`_1DShape`](1DShape.md).[`faces`](1DShape.md#faces)

***

### geomType

#### Get Signature

```ts
get geomType(): CurveType;
```

Defined in: [shapes.ts:677](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L677)

##### Returns

[`CurveType`](../type-aliases/CurveType.md)

#### Inherited from

[`_1DShape`](1DShape.md).[`geomType`](1DShape.md#geomtype)

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

[`_1DShape`](1DShape.md).[`hashCode`](1DShape.md#hashcode)

***

### isClosed

#### Get Signature

```ts
get isClosed(): boolean;
```

Defined in: [shapes.ts:665](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L665)

##### Returns

`boolean`

#### Inherited from

[`_1DShape`](1DShape.md).[`isClosed`](1DShape.md#isclosed)

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

[`_1DShape`](1DShape.md).[`isNull`](1DShape.md#isnull)

***

### isPeriodic

#### Get Signature

```ts
get isPeriodic(): boolean;
```

Defined in: [shapes.ts:669](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L669)

##### Returns

`boolean`

#### Inherited from

[`_1DShape`](1DShape.md).[`isPeriodic`](1DShape.md#isperiodic)

***

### length

#### Get Signature

```ts
get length(): number;
```

Defined in: [shapes.ts:681](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L681)

##### Returns

`number`

#### Inherited from

[`_1DShape`](1DShape.md).[`length`](1DShape.md#length)

***

### orientation

#### Get Signature

```ts
get orientation(): "forward" | "backward";
```

Defined in: [shapes.ts:690](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L690)

##### Returns

`"forward"` \| `"backward"`

#### Inherited from

[`_1DShape`](1DShape.md).[`orientation`](1DShape.md#orientation)

***

### period

#### Get Signature

```ts
get period(): number;
```

Defined in: [shapes.ts:673](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L673)

##### Returns

`number`

#### Inherited from

[`_1DShape`](1DShape.md).[`period`](1DShape.md#period)

***

### repr

#### Get Signature

```ts
get repr(): string;
```

Defined in: [shapes.ts:637](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L637)

##### Returns

`string`

#### Inherited from

[`_1DShape`](1DShape.md).[`repr`](1DShape.md#repr)

***

### startPoint

#### Get Signature

```ts
get startPoint(): Vector;
```

Defined in: [shapes.ts:649](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L649)

##### Returns

[`Vector`](Vector.md)

#### Inherited from

[`_1DShape`](1DShape.md).[`startPoint`](1DShape.md#startpoint)

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

[`_1DShape`](1DShape.md).[`wires`](1DShape.md#wires)

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

[`_1DShape`](1DShape.md).[`wrapped`](1DShape.md#wrapped)

***

### clone()

```ts
clone(): this;
```

Defined in: [shapes.ts:216](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L216)

#### Returns

`this`

#### Inherited from

[`_1DShape`](1DShape.md).[`clone`](1DShape.md#clone)

***

### delete()

```ts
delete(): void;
```

Defined in: [register.ts:54](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/register.ts#L54)

#### Returns

`void`

#### Inherited from

[`_1DShape`](1DShape.md).[`delete`](1DShape.md#delete)

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

[`_1DShape`](1DShape.md).[`isEqual`](1DShape.md#isequal)

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

[`_1DShape`](1DShape.md).[`isSame`](1DShape.md#issame)

***

### pointAt()

```ts
pointAt(position): Vector;
```

Defined in: [shapes.ts:661](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L661)

#### Parameters

##### position

`number` = `0`

#### Returns

[`Vector`](Vector.md)

#### Inherited from

[`_1DShape`](1DShape.md).[`pointAt`](1DShape.md#pointat)

***

### serialize()

```ts
serialize(): string;
```

Defined in: [shapes.ts:220](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L220)

#### Returns

`string`

#### Inherited from

[`_1DShape`](1DShape.md).[`serialize`](1DShape.md#serialize)

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

[`_1DShape`](1DShape.md).[`simplify`](1DShape.md#simplify)

***

### tangentAt()

```ts
tangentAt(position): Vector;
```

Defined in: [shapes.ts:657](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L657)

#### Parameters

##### position

`number` = `0`

#### Returns

[`Vector`](Vector.md)

#### Inherited from

[`_1DShape`](1DShape.md).[`tangentAt`](1DShape.md#tangentat)

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

[`_1DShape`](1DShape.md).[`blobSTEP`](1DShape.md#blobstep)

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

[`_1DShape`](1DShape.md).[`blobSTL`](1DShape.md#blobstl)

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

[`_1DShape`](1DShape.md).[`mesh`](1DShape.md#mesh)

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

[`_1DShape`](1DShape.md).[`meshEdges`](1DShape.md#meshedges)

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

[`_1DShape`](1DShape.md).[`mirror`](1DShape.md#mirror)

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

[`_1DShape`](1DShape.md).[`rotate`](1DShape.md#rotate)

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

[`_1DShape`](1DShape.md).[`scale`](1DShape.md#scale)

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

[`_1DShape`](1DShape.md).[`translate`](1DShape.md#translate)

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

[`_1DShape`](1DShape.md).[`translate`](1DShape.md#translate)

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

[`_1DShape`](1DShape.md).[`translateX`](1DShape.md#translatex)

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

[`_1DShape`](1DShape.md).[`translateY`](1DShape.md#translatey)

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

[`_1DShape`](1DShape.md).[`translateZ`](1DShape.md#translatez)
