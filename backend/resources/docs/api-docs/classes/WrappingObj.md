# Class: WrappingObj\<Type\>

Defined in: [register.ts:27](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/register.ts#L27)

## Extended by

- [`Vector`](Vector.md)
- [`Transformation`](Transformation.md)
- [`BoundingBox`](BoundingBox.md)
- [`Shape`](Shape.md)
- [`Curve`](Curve.md)
- [`Surface`](Surface.md)
- [`DistanceTool`](DistanceTool.md)
- [`DistanceQuery`](DistanceQuery.md)
- [`ProjectionCamera`](ProjectionCamera.md)
- [`AssemblyExporter`](AssemblyExporter.md)
- [`BoundingBox2d`](BoundingBox2d.md)
- [`Curve2D`](Curve2D.md)

## Type Parameters

### Type

`Type` *extends* `Deletable`

## Constructors

### Constructor

```ts
new WrappingObj<Type>(wrapped): WrappingObj<Type>;
```

Defined in: [register.ts:31](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/register.ts#L31)

#### Parameters

##### wrapped

`Type`

#### Returns

`WrappingObj`\<`Type`\>

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

## Methods

### delete()

```ts
delete(): void;
```

Defined in: [register.ts:54](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/register.ts#L54)

#### Returns

`void`
