# Class: DistanceTool

Defined in: [measureShape.ts:97](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/measureShape.ts#L97)

## Extends

- [`WrappingObj`](WrappingObj.md)\<`BRepExtrema_DistShapeShape`\>

## Constructors

### Constructor

```ts
new DistanceTool(): DistanceTool;
```

Defined in: [measureShape.ts:98](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/measureShape.ts#L98)

#### Returns

`DistanceTool`

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

### distanceBetween()

```ts
distanceBetween(shape1, shape2): number;
```

Defined in: [measureShape.ts:103](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/measureShape.ts#L103)

#### Parameters

##### shape1

[`AnyShape`](../type-aliases/AnyShape.md)

##### shape2

[`AnyShape`](../type-aliases/AnyShape.md)

#### Returns

`number`
