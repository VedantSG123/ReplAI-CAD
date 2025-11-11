# Class: Curve

Defined in: [shapes.ts:697](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L697)

## Extends

- [`WrappingObj`](WrappingObj.md)\<[`CurveLike`](../interfaces/CurveLike.md)\>

## Constructors

### Constructor

```ts
new Curve(wrapped): Curve;
```

Defined in: [register.ts:31](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/register.ts#L31)

#### Parameters

##### wrapped

[`CurveLike`](../interfaces/CurveLike.md)

#### Returns

`Curve`

#### Inherited from

[`WrappingObj`](WrappingObj.md).[`constructor`](WrappingObj.md#constructor)

## Accessors

### curveType

#### Get Signature

```ts
get curveType(): CurveType;
```

Defined in: [shapes.ts:706](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L706)

##### Returns

[`CurveType`](../type-aliases/CurveType.md)

***

### endPoint

#### Get Signature

```ts
get endPoint(): Vector;
```

Defined in: [shapes.ts:716](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L716)

##### Returns

[`Vector`](Vector.md)

***

### isClosed

#### Get Signature

```ts
get isClosed(): boolean;
```

Defined in: [shapes.ts:747](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L747)

##### Returns

`boolean`

***

### isPeriodic

#### Get Signature

```ts
get isPeriodic(): boolean;
```

Defined in: [shapes.ts:752](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L752)

##### Returns

`boolean`

***

### period

#### Get Signature

```ts
get period(): number;
```

Defined in: [shapes.ts:757](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L757)

##### Returns

`number`

***

### repr

#### Get Signature

```ts
get repr(): string;
```

Defined in: [shapes.ts:698](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L698)

##### Returns

`string`

***

### startPoint

#### Get Signature

```ts
get startPoint(): Vector;
```

Defined in: [shapes.ts:711](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L711)

##### Returns

[`Vector`](Vector.md)

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

### pointAt()

```ts
pointAt(position): Vector;
```

Defined in: [shapes.ts:728](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L728)

#### Parameters

##### position

`number` = `0.5`

#### Returns

[`Vector`](Vector.md)

***

### tangentAt()

```ts
tangentAt(position): Vector;
```

Defined in: [shapes.ts:732](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L732)

#### Parameters

##### position

`number` = `0.5`

#### Returns

[`Vector`](Vector.md)
