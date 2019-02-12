import isValid from './valid-parentheses';

test('Empty', () => {
  expect(isValid('')).toBeTruthy();
});

test('Single', () => {
  expect(isValid('[')).toBeFalsy();
});

test('Single valid parentheses', () => {
  expect(isValid('()')).toBeTruthy();
});

test('Single valid brackets', () => {
  expect(isValid('[]')).toBeTruthy();
});

test('Single valid curly braces', () => {
  expect(isValid('{}')).toBeTruthy();
});

test('Single invalid', () => {
  expect(isValid('[)')).toBeFalsy();
});

test('Multiple valid', () => {
  expect(isValid('()[]{}')).toBeTruthy();
});

test('Mixed parenthess', () => {
  expect(isValid('[{}]')).toBeTruthy();
});

test('Mixed parenthess', () => {
  expect(isValid('{[{}]()}')).toBeTruthy();
});

test('Mixed invalid', () => {
  expect(isValid('([)]')).toBeFalsy();
});
