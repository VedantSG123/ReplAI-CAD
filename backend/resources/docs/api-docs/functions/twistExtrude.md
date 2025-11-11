# Function: twistExtrude()

## Call Signature

```ts
function twistExtrude(
   wire, 
   angleDegrees, 
   center, 
   normal, 
   profileShape?, 
   shellMode?): Shape3D;
```

Defined in: [addThickness.ts:235](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/addThickness.ts#L235)

### Parameters

#### wire

[`Wire`](../classes/Wire.md)

#### angleDegrees

`number`

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

## Call Signature

```ts
function twistExtrude(
   wire, 
   angleDegrees, 
   center, 
   normal, 
   profileShape, 
   shellMode): [Shape3D, Wire, Wire];
```

Defined in: [addThickness.ts:243](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/addThickness.ts#L243)

### Parameters

#### wire

[`Wire`](../classes/Wire.md)

#### angleDegrees

`number`

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
