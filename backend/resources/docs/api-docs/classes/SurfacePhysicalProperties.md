# Class: SurfacePhysicalProperties

Defined in: [measureShape.ts:25](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/measureShape.ts#L25)

## Extends

- `PhysicalProperties`

## Constructors

### Constructor

```ts
new SurfacePhysicalProperties(wrapped): SurfacePhysicalProperties;
```

Defined in: [register.ts:31](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/register.ts#L31)

#### Parameters

##### wrapped

`GProp_GProps`

#### Returns

`SurfacePhysicalProperties`

#### Inherited from

```ts
PhysicalProperties.constructor
```

## Accessors

### area

#### Get Signature

```ts
get area(): number;
```

Defined in: [measureShape.ts:26](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/measureShape.ts#L26)

##### Returns

`number`

***

### centerOfMass

#### Get Signature

```ts
get centerOfMass(): [number, number, number];
```

Defined in: [measureShape.ts:12](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/measureShape.ts#L12)

##### Returns

\[`number`, `number`, `number`\]

#### Inherited from

```ts
PhysicalProperties.centerOfMass
```

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

```ts
PhysicalProperties.wrapped
```

## Methods

### delete()

```ts
delete(): void;
```

Defined in: [register.ts:54](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/register.ts#L54)

#### Returns

`void`

#### Inherited from

```ts
PhysicalProperties.delete
```
