# fn-compose-prototype

Small typescript implementation that adds `pipe` and `compose` functions to the `Function` prototype.

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

