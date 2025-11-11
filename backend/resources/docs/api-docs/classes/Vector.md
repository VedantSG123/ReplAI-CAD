# Class: Vector

Defined in: [geom.ts:93](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L93)

## Extends

- [`WrappingObj`](WrappingObj.md)\<`gp_Vec`\>

## Constructors

### Constructor

```ts
new Vector(vector): Vector;
```

Defined in: [geom.ts:94](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L94)

#### Parameters

##### vector

[`Point`](../type-aliases/Point.md) = `...`

#### Returns

`Vector`

#### Overrides

[`WrappingObj`](WrappingObj.md).[`constructor`](WrappingObj.md#constructor)

## Accessors

### Length

#### Get Signature

```ts
get Length(): number;
```

Defined in: [geom.ts:114](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L114)

##### Returns

`number`

***

### repr

#### Get Signature

```ts
get repr(): string;
```

Defined in: [geom.ts:98](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L98)

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

***

### x

#### Get Signature

```ts
get x(): number;
```

Defined in: [geom.ts:102](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L102)

##### Returns

`number`

***

### y

#### Get Signature

```ts
get y(): number;
```

Defined in: [geom.ts:106](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L106)

##### Returns

`number`

***

### z

#### Get Signature

```ts
get z(): number;
```

Defined in: [geom.ts:110](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L110)

##### Returns

`number`

## Methods

### add()

```ts
add(v): Vector;
```

Defined in: [geom.ts:134](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L134)

#### Parameters

##### v

`Vector`

#### Returns

`Vector`

***

### cross()

```ts
cross(v): Vector;
```

Defined in: [geom.ts:122](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L122)

#### Parameters

##### v

`Vector`

#### Returns

`Vector`

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

### dot()

```ts
dot(v): number;
```

Defined in: [geom.ts:126](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L126)

#### Parameters

##### v

`Vector`

#### Returns

`number`

***

### equals()

```ts
equals(other): boolean;
```

Defined in: [geom.ts:173](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L173)

#### Parameters

##### other

`Vector`

#### Returns

`boolean`

***

### getAngle()

```ts
getAngle(v): number;
```

Defined in: [geom.ts:155](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L155)

#### Parameters

##### v

`Vector`

#### Returns

`number`

***

### getCenter()

```ts
getCenter(): Vector;
```

Defined in: [geom.ts:151](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L151)

#### Returns

`Vector`

***

### multiply()

```ts
multiply(scale): Vector;
```

Defined in: [geom.ts:138](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L138)

#### Parameters

##### scale

`number`

#### Returns

`Vector`

***

### normalize()

```ts
normalize(): Vector;
```

Defined in: [geom.ts:146](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L146)

#### Returns

`Vector`

***

### normalized()

```ts
normalized(): Vector;
```

Defined in: [geom.ts:142](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L142)

#### Returns

`Vector`

***

### projectToPlane()

```ts
projectToPlane(plane): Vector;
```

Defined in: [geom.ts:159](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L159)

#### Parameters

##### plane

[`Plane`](Plane.md)

#### Returns

`Vector`

***

### rotate()

```ts
rotate(
   angle, 
   center, 
   direction): Vector;
```

Defined in: [geom.ts:185](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L185)

#### Parameters

##### angle

`number`

##### center

[`Point`](../type-aliases/Point.md) = `...`

##### direction

[`Point`](../type-aliases/Point.md) = `...`

#### Returns

`Vector`

***

### sub()

```ts
sub(v): Vector;
```

Defined in: [geom.ts:130](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L130)

#### Parameters

##### v

`Vector`

#### Returns

`Vector`

***

### toDir()

```ts
toDir(): gp_Dir;
```

Defined in: [geom.ts:181](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L181)

#### Returns

`gp_Dir`

***

### toPnt()

```ts
toPnt(): gp_Pnt;
```

Defined in: [geom.ts:177](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L177)

#### Returns

`gp_Pnt`

***

### toTuple()

```ts
toTuple(): [number, number, number];
```

Defined in: [geom.ts:118](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L118)

#### Returns

\[`number`, `number`, `number`\]
