# Class: DistanceQuery

Defined in: [measureShape.ts:124](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/measureShape.ts#L124)

## Extends

- [`WrappingObj`](WrappingObj.md)\<`BRepExtrema_DistShapeShape`\>

## Constructors

### Constructor

```ts
new DistanceQuery(shape): DistanceQuery;
```

Defined in: [measureShape.ts:125](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/measureShape.ts#L125)

#### Parameters

##### shape

[`AnyShape`](../type-aliases/AnyShape.md)

#### Returns

`DistanceQuery`

#### Overrides

[`WrappingObj`](WrappingObj.md).[`constructor`](WrappingObj.md#constructor)

## Accessors

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

### distanceTo()

```ts
distanceTo(shape): number;
```

Defined in: [measureShape.ts:131](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/measureShape.ts#L131)

#### Parameters

##### shape

[`AnyShape`](../type-aliases/AnyShape.md)

#### Returns

`number`
