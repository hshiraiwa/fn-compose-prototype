import '../index';

const Counter = (initialValue: number = 0) => {
  let count = initialValue;
  return () => {
    count += 1;
    return count;
  };
};

const orderedAdd1 = (order: number, counter: () => number) => (i: number) => {
  expect(counter()).toBe(order);
  return i + 1;
};

test('compose order', () => {
  const counter = Counter();
  const foo1 = orderedAdd1(5, counter);
  const foo2 = orderedAdd1(4, counter);
  const foo3 = orderedAdd1(3, counter);
  const foo4 = orderedAdd1(2, counter);
  const foo5 = orderedAdd1(1, counter);
  expect(
    foo1
      .compose(foo2)
      .compose(foo3)
      .compose(foo4)
      .compose(foo5)(1),
  ).toBe(6);
  expect(counter()).toBe(6);
});

test('compose usage example', () => {
  const add1 = (x: number) => x + 1;
  const add3 = (x: number) => x + 3;
  const toString = (x: number) => x.toString();

  const add4AndToString = toString.compose(add1).compose(add3);

  expect(add4AndToString(1)).toBe('5');
});

test('pipe order', () => {
  const counter = Counter();
  const foo1 = orderedAdd1(1, counter);
  const foo2 = orderedAdd1(2, counter);
  const foo3 = orderedAdd1(3, counter);
  const foo4 = orderedAdd1(4, counter);
  const foo5 = orderedAdd1(5, counter);
  expect(
    foo1
      .pipe(foo2)
      .pipe(foo3)
      .pipe(foo4)
      .pipe(foo5)(1),
  ).toBe(6);
  expect(counter()).toBe(6);
});

test('pipe usage example', () => {
  const add1 = (x: number) => x + 1;
  const add3 = (x: number) => x + 3;
  const toString = (x: number) => x.toString();

  const add4AndToString = add1.pipe(add3).pipe(toString);

  expect(add4AndToString(1)).toBe('5');
});
