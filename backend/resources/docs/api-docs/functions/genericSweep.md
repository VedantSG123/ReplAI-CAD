# Function: genericSweep()

## Call Signature

```ts
function genericSweep(
   wire, 
   spine, 
   sweepConfig, 
   shellMode): [Shape3D, Wire, Wire];
```

Defined in: [addThickness.ts:71](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/addThickness.ts#L71)

### Parameters

#### wire

[`Wire`](../classes/Wire.md)

#### spine

[`Wire`](../classes/Wire.md)

#### sweepConfig

[`GenericSweepConfig`](../interfaces/GenericSweepConfig.md)

#### shellMode

`true`

### Returns

\[[`Shape3D`](../type-aliases/Shape3D.md), [`Wire`](../classes/Wire.md), [`Wire`](../classes/Wire.md)\]

## Call Signature

```ts
function genericSweep(
   wire, 
   spine, 
   sweepConfig, 
   shellMode?): Shape3D;
```

Defined in: [addThickness.ts:77](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/addThickness.ts#L77)

### Parameters

#### wire

[`Wire`](../classes/Wire.md)

#### spine

[`Wire`](../classes/Wire.md)

#### sweepConfig

[`GenericSweepConfig`](../interfaces/GenericSweepConfig.md)

#### shellMode?

`false`

### Returns

[`Shape3D`](../type-aliases/Shape3D.md)
