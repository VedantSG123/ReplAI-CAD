# Class: Plane

Defined in: [geom.ts:337](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L337)

## Constructors

### Constructor

```ts
new Plane(
   origin, 
   xDirection, 
   normal): Plane;
```

Defined in: [geom.ts:351](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L351)

#### Parameters

##### origin

[`Point`](../type-aliases/Point.md)

##### xDirection

`null` | [`Point`](../type-aliases/Point.md)

##### normal

[`Point`](../type-aliases/Point.md) = `...`

#### Returns

`Plane`

## Properties

### oc

```ts
oc: OpenCascadeInstance;
```

Defined in: [geom.ts:338](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L338)

***

### xDir

```ts
xDir: Vector;
```

Defined in: [geom.ts:340](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L340)

***

### yDir

```ts
yDir: Vector;
```

Defined in: [geom.ts:341](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L341)

***

### zDir

```ts
zDir: Vector;
```

Defined in: [geom.ts:342](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L342)

## Accessors

### origin

#### Get Signature

```ts
get origin(): Vector;
```

Defined in: [geom.ts:395](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L395)

##### Returns

[`Vector`](Vector.md)

#### Set Signature

```ts
set origin(newOrigin): void;
```

Defined in: [geom.ts:399](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L399)

##### Parameters

###### newOrigin

[`Vector`](Vector.md)

##### Returns

`void`

## Methods

### \_calcTransforms()

```ts
_calcTransforms(): void;
```

Defined in: [geom.ts:448](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L448)

#### Returns

`void`

***

### clone()

```ts
clone(): Plane;
```

Defined in: [geom.ts:391](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L391)

#### Returns

`Plane`

***

### delete()

```ts
delete(): void;
```

Defined in: [geom.ts:383](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L383)

#### Returns

`void`

***

### pivot()

```ts
pivot(angle, direction): Plane;
```

Defined in: [geom.ts:434](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L434)

#### Parameters

##### angle

`number`

##### direction

`Direction` = `...`

#### Returns

`Plane`

***

### rotate2DAxes()

```ts
rotate2DAxes(angle): Plane;
```

Defined in: [geom.ts:442](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L442)

#### Parameters

##### angle

`number`

#### Returns

`Plane`

***

### setOrigin2d()

```ts
setOrigin2d(x, y): void;
```

Defined in: [geom.ts:472](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L472)

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

***

### toLocalCoords()

```ts
toLocalCoords(vec): Vector;
```

Defined in: [geom.ts:476](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L476)

#### Parameters

##### vec

[`Vector`](Vector.md)

#### Returns

[`Vector`](Vector.md)

***

### toWorldCoords()

```ts
toWorldCoords(v): Vector;
```

Defined in: [geom.ts:483](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L483)

#### Parameters

##### v

[`Point`](../type-aliases/Point.md)

#### Returns

[`Vector`](Vector.md)

***

### translate()

#### Call Signature

```ts
translate(
   xDist, 
   yDist, 
   zDist): Plane;
```

Defined in: [geom.ts:410](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L410)

##### Parameters

###### xDist

`number`

###### yDist

`number`

###### zDist

`number`

##### Returns

`Plane`

#### Call Signature

```ts
translate(vector): Plane;
```

Defined in: [geom.ts:411](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L411)

##### Parameters

###### vector

[`Point`](../type-aliases/Point.md)

##### Returns

`Plane`

***

### translateTo()

```ts
translateTo(point): Plane;
```

Defined in: [geom.ts:404](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L404)

#### Parameters

##### point

[`Point`](../type-aliases/Point.md)

#### Returns

`Plane`

***

### translateX()

```ts
translateX(xDist): Plane;
```

Defined in: [geom.ts:422](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L422)

#### Parameters

##### xDist

`number`

#### Returns

`Plane`

***

### translateY()

```ts
translateY(yDist): Plane;
```

Defined in: [geom.ts:426](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L426)

#### Parameters

##### yDist

`number`

#### Returns

`Plane`

***

### translateZ()

```ts
translateZ(zDist): Plane;
```

Defined in: [geom.ts:430](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/geom.ts#L430)

#### Parameters

##### zDist

`number`

#### Returns

`Plane`
