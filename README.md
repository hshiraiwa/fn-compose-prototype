# fn-compose-prototype

Small typescript implementation that adds `pipe` and `compose` functions to the `Function` prototype.

## Installation

1. Add to your project

`npm install fn-compose-prototype`

or

`yarn add fn-compose-prototype`

2. Import on root file

`import 'fn-compose-prototype'`

or

`require('fn-compose-prototype')`


## Pipe:

`Pipe` composes functions on the same order as they are declared

```
  const add1 = (x: number) => x+1;
  const add3 = (x: number) => x+3;
  const toString = (x: number) => x.toString()

  const add4AndToString = add1
                            .pipe(add3)
                            .pipe(toString);

  // add4AndToString(1) === '5'

```

## Compose:

`Compose` composes functions on the inverse order they are declared

```
  const add1 = (x: number) => x+1;
  const add3 = (x: number) => x+3;
  const toString = (x: number) => x.toString()

  const add4AndToString = toString
                            .compose(add1)
                            .compose(add3);

  // add4AndToString(1) === '5'

```

