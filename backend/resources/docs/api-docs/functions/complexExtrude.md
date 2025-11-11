# Function: complexExtrude()

## Call Signature

```ts
function complexExtrude(
   wire, 
   center, 
   normal, 
   profileShape, 
   shellMode): [Shape3D, Wire, Wire];
```

Defined in: [addThickness.ts:194](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/addThickness.ts#L194)

### Parameters

#### wire

[`Wire`](../classes/Wire.md)

#### center

[`Point`](../type-aliases/Point.md)

#### normal

[`Point`](../type-aliases/Point.md)

#### profileShape

`undefined` | [`ExtrusionProfile`](../interfaces/ExtrusionProfile.md)

#### shellMode

`true`

### Returns

\[[`Shape3D`](../type-aliases/Shape3D.md), [`Wire`](../classes/Wire.md), [`Wire`](../classes/Wire.md)\]

## Call Signature

```ts
function complexExtrude(
   wire, 
   center, 
   normal, 
   profileShape?, 
   shellMode?): Shape3D;
```

Defined in: [addThickness.ts:201](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/addThickness.ts#L201)

### Parameters

#### wire

[`Wire`](../classes/Wire.md)

#### center

[`Point`](../type-aliases/Point.md)

#### normal

[`Point`](../type-aliases/Point.md)

#### profileShape?

[`ExtrusionProfile`](../interfaces/ExtrusionProfile.md)

#### shellMode?

`false`

### Returns

[`Shape3D`](../type-aliases/Shape3D.md)
