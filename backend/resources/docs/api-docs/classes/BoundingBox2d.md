# Class: BoundingBox2d

Defined in: [lib2d/BoundingBox2d.ts:9](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/BoundingBox2d.ts#L9)

## Extends

- [`WrappingObj`](WrappingObj.md)\<`Bnd_Box2d`\>

## Constructors

### Constructor

```ts
new BoundingBox2d(wrapped?): BoundingBox2d;
```

Defined in: [lib2d/BoundingBox2d.ts:10](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/BoundingBox2d.ts#L10)

#### Parameters

##### wrapped?

`Bnd_Box2d`

#### Returns

`BoundingBox2d`

#### Overrides

[`WrappingObj`](WrappingObj.md).[`constructor`](WrappingObj.md#constructor)

## Accessors

### bounds

#### Get Signature

```ts
get bounds(): [Point2D, Point2D];
```

Defined in: [lib2d/BoundingBox2d.ts:24](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/BoundingBox2d.ts#L24)

##### Returns

\[[`Point2D`](../type-aliases/Point2D.md), [`Point2D`](../type-aliases/Point2D.md)\]

***

### center

#### Get Signature

```ts
get center(): Point2D;
```

Defined in: [lib2d/BoundingBox2d.ts:38](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/BoundingBox2d.ts#L38)

##### Returns

[`Point2D`](../type-aliases/Point2D.md)

***

### height

#### Get Signature

```ts
get height(): number;
```

Defined in: [lib2d/BoundingBox2d.ts:48](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/BoundingBox2d.ts#L48)

##### Returns

`number`

***

### repr

#### Get Signature

```ts
get repr(): string;
```

Defined in: [lib2d/BoundingBox2d.ts:19](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/BoundingBox2d.ts#L19)

##### Returns

`string`

***

### width

#### Get Signature

```ts
get width(): number;
```

Defined in: [lib2d/BoundingBox2d.ts:43](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/BoundingBox2d.ts#L43)

##### Returns

`number`

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

### add()

```ts
add(other): void;
```

Defined in: [lib2d/BoundingBox2d.ts:64](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/BoundingBox2d.ts#L64)

#### Parameters

##### other

`BoundingBox2d`

#### Returns

`void`

***

### containsPoint()

```ts
containsPoint(other): boolean;
```

Defined in: [lib2d/BoundingBox2d.ts:72](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/BoundingBox2d.ts#L72)

#### Parameters

##### other

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`boolean`

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

### isOut()

```ts
isOut(other): boolean;
```

Defined in: [lib2d/BoundingBox2d.ts:68](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/BoundingBox2d.ts#L68)

#### Parameters

##### other

`BoundingBox2d`

#### Returns

`boolean`

***

### outsidePoint()

```ts
outsidePoint(paddingPercent): Point2D;
```

Defined in: [lib2d/BoundingBox2d.ts:53](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/lib2d/BoundingBox2d.ts#L53)

#### Parameters

##### paddingPercent

`number` = `1`

#### Returns

[`Point2D`](../type-aliases/Point2D.md)
