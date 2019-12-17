declare global {
  type Mapper<I, O> = (arg: I) => O;
  interface Function {
    pipe<I, O, R>(this: Mapper<I, O>, foo: Mapper<O, R>): Mapper<I, R>;
    compose<I, O, R>(this: Mapper<O, R>, foo: Mapper<I, O>): Mapper<I, R>;
  }
}

const pipe = function pipe<I, O, R>(
  this: Mapper<I, O>,
  foo: Mapper<O, R>,
): Mapper<I, R> {
  const self = this;
  return function pipedFunction(arg: I) {
    return foo(self(arg));
  };
};

const compose = function compose<I, O, R>(
  this: Mapper<O, R>,
  foo: Mapper<I, O>,
): Mapper<I, R> {
  const self = this;
  return function pipedFunction(arg: I) {
    return self(foo(arg));
  };
};

/* eslint-disable no-extend-native */
Function.prototype.pipe = pipe;
Function.prototype.compose = compose;

export { pipe, compose };
