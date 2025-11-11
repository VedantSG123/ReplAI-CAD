# Class: Shape\<Type\>

Defined in: [shapes.ts:211](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L211)

## Extends

- [`WrappingObj`](WrappingObj.md)\<`Type`\>

## Extended by

- [`Vertex`](Vertex.md)
- [`_1DShape`](1DShape.md)
- [`Face`](Face.md)
- [`_3DShape`](3DShape.md)

## Type Parameters

### Type

`Type` *extends* `TopoDS_Shape`

## Constructors

### Constructor

```ts
new Shape<Type>(ocShape): Shape<Type>;
```

Defined in: [shapes.ts:212](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L212)

#### Parameters

##### ocShape

`Type`

#### Returns

`Shape`\<`Type`\>

#### Overrides

[`WrappingObj`](WrappingObj.md).[`constructor`](WrappingObj.md#constructor)

## Other

### boundingBox

#### Get Signature

```ts
get boundingBox(): BoundingBox;
```

Defined in: [shapes.ts:385](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L385)

##### Returns

[`BoundingBox`](BoundingBox.md)

***

### edges

#### Get Signature

```ts
get edges(): Edge[];
```

Defined in: [shapes.ts:373](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L373)

##### Returns

[`Edge`](Edge.md)[]

***

### faces

#### Get Signature

```ts
get faces(): Face[];
```

Defined in: [shapes.ts:377](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L377)

##### Returns

[`Face`](Face.md)[]

***

### hashCode

#### Get Signature

```ts
get hashCode(): number;
```

Defined in: [shapes.ts:225](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L225)

##### Returns

`number`

***

### isNull

#### Get Signature

```ts
get isNull(): boolean;
```

Defined in: [shapes.ts:229](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L229)

##### Returns

`boolean`

***

### wires

#### Get Signature

```ts
get wires(): Wire[];
```

Defined in: [shapes.ts:381](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L381)

##### Returns

[`Wire`](Wire.md)[]

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

[`WrappingObj`](WrappingObj.md).[`wrapped`](WrappingObj.md#wrapped)

***

### clone()

```ts
clone(): this;
```

Defined in: [shapes.ts:216](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L216)

#### Returns

`this`

***

### delete()

```ts
delete(): void;
```

Defined in: [register.ts:54](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/register.ts#L54)

#### Returns

`void`

#### Inherited from

[`WrappingObj`](WrappingObj.md).[`delete`](WrappingObj.md#delete)

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

***

### serialize()

```ts
serialize(): string;
```

Defined in: [shapes.ts:220](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L220)

#### Returns

`string`

***

### simplify()

```ts
simplify(): this;
```

Defined in: [shapes.ts:244](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L244)

Simplifies the shape by removing unnecessary edges and faces

#### Returns

`this`

## Shape Export

### blobSTEP()

```ts
blobSTEP(): Blob;
```

Defined in: [shapes.ts:561](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L561)

Exports the current shape as a STEP file as a Blob

#### Returns

`Blob`

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
