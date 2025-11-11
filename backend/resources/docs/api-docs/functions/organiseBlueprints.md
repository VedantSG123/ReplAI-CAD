# Function: organiseBlueprints()

```ts
function organiseBlueprints(blueprints): Blueprints;
```

Defined in: [blueprints/lib.ts:123](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/blueprints/lib.ts#L123)

Groups an array of blueprints such that blueprints that correspond to holes
in other blueprints are set in a `CompoundBlueprint`.

The current algorithm does not handle cases where blueprints cross each
other

## Parameters

### blueprints

[`Blueprint`](../classes/Blueprint.md)[]

## Returns

[`Blueprints`](../classes/Blueprints.md)
