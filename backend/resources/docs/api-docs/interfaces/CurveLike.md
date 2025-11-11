# Interface: CurveLike

Defined in: [shapes.ts:64](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L64)

## Methods

### D1()

```ts
D1(
   v, 
   p, 
   vPrime): void;
```

Defined in: [shapes.ts:73](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L73)

#### Parameters

##### v

`number`

##### p

`gp_Pnt`

##### vPrime

`gp_Vec`

#### Returns

`void`

***

### delete()

```ts
delete(): void;
```

Defined in: [shapes.ts:65](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L65)

#### Returns

`void`

***

### FirstParameter()

```ts
FirstParameter(): number;
```

Defined in: [shapes.ts:70](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L70)

#### Returns

`number`

***

### GetType()?

```ts
optional GetType(): any;
```

Defined in: [shapes.ts:72](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L72)

#### Returns

`any`

***

### IsClosed()

```ts
IsClosed(): boolean;
```

Defined in: [shapes.ts:69](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L69)

#### Returns

`boolean`

***

### IsPeriodic()

```ts
IsPeriodic(): boolean;
```

Defined in: [shapes.ts:67](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L67)

#### Returns

`boolean`

***

### LastParameter()

```ts
LastParameter(): number;
```

Defined in: [shapes.ts:71](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L71)

#### Returns

`number`

***

### Period()

```ts
Period(): number;
```

Defined in: [shapes.ts:68](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L68)

#### Returns

`number`

***

### Value()

```ts
Value(v): gp_Pnt;
```

Defined in: [shapes.ts:66](https://github.com/sgenoud/replicad/blob/24b0570eda7090dd06f76a8083979647be62010e/packages/replicad/src/shapes.ts#L66)

#### Parameters

##### v

`number`

#### Returns

`gp_Pnt`
