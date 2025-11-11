# Function: sketchText()

```ts
function sketchText(
   text, 
   textConfig?, 
   planeConfig?): Sketches;
```

Defined in: [text.ts:121](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/text.ts#L121)

Creates the `Sketches` of a text, in a defined font size and a font familiy
(which will be the default).

## Parameters

### text

`string`

### textConfig?

#### fontFamily?

`"string"`

#### fontSize?

`number`

#### startX?

`number`

#### startY?

`number`

### planeConfig?

#### origin?

`number` \| [`Point`](../type-aliases/Point.md)

#### plane?

  \| [`Plane`](../classes/Plane.md)
  \| [`PlaneName`](../type-aliases/PlaneName.md)

## Returns

[`Sketches`](../classes/Sketches.md)
