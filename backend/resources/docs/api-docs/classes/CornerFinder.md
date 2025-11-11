# Class: CornerFinder

Defined in: [finders/cornerFinder.ts:32](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/cornerFinder.ts#L32)

## Extends

- `Finder`\<[`Corner`](../type-aliases/Corner.md), [`Blueprint`](Blueprint.md)\>

## Constructors

### Constructor

```ts
new CornerFinder(): CornerFinder;
```

Defined in: [finders/definitions.ts:36](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/definitions.ts#L36)

#### Returns

`CornerFinder`

#### Inherited from

```ts
Finder<Corner, Blueprint>.constructor
```

## Filter

### atDistance()

```ts
atDistance(distance, point): this;
```

Defined in: [finders/cornerFinder.ts:57](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/cornerFinder.ts#L57)

Filter to find elements that are at a specified distance from a point.

#### Parameters

##### distance

`number`

##### point

[`Point2D`](../type-aliases/Point2D.md) = `...`

#### Returns

`this`

***

### atPoint()

```ts
atPoint(point): this;
```

Defined in: [finders/cornerFinder.ts:70](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/cornerFinder.ts#L70)

Filter to find elements that contain a certain point

#### Parameters

##### point

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`this`

***

### inBox()

```ts
inBox(corner1, corner2): CornerFinder;
```

Defined in: [finders/cornerFinder.ts:83](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/cornerFinder.ts#L83)

Filter to find elements that are within a box

#### Parameters

##### corner1

[`Point2D`](../type-aliases/Point2D.md)

##### corner2

[`Point2D`](../type-aliases/Point2D.md)

#### Returns

`CornerFinder`

***

### inList()

```ts
inList(elementList): this;
```

Defined in: [finders/cornerFinder.ts:44](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/cornerFinder.ts#L44)

Filter to find corner that have their point are in the list.

#### Parameters

##### elementList

[`Point2D`](../type-aliases/Point2D.md)[]

#### Returns

`this`

***

### ofAngle()

```ts
ofAngle(angle): CornerFinder;
```

Defined in: [finders/cornerFinder.ts:107](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/cornerFinder.ts#L107)

Filter to find corner that a certain angle between them - only between
0 and 180.

#### Parameters

##### angle

`number`

#### Returns

`CornerFinder`

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
Finder.and
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
Finder.either
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
Finder.not
```

## Other

### clone()

```ts
clone(): CornerFinder;
```

Defined in: [finders/cornerFinder.ts:33](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/cornerFinder.ts#L33)

#### Returns

`CornerFinder`

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
Finder.delete
```

***

### find()

#### Call Signature

```ts
find(shape, options): Corner;
```

Defined in: [finders/definitions.ts:108](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/definitions.ts#L108)

Returns all the elements that fit the set of filters defined on this
finder

If unique is configured as an option it will either return the unique
element found or throw an error.

##### Parameters

###### shape

[`Blueprint`](Blueprint.md)

###### options

###### unique

`true`

##### Returns

[`Corner`](../type-aliases/Corner.md)

##### Inherited from

```ts
Finder.find
```

#### Call Signature

```ts
find(shape): Corner[];
```

Defined in: [finders/definitions.ts:109](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/definitions.ts#L109)

Returns all the elements that fit the set of filters defined on this
finder

If unique is configured as an option it will either return the unique
element found or throw an error.

##### Parameters

###### shape

[`Blueprint`](Blueprint.md)

##### Returns

[`Corner`](../type-aliases/Corner.md)[]

##### Inherited from

```ts
Finder.find
```

#### Call Signature

```ts
find(shape, options): Corner[];
```

Defined in: [finders/definitions.ts:110](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/definitions.ts#L110)

Returns all the elements that fit the set of filters defined on this
finder

If unique is configured as an option it will either return the unique
element found or throw an error.

##### Parameters

###### shape

[`Blueprint`](Blueprint.md)

###### options

###### unique?

`false`

##### Returns

[`Corner`](../type-aliases/Corner.md)[]

##### Inherited from

```ts
Finder.find
```

***

### shouldKeep()

```ts
shouldKeep(element): boolean;
```

Defined in: [finders/cornerFinder.ts:124](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/cornerFinder.ts#L124)

Check if a particular element should be filtered or not according to the
current finder

#### Parameters

##### element

[`Corner`](../type-aliases/Corner.md)

#### Returns

`boolean`

#### Overrides

```ts
Finder.shouldKeep
```
