# Class: BoundingBox

Defined in: [geom.ts:578](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L578)

## Extends

- [`WrappingObj`](WrappingObj.md)\<`Bnd_Box`\>

## Constructors

### Constructor

```ts
new BoundingBox(wrapped?): BoundingBox;
```

Defined in: [geom.ts:579](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L579)

#### Parameters

##### wrapped?

`Bnd_Box`

#### Returns

`BoundingBox`

#### Overrides

[`WrappingObj`](WrappingObj.md).[`constructor`](WrappingObj.md#constructor)

## Accessors

### bounds

#### Get Signature

```ts
get bounds(): [SimplePoint, SimplePoint];
```

Defined in: [geom.ts:593](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L593)

##### Returns

\[[`SimplePoint`](../type-aliases/SimplePoint.md), [`SimplePoint`](../type-aliases/SimplePoint.md)\]

***

### center

#### Get Signature

```ts
get center(): SimplePoint;
```

Defined in: [geom.ts:609](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L609)

##### Returns

[`SimplePoint`](../type-aliases/SimplePoint.md)

***

### depth

#### Get Signature

```ts
get depth(): number;
```

Defined in: [geom.ts:628](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L628)

##### Returns

`number`

***

### height

#### Get Signature

```ts
get height(): number;
```

Defined in: [geom.ts:623](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L623)

##### Returns

`number`

***

### repr

#### Get Signature

```ts
get repr(): string;
```

Defined in: [geom.ts:588](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L588)

##### Returns

`string`

***

### width

#### Get Signature

```ts
get width(): number;
```

Defined in: [geom.ts:618](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L618)

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

Defined in: [geom.ts:633](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L633)

#### Parameters

##### other

`BoundingBox`

#### Returns

`void`

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

Defined in: [geom.ts:637](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L637)

#### Parameters

##### other

`BoundingBox`

#### Returns

`boolean`
