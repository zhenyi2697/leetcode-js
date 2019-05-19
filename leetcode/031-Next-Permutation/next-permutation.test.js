const nextPermutation = require('./next-permutation');

test('Empty', () => {
  const nums = [];
  nextPermutation(nums);
  expect(nums).toEqual([]);
});

test('Single elemnt', () => {
  const nums = [1];
  nextPermutation(nums);
  expect(nums).toEqual([1]);
});

test('All equal elements', () => {
  const nums = [1, 1, 1];
  nextPermutation(nums);
  expect(nums).toEqual([1, 1, 1]);
});

test('Reverse order', () => {
  const nums = [3, 2, 1];
  nextPermutation(nums);
  expect(nums).toEqual([1, 2, 3]);
});

test('Reverse order even number of elements', () => {
  const nums = [4, 3, 2, 1];
  nextPermutation(nums);
  expect(nums).toEqual([1, 2, 3, 4]);
});

test('Reverse order with equal elements', () => {
  const nums = [4, 3, 2, 2, 1, 1];
  nextPermutation(nums);
  expect(nums).toEqual([1, 1, 2, 2, 3, 4]);
});

test('Ascending order', () => {
  const nums = [1, 2, 3, 4, 5];
  nextPermutation(nums);
  expect(nums).toEqual([1, 2, 3, 5, 4]);
});

test('Ascending order with equal elements', () => {
  const nums = [1, 2, 3, 4, 5, 5];
  nextPermutation(nums);
  expect(nums).toEqual([1, 2, 3, 5, 4, 5]);
});

test('Element to swap is in the middle', () => {
  const nums = [1, 5, 8, 4, 7, 6, 5, 3, 1];
  nextPermutation(nums);
  expect(nums).toEqual([1, 5, 8, 5, 1, 3, 4, 6, 7]);
});
