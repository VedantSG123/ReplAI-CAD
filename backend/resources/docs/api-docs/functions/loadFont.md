# Function: loadFont()

```ts
function loadFont(
   fontPath, 
   fontFamily, 
force): Promise<Font>;
```

Defined in: [text.ts:17](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/text.ts#L17)

Import a font in the text system. If the font family is not defined it will
set its name as "default"

The font should be in TTF

## Parameters

### fontPath

`string` | `ArrayBuffer`

### fontFamily

`string` = `"default"`

### force

`boolean` = `false`

## Returns

`Promise`\<`Font`\>
