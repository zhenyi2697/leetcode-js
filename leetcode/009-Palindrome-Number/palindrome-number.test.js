import isPalindrome from './palindrome-number';

test('0', () => {
  expect(isPalindrome(0)).toBeTruthy();
});

test('Single number', () => {
  expect(isPalindrome(5)).toBeTruthy();
});

test('Even order number', () => {
  expect(isPalindrome(11)).toBeTruthy();
});

test('Odd order number', () => {
  expect(isPalindrome(121)).toBeTruthy();
});

test('Negative', () => {
  expect(isPalindrome(-121)).toBeFalsy();
});

test('0 ending', () => {
  expect(isPalindrome(10)).toBeFalsy();
});

test('Multiple 0 ending', () => {
  expect(isPalindrome(10)).toBeFalsy();
});

test('Even order false', () => {
  expect(isPalindrome(1234)).toBeFalsy();
});

test('Odd order false', () => {
  expect(isPalindrome(12345)).toBeFalsy();
});
