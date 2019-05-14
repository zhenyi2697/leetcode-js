const letterCombinations = require('./letter-combination-of-a-phone-number');

test('Empty input', () => {
  expect(letterCombinations('')).toEqual([]);
});

test('Single input', () => {
  expect(letterCombinations('2')).toEqual(['a', 'b', 'c']);
});

test('2 elements', () => {
  expect(letterCombinations('23')).toEqual([
    'ad',
    'ae',
    'af',
    'bd',
    'be',
    'bf',
    'cd',
    'ce',
    'cf'
  ]);
});

test('Multiple elements', () => {
  expect(letterCombinations('268')).toEqual([
    'amt',
    'amu',
    'amv',
    'ant',
    'anu',
    'anv',
    'aot',
    'aou',
    'aov',
    'bmt',
    'bmu',
    'bmv',
    'bnt',
    'bnu',
    'bnv',
    'bot',
    'bou',
    'bov',
    'cmt',
    'cmu',
    'cmv',
    'cnt',
    'cnu',
    'cnv',
    'cot',
    'cou',
    'cov'
  ]);
});
