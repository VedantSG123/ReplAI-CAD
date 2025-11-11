# Type Alias: RadiusConfig\<R\>

```ts
type RadiusConfig<R> = 
  | (e) => R | null
  | R
  | {
  filter: EdgeFinder;
  keep: boolean;
  radius: R;
};
```

Defined in: [shapes.ts:144](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L144)

A generic way to define radii for fillet or chamfer (the operation)

If the radius is a filter finder object (with an EdgeFinder as filter, and
a radius to specify the fillet radius), the operation will only be applied
to the edges as selected by the finder. The finder will be deleted unless it
is explicitly specified to `keep` it.

If the radius is a number all the edges will be targetted for the operation.

If the radius is a function edges will be filletted or chamfered according
to the value returned by the function (0 or null will not add any fillet).

## Type Parameters

### R

`R` = `number`
