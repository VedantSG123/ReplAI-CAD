# Function: combineFinderFilters()

```ts
function combineFinderFilters<Type, T, R>(filters): [(v) => null | R, () => void];
```

Defined in: [finders/index.ts:14](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/finders/index.ts#L14)

Combine a set of finder filters (defined with radius) to pass as a filter
function.

## Type Parameters

### Type

`Type`

### T

`T`

### R

`R` = `number`

## Parameters

### filters

`object`[]

An array of objects containing a filter and its radius.

## Returns

\[(`v`) => `null` \| `R`, () => `void`\]

A tuple containing a filter function and a cleanup function.
