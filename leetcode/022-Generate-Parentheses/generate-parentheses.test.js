const generateParenthesis = require('./generate-parentheses');

test('0', () => {
  expect(generateParenthesis(0)).toEqual(['']);
});

test('1', () => {
  expect(generateParenthesis(1)).toEqual(['()']);
});

test('2', () => {
  expect(generateParenthesis(2)).toEqual(['(())', '()()']);
});

test('4', () => {
  expect(generateParenthesis(4)).toEqual([
    '(((())))',
    '((()()))',
    '((())())',
    '((()))()',
    '(()(()))',
    '(()()())',
    '(()())()',
    '(())(())',
    '(())()()',
    '()((()))',
    '()(()())',
    '()(())()',
    '()()(())',
    '()()()()'
  ]);
});
