# Class: ProjectionCamera

Defined in: [projection/ProjectionCamera.ts:57](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/projection/ProjectionCamera.ts#L57)

## Extends

- [`WrappingObj`](WrappingObj.md)\<`gp_Ax2`\>

## Constructors

### Constructor

```ts
new ProjectionCamera(
   position, 
   direction, 
   xAxis?): ProjectionCamera;
```

Defined in: [projection/ProjectionCamera.ts:58](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/projection/ProjectionCamera.ts#L58)

#### Parameters

##### position

[`Point`](../type-aliases/Point.md) = `...`

##### direction

[`Point`](../type-aliases/Point.md) = `...`

##### xAxis?

[`Point`](../type-aliases/Point.md)

#### Returns

`ProjectionCamera`

#### Overrides

[`WrappingObj`](WrappingObj.md).[`constructor`](WrappingObj.md#constructor)

## Accessors

### direction

#### Get Signature

```ts
get direction(): Vector;
```

Defined in: [projection/ProjectionCamera.ts:72](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/projection/ProjectionCamera.ts#L72)

##### Returns

[`Vector`](Vector.md)

***

### position

#### Get Signature

```ts
get position(): Vector;
```

Defined in: [projection/ProjectionCamera.ts:68](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/projection/ProjectionCamera.ts#L68)

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

***

### xAxis

#### Get Signature

```ts
get xAxis(): Vector;
```

Defined in: [projection/ProjectionCamera.ts:76](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/projection/ProjectionCamera.ts#L76)

##### Returns

[`Vector`](Vector.md)

***

### yAxis

#### Get Signature

```ts
get yAxis(): Vector;
```

Defined in: [projection/ProjectionCamera.ts:80](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/projection/ProjectionCamera.ts#L80)

##### Returns

[`Vector`](Vector.md)

## Methods

### autoAxes()

```ts
autoAxes(): void;
```

Defined in: [projection/ProjectionCamera.ts:84](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/projection/ProjectionCamera.ts#L84)

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

### lookAt()

```ts
lookAt(shape): ProjectionCamera;
```

Defined in: [projection/ProjectionCamera.ts:104](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/projection/ProjectionCamera.ts#L104)

#### Parameters

##### shape

[`Point`](../type-aliases/Point.md) | \{
`boundingBox`: [`BoundingBox`](BoundingBox.md);
\}

#### Returns

`ProjectionCamera`

***

### setPosition()

```ts
setPosition(position): ProjectionCamera;
```

Defined in: [projection/ProjectionCamera.ts:89](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/projection/ProjectionCamera.ts#L89)

#### Parameters

##### position

[`Point`](../type-aliases/Point.md)

#### Returns

`ProjectionCamera`

***

### setXAxis()

```ts
setXAxis(xAxis): ProjectionCamera;
```

Defined in: [projection/ProjectionCamera.ts:94](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/projection/ProjectionCamera.ts#L94)

#### Parameters

##### xAxis

[`Point`](../type-aliases/Point.md)

#### Returns

`ProjectionCamera`

***

### setYAxis()

```ts
setYAxis(yAxis): ProjectionCamera;
```

Defined in: [projection/ProjectionCamera.ts:99](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/projection/ProjectionCamera.ts#L99)

#### Parameters

##### yAxis

[`Point`](../type-aliases/Point.md)

#### Returns

`ProjectionCamera`
