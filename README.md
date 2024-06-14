<div align="center">

# zip-ts

TypeScript Implementation of Python zip() Function for Parallel Iteration

[![tests](https://github.com/AshGw/zip-ts/actions/workflows/test.yml/badge.svg)](https://github.com/AshGw/zip-ts/actions/workflows/test.yml)
[![@latest](https://img.shields.io/npm/v/zip-ts.svg)](https://www.npmjs.com/package/zip-ts)
<hr/>
</div>
  
## Installation 
**npm**
```bash
npm i zip-ts
```
**pnpm**
```bash
pnpm i zip-ts
```
## Usage
You can use ``zip`` to combine multiple iterables into a single iterable of tuples:
```ts
import { zip } from 'zip-ts';

const numbers = [1, 2, 3];
const letters = ['a', 'b', 'c']; // works same as: const letters = 'abc'

for (const [number, letter] of zip(numbers, letters)) {
  console.log(`${number} - ${letter}`);
}
// Output:
// 1 - a
// 2 - b
// 3 - c
```
Stop iterating when the shortest input iterable is exhausted:
```ts
import { zip } from 'zip-ts';

const shortArray = [1, 2];
const longString = 'abcdef';

for (const [num, char] of zip(shortArray, longString)) {
  console.log(`${num} - ${char}`);
}
// Output:
// 1 - a
// 2 - b
```
Combine iterables of different types:
```ts
import { zip } from 'zip-ts';

const numbers = [1, 2, 3];
const mixed = ['a', 2, { key: 'value' }];

for (const [num, item] of zip(numbers, mixed)) {
  console.log(num, item);
}
// Output:
// 1 'a'
// 2 2
// 3 { key: 'value' }
```
``zip`` can handle nested iterables as well:
```ts
import { zip } from 'zip-ts';

const nestedArray = [[1], [2], [3]];
const chars = 'xyz';

for (const [arr, char] of zip(nestedArray, chars)) {
  console.log(arr, char);
}
// Output:
// [1] 'x'
// [2] 'y'
// [3] 'z'
```
When one or more of the input iterables is empty, the result is also empty:
```ts
import { zip } from 'zip-ts';

const emptyArray: any[] = [];
const numbers = [1, 2, 3];

for (const [a, b] of zip(emptyArray, numbers)) {
  console.log(a, b);
}
// Output:
// (no output, as the zipped iterable is empty)
```
For more, check out the [tests](/tests) directory.

## License 
[MIT](https://github.com/AshGw/zip-ts/blob/main/LICENSE)