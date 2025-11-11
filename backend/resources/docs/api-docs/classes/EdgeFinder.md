# Class: EdgeFinder

Defined in: [finders/edgeFinder.ts:13](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/edgeFinder.ts#L13)

With an EdgeFinder you can apply a set of filters to find specific edges
within a shape.

## Extends

- `Finder3d`\<[`Edge`](Edge.md)\>

## Constructors

### Constructor

```ts
new EdgeFinder(): EdgeFinder;
```

Defined in: [finders/definitions.ts:36](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/definitions.ts#L36)

#### Returns

`EdgeFinder`

#### Inherited from

```ts
Finder3d<Edge>.constructor
```

## Filter

### atAngleWith()

```ts
atAngleWith(direction, angle): this;
```

Defined in: [finders/generic3dfinder.ts:52](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/generic3dfinder.ts#L52)

Filter to find elements that are at a specified angle (in degrees) with
a direction.

The element direction corresponds to its normal in the case of a face.

#### Parameters

##### direction

[`Point`](../type-aliases/Point.md) | `Direction`

##### angle

`number` = `0`

#### Returns

`this`

#### Inherited from

```ts
Finder3d.atAngleWith
```

***

### atDistance()

```ts
atDistance(distance, point): this;
```

Defined in: [finders/generic3dfinder.ts:78](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/generic3dfinder.ts#L78)

Filter to find elements that are at a specified distance from a point.

#### Parameters

##### distance

`number`

##### point

[`Point`](../type-aliases/Point.md) = `...`

#### Returns

`this`

#### Inherited from

```ts
Finder3d.atDistance
```

***

### containsPoint()

```ts
containsPoint(point): this;
```

Defined in: [finders/generic3dfinder.ts:95](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/generic3dfinder.ts#L95)

Filter to find elements that contain a certain point

#### Parameters

##### point

[`Point`](../type-aliases/Point.md)

#### Returns

`this`

#### Inherited from

```ts
Finder3d.containsPoint
```

***

### inBox()

```ts
inBox(corner1, corner2): EdgeFinder;
```

Defined in: [finders/generic3dfinder.ts:123](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/generic3dfinder.ts#L123)

Filter to find elements that are within a box

The elements that are not fully contained in the box are also found.

#### Parameters

##### corner1

[`Point`](../type-aliases/Point.md)

##### corner2

[`Point`](../type-aliases/Point.md)

#### Returns

`EdgeFinder`

#### Inherited from

```ts
Finder3d.inBox
```

***

### inDirection()

```ts
inDirection(direction): this;
```

Defined in: [finders/edgeFinder.ts:25](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/edgeFinder.ts#L25)

Filter to find edges that are in a certain direction

#### Parameters

##### direction

[`Point`](../type-aliases/Point.md) | `Direction`

#### Returns

`this`

***

### inList()

```ts
inList(elementList): this;
```

Defined in: [finders/generic3dfinder.ts:36](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/generic3dfinder.ts#L36)

Filter to find elements that are in the list.

This deletes the elements in the list as the filter deletion.

#### Parameters

##### elementList

[`Edge`](Edge.md)[]

#### Returns

`this`

#### Inherited from

```ts
Finder3d.inList
```

***

### inPlane()

```ts
inPlane(inputPlane, origin?): this;
```

Defined in: [finders/edgeFinder.ts:86](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/edgeFinder.ts#L86)

Filter to find edges that within a plane.

Note that this will work only in lines (but the method does not
check this assumption).

#### Parameters

##### inputPlane

[`Plane`](Plane.md) | [`PlaneName`](../type-aliases/PlaneName.md)

##### origin?

`number` | [`Point`](../type-aliases/Point.md)

#### Returns

`this`

***

### inShape()

```ts
inShape(shape): EdgeFinder;
```

Defined in: [finders/generic3dfinder.ts:135](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/generic3dfinder.ts#L135)

Filter to find elements that are within a generic shape

The elements that are not fully contained in the shape are also found.

#### Parameters

##### shape

[`AnyShape`](../type-aliases/AnyShape.md)

#### Returns

`EdgeFinder`

#### Inherited from

```ts
Finder3d.inShape
```

***

### ofCurveType()

```ts
ofCurveType(curveType): this;
```

Defined in: [finders/edgeFinder.ts:49](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/edgeFinder.ts#L49)

Filter to find edges that are of a cetain curve type.

#### Parameters

##### curveType

[`CurveType`](../type-aliases/CurveType.md)

#### Returns

`this`

***

### ofLength()

```ts
ofLength(length): this;
```

Defined in: [finders/edgeFinder.ts:34](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/edgeFinder.ts#L34)

Filter to find edges of a certain length

#### Parameters

##### length

`number` | (`l`) => `boolean`

#### Returns

`this`

***

### parallelTo()

```ts
parallelTo(plane): this;
```

Defined in: [finders/edgeFinder.ts:65](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/edgeFinder.ts#L65)

Filter to find edges that are parallel to a plane.

Note that this will work only in lines (but the method does not
check this assumption).

#### Parameters

##### plane

[`Plane`](Plane.md) | `StandardPlane` | [`Face`](Face.md)

#### Returns

`this`

***

### when()

```ts
when(filter): this;
```

Defined in: [finders/generic3dfinder.ts:24](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/generic3dfinder.ts#L24)

Filter to find elements following a custom function.

#### Parameters

##### filter

(`filter`) => `boolean`

#### Returns

`this`

#### Inherited from

```ts
Finder3d.when
```

***

### withinDistance()

```ts
withinDistance(distance, point): this;
```

Defined in: [finders/generic3dfinder.ts:104](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/generic3dfinder.ts#L104)

Filter to find elements that are within a certain distance from a point.

#### Parameters

##### distance

`number`

##### point

[`Point`](../type-aliases/Point.md) = `...`

#### Returns

`this`

#### Inherited from

```ts
Finder3d.withinDistance
```

## Filter Combination

### and()

```ts
and(findersList): this;
```

Defined in: [finders/definitions.ts:55](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/definitions.ts#L55)

Combine logically a set of filter with an AND operation.

You need to pass an array of functions that take a finder as a argument
and return the same finder with some filters applied to it.

Note that by default filters are applied with and AND operation, but in
some case you might want to create them dynamically and use this method.

#### Parameters

##### findersList

(`f`) => `this`[]

#### Returns

`this`

#### Inherited from

```ts
Finder3d.and
```

***

### either()

```ts
either(findersList): this;
```

Defined in: [finders/definitions.ts:87](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/definitions.ts#L87)

Combine logically a set of filter with an OR operation.

You need to pass an array of functions that take a finder as a argument
and return the same finder with some filters applied to it.

#### Parameters

##### findersList

(`f`) => `this`[]

#### Returns

`this`

#### Inherited from

```ts
Finder3d.either
```

***

### not()

```ts
not(finderFun): this;
```

Defined in: [finders/definitions.ts:68](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/definitions.ts#L68)

Invert the result of a particular finder

You need to pass a function that take a finder as a argument
and return the same finder with some filters applied to it.

#### Parameters

##### finderFun

(`f`) => `this`

#### Returns

`this`

#### Inherited from

```ts
Finder3d.not
```

## Other

### clone()

```ts
clone(): EdgeFinder;
```

Defined in: [finders/edgeFinder.ts:14](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/edgeFinder.ts#L14)

#### Returns

`EdgeFinder`

***

### delete()

```ts
delete(): void;
```

Defined in: [finders/definitions.ts:40](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/definitions.ts#L40)

#### Returns

`void`

#### Inherited from

```ts
Finder3d.delete
```

***

### find()

#### Call Signature

```ts
find(shape, options): Edge;
```

Defined in: [finders/definitions.ts:108](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/definitions.ts#L108)

Returns all the elements that fit the set of filters defined on this
finder

If unique is configured as an option it will either return the unique
element found or throw an error.

##### Parameters

###### shape

[`AnyShape`](../type-aliases/AnyShape.md)

###### options

###### unique

`true`

##### Returns

[`Edge`](Edge.md)

##### Inherited from

```ts
Finder3d.find
```

#### Call Signature

```ts
find(shape): Edge[];
```

Defined in: [finders/definitions.ts:109](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/definitions.ts#L109)

Returns all the elements that fit the set of filters defined on this
finder

If unique is configured as an option it will either return the unique
element found or throw an error.

##### Parameters

###### shape

[`AnyShape`](../type-aliases/AnyShape.md)

##### Returns

[`Edge`](Edge.md)[]

##### Inherited from

```ts
Finder3d.find
```

#### Call Signature

```ts
find(shape, options): Edge[];
```

Defined in: [finders/definitions.ts:110](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/definitions.ts#L110)

Returns all the elements that fit the set of filters defined on this
finder

If unique is configured as an option it will either return the unique
element found or throw an error.

##### Parameters

###### shape

[`AnyShape`](../type-aliases/AnyShape.md)

###### options

###### unique?

`false`

##### Returns

[`Edge`](Edge.md)[]

##### Inherited from

```ts
Finder3d.find
```

***

### shouldKeep()

```ts
shouldKeep(element): boolean;
```

Defined in: [finders/edgeFinder.ts:107](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/edgeFinder.ts#L107)

Check if a particular element should be filtered or not according to the
current finder

#### Parameters

##### element

[`Edge`](Edge.md)

#### Returns

`boolean`

#### Overrides

```ts
Finder3d.shouldKeep
```
