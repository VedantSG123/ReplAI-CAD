# Class: Transformation

Defined in: [geom.ts:228](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L228)

## Extends

- [`WrappingObj`](WrappingObj.md)\<`gp_Trsf`\>

## Constructors

### Constructor

```ts
new Transformation(transform?): Transformation;
```

Defined in: [geom.ts:229](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L229)

#### Parameters

##### transform?

`gp_Trsf`

#### Returns

`Transformation`

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

### coordSystemChange()

```ts
coordSystemChange(fromSystem, toSystem): this;
```

Defined in: [geom.ts:303](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L303)

#### Parameters

##### fromSystem

`CoordSystem`

##### toSystem

`CoordSystem`

#### Returns

`this`

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

### mirror()

```ts
mirror(inputPlane, inputOrigin?): this;
```

Defined in: [geom.ts:269](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L269)

#### Parameters

##### inputPlane

[`Point`](../type-aliases/Point.md) | [`Plane`](Plane.md) | [`PlaneName`](../type-aliases/PlaneName.md)

##### inputOrigin?

[`Point`](../type-aliases/Point.md)

#### Returns

`this`

***

### rotate()

```ts
rotate(
   angle, 
   position, 
   direction): Transformation;
```

Defined in: [geom.ts:252](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L252)

#### Parameters

##### angle

`number`

##### position

[`Point`](../type-aliases/Point.md) = `...`

##### direction

[`Point`](../type-aliases/Point.md) = `...`

#### Returns

`Transformation`

***

### scale()

```ts
scale(center, scale): this;
```

Defined in: [geom.ts:296](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L296)

#### Parameters

##### center

[`Point`](../type-aliases/Point.md)

##### scale

`number`

#### Returns

`this`

***

### transform()

```ts
transform(shape): TopoDS_Shape;
```

Defined in: [geom.ts:327](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L327)

#### Parameters

##### shape

`TopoDS_Shape`

#### Returns

`TopoDS_Shape`

***

### transformPoint()

```ts
transformPoint(point): gp_Pnt;
```

Defined in: [geom.ts:320](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L320)

#### Parameters

##### point

[`Point`](../type-aliases/Point.md)

#### Returns

`gp_Pnt`

***

### translate()

#### Call Signature

```ts
translate(
   xDist, 
   yDist, 
   zDist): Transformation;
```

Defined in: [geom.ts:234](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L234)

##### Parameters

###### xDist

`number`

###### yDist

`number`

###### zDist

`number`

##### Returns

`Transformation`

#### Call Signature

```ts
translate(vector): Transformation;
```

Defined in: [geom.ts:235](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L235)

##### Parameters

###### vector

[`Point`](../type-aliases/Point.md)

##### Returns

`Transformation`
