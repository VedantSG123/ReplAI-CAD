# Class: Curve2D

Defined in: [lib2d/Curve2D.ts:25](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/Curve2D.ts#L25)

## Extends

- [`WrappingObj`](WrappingObj.md)\<`Handle_Geom2d_Curve`\>

## Constructors

### Constructor

```ts
new Curve2D(handle): Curve2D;
```

Defined in: [lib2d/Curve2D.ts:27](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/Curve2D.ts#L27)

#### Parameters

##### handle

`Handle_Geom2d_Curve`

#### Returns

`Curve2D`

#### Overrides

[`WrappingObj`](WrappingObj.md).[`constructor`](WrappingObj.md#constructor)

## Properties

### \_boundingBox

```ts
_boundingBox: null | BoundingBox2d;
```

Defined in: [lib2d/Curve2D.ts:26](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/Curve2D.ts#L26)

## Accessors

### boundingBox

#### Get Signature

```ts
get boundingBox(): BoundingBox2d;
```

Defined in: [lib2d/Curve2D.ts:36](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/Curve2D.ts#L36)

##### Returns

[`BoundingBox2d`](BoundingBox2d.md)

***

### firstParameter

#### Get Signature

```ts
get firstParameter(): number;
```

Defined in: [lib2d/Curve2D.ts:77](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/Curve2D.ts#L77)

##### Returns

`number`

***

### firstPoint

#### Get Signature

```ts
get firstPoint(): Point2D;
```

Defined in: [lib2d/Curve2D.ts:69](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/Curve2D.ts#L69)

##### Returns

[`Point2D`](../type-aliases/Point2D.md)

***

### geomType

#### Get Signature

```ts
get geomType(): CurveType;
```

Defined in: [lib2d/Curve2D.ts:90](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/Curve2D.ts#L90)

##### Returns

[`CurveType`](../type-aliases/CurveType.md)

***

### innerCurve

#### Get Signature

```ts
get innerCurve(): Geom2d_Curve;
```

Defined in: [lib2d/Curve2D.ts:53](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/Curve2D.ts#L53)

##### Returns

`Geom2d_Curve`

***

### lastParameter

#### Get Signature

```ts
get lastParameter(): number;
```

Defined in: [lib2d/Curve2D.ts:81](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/Curve2D.ts#L81)

##### Returns

`number`

***

### lastPoint

#### Get Signature

```ts
get lastPoint(): Point2D;
```

Defined in: [lib2d/Curve2D.ts:73](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/Curve2D.ts#L73)

##### Returns

[`Point2D`](../type-aliases/Point2D.md)

***

### repr

#### Get Signature

```ts
get repr(): string;
```

Defined in: [lib2d/Curve2D.ts:47](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/Curve2D.ts#L47)

##### Returns

`string`

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

## Methods

### adaptor()

```ts
adaptor(): Geom2dAdaptor_Curve;
```

Defined in: [lib2d/Curve2D.ts:85](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/Curve2D.ts#L85)

#### Returns

`Geom2dAdaptor_Curve`

***

### clone()

```ts
clone(): Curve2D;
```

Defined in: [lib2d/Curve2D.ts:97](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/Curve2D.ts#L97)

#### Returns

`Curve2D`

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

### distanceFrom()

```ts
distanceFrom(element): number;
```

Defined in: [lib2d/Curve2D.ts:160](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/Curve2D.ts#L160)

#### Parameters

##### element

[`Point2D`](../type-aliases/Point2D.md) | `Curve2D`

#### Returns

`number`

***

### isOnCurve()

```ts
isOnCurve(point): boolean;
```

Defined in: [lib2d/Curve2D.ts:168](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/Curve2D.ts#L168)

#### Parameters

##### point

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`boolean`

***

### parameter()

```ts
parameter(point, precision): number;
```

Defined in: [lib2d/Curve2D.ts:172](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/Curve2D.ts#L172)

#### Parameters

##### point

[`Point2D`](../type-aliases/Point2D.md)

##### precision

`number` = `1e-9`

#### Returns

`number`

***

### reverse()

```ts
reverse(): void;
```

Defined in: [lib2d/Curve2D.ts:101](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/Curve2D.ts#L101)

#### Returns

`void`

***

### serialize()

```ts
serialize(): string;
```

Defined in: [lib2d/Curve2D.ts:57](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/Curve2D.ts#L57)

#### Returns

`string`

***

### splitAt()

```ts
splitAt(points, precision): Curve2D[];
```

Defined in: [lib2d/Curve2D.ts:229](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/Curve2D.ts#L229)

#### Parameters

##### points

`number`[] | [`Point2D`](../type-aliases/Point2D.md)[]

##### precision

`number` = `1e-9`

#### Returns

`Curve2D`[]

***

### tangentAt()

```ts
tangentAt(index): Point2D;
```

Defined in: [lib2d/Curve2D.ts:204](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/Curve2D.ts#L204)

#### Parameters

##### index

`number` | [`Point2D`](../type-aliases/Point2D.md)

#### Returns

[`Point2D`](../type-aliases/Point2D.md)

***

### value()

```ts
value(parameter): Point2D;
```

Defined in: [lib2d/Curve2D.ts:62](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/Curve2D.ts#L62)

#### Parameters

##### parameter

`number`

#### Returns

[`Point2D`](../type-aliases/Point2D.md)
