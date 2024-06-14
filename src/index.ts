type EType<T extends Iterable<unknown>> = T extends Iterable<infer E>
  ? E
  : never;

type ZippedTuple<T extends Array<Iterable<unknown>>> = {
  [K in keyof T]: EType<T[K]>;
};

export function* zip<T extends Array<Iterable<unknown>>>(
  ...args: T
): Generator<ZippedTuple<T>> {
  const iterators = args.map((e) => e[Symbol.iterator]());
  while (1) {
    const results = iterators.map((e) => e.next());
    if (results.some(({ done }) => done)) {
      break;
    }
    yield results.map(({ value }) => value as T) as ZippedTuple<T>;
  }
}
