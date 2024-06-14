import { test, expect } from 'vitest';
import { zip } from 'src';

test('zip with numbers and strings', () => {
  const result1: [number, string][] = [];
  for (const [a, b] of zip([1, 2, 3], 'abc')) {
    result1.push([a, b]);
  }
  expect(result1).toEqual([
    [1, 'a'],
    [2, 'b'],
    [3, 'c'],
  ]);
});

test('zip with numbers and numbers', () => {
  const result2: [number, number][] = [];
  for (const [a, b] of zip([1, 2, 3], [4, 5, 6])) {
    result2.push([a, b]);
  }
  expect(result2).toEqual([
    [1, 4],
    [2, 5],
    [3, 6],
  ]);
});

test('zip with unequal length arrays', () => {
  const result3: [number, string][] = [];
  for (const [a, b] of zip([1, 2], 'abcdef')) {
    result3.push([a, b]);
  }
  expect(result3).toEqual([
    [1, 'a'],
    [2, 'b'],
  ]);
});

test('zip with empty arrays', () => {
  const result4: [any, any][] = [];
  for (const [a, b] of zip([], [])) {
    result4.push([a, b]);
  }
  expect(result4).toEqual([]);
});

test('zip with one empty array', () => {
  const result5: [number, string][] = [];
  for (const [a, b] of zip([1, 2, 3], [])) {
    result5.push([a, b]);
  }
  expect(result5).toEqual([]);
});

test('zip with strings of different lengths', () => {
  const result6: [number, string][] = [];
  for (const [a, b] of zip([1, 2, 3, 4], 'ab')) {
    result6.push([a, b]);
  }
  expect(result6).toEqual([
    [1, 'a'],
    [2, 'b'],
  ]);
});

test('zip with nested arrays', () => {
  const result7: [number[], string][] = [];
  for (const [a, b] of zip([[1], [2], [3]], 'xyz')) {
    result7.push([a, b]);
  }
  expect(result7).toEqual([
    [[1], 'x'],
    [[2], 'y'],
    [[3], 'z'],
  ]);
});

test('zip with numbers and mixed types', () => {
  const result8: [number, any][] = [];
  for (const [a, b] of zip([1, 2, 3], ['a', 2, { c: 3 }])) {
    result8.push([a, b]);
  }
  expect(result8).toEqual([
    [1, 'a'],
    [2, 2],
    [3, { c: 3 }],
  ]);
});

test('zip with objects and arrays', () => {
  const result9: [{ a: number }, number[]][] = [];
  for (const [a, b] of zip(
    [{ a: 1 }, { a: 2 }],
    [
      [1, 2],
      [3, 4],
    ]
  )) {
    result9.push([a, b]);
  }
  expect(result9).toEqual([
    [{ a: 1 }, [1, 2]],
    [{ a: 2 }, [3, 4]],
  ]);
});

test('zip with numbers and letters', () => {
  const result: [number, string][] = [];
  for (const [number, letter] of zip([1, 2, 3], ['a', 'b', 'c'])) {
    result.push([number, letter]);
  }
  expect(result).toEqual([
    [1, 'a'],
    [2, 'b'],
    [3, 'c'],
  ]);
});

test('zip with lengths and characters', () => {
  const result: string[] = [];
  for (const [length, char] of zip([1, 2, 3], 'abc')) {
    result.push(char.repeat(length));
  }
  expect(result).toEqual(['a', 'bb', 'ccc']);
});

test('zip with short and long iterables', () => {
  const result: [number, string][] = [];
  for (const [num, char] of zip([1, 2], 'abcdef')) {
    result.push([num, char]);
  }
  expect(result).toEqual([
    [1, 'a'],
    [2, 'b'],
  ]);
});

test('zip with different types', () => {
  const result: [number, any][] = [];
  for (const [num, item] of zip([1, 2, 3], ['a', 2, { key: 'value' }])) {
    result.push([num, item]);
  }
  expect(result).toEqual([
    [1, 'a'],
    [2, 2],
    [3, { key: 'value' }],
  ]);
});

test('zip with nested iterables', () => {
  const result: [number[], string][] = [];
  for (const [arr, char] of zip([[1], [2], [3]], 'xyz')) {
    result.push([arr, char]);
  }
  expect(result).toEqual([
    [[1], 'x'],
    [[2], 'y'],
    [[3], 'z'],
  ]);
});

test('zip with empty iterables', () => {
  const result: [any, any][] = [];
  for (const [a, b] of zip([], [1, 2, 3])) {
    result.push([a, b]);
  }
  expect(result).toEqual([]);
});
