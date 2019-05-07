const threeSum = require('./3sum');

test('Empty input', () => {
  expect(threeSum([])).toEqual([]);
});

test('No solution', () => {
  expect(threeSum([1, 2, 3])).toEqual([]);
});

test('Single solution', () => {
  expect(threeSum([1, -3, 2])).toEqual([[-3, 1, 2]]);
});

test('Multi solutions', () => {
  const validSolutions = new Set(
    [[-1, 0, 1], [-1, -1, 2]].map(r => r.join('_'))
  );
  const results = threeSum([-1, 0, 1, 2, -1, -4]);
  results.map(r => expect(validSolutions.has(r.join('_'))).toBeTruthy());
});

test('Multi solutions with repeating chars', () => {
  const validSolutions = new Set(
    [[-4, 1, 3], [-3, 0, 3], [-3, 1, 2], [-1, 0, 1]].map(r => r.join('_'))
  );
  const results = threeSum([-3, 0, 1, 1, 2, -1, -4, 3, 3]);
  results.map(r => expect(validSolutions.has(r.join('_'))).toBeTruthy());
});
