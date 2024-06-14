type EType<T extends Iterable<unknown>> = T extends Iterable<infer E>
  ? E
  : never;

export function* zip<T extends Array<Iterable<unknown>>>(
  ...args: T
): Generator<{ [K in keyof T]: EType<T[K]> }> {
  const iterators = args.map((e) => e[Symbol.iterator]());
  while (1) {
    const results = iterators.map((e) => e.next());
    if (results.some(({ done }) => done)) {
      break;
    }
    yield results.map(({ value }) => value as T) as {
      [K in keyof T]: EType<T[K]>;
    };
  }
}
