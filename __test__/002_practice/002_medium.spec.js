const { logMock } = require('../index');
const {
  rotate,
  removeVowels,
  countStr,
  isPalindrome,
  isPrime,
  sumWithout4andNext
} = require('../../002_practice/002_medium');

const origin = console.log;
afterEach(() => (console.log = origin));

describe('rotate', () => {
  test('normal', () => {
    expect(rotate('library', 1)).toEqual('ylibrar');
    expect(rotate('library', 3)).toEqual('arylibr');
    expect(rotate('library', -1)).toEqual('ibraryl');
  });
});

describe('removeVowels', () => {
  test('normal', () => {
    expect(removeVowels('library')).toEqual('lbrry');
    expect(removeVowels('apple')).toEqual('ppl');
    expect(removeVowels('banana')).toEqual('bnn');
  });
});

describe('countStr', () => {
  test('normal', () => {
    expect(countStr('abcdabeabcl', 'abc')).toEqual(2);
    expect(countStr('abc', 'abc')).toEqual(1);
    expect(countStr('hogehooge', 'hoge')).toEqual(1);
  });
});

describe('isPalindrome', () => {
  test('normal', () => {
    expect(isPalindrome('work')).toEqual(false);
    expect(isPalindrome('level')).toEqual(true);
    expect(isPalindrome('')).toEqual(true);
  });
});

describe('isPrime', () => {
  test('normal', () => {
    expect(isPrime(1)).toEqual(false);
    expect(isPrime(2)).toEqual(true);
    expect(isPrime(11)).toEqual(true);
    expect(isPrime(967)).toEqual(true);
    expect(isPrime(4)).toEqual(false);
    expect(isPrime(123)).toEqual(false);
  });
});

describe('sumWithout4andNext', () => {
  test('normal', () => {
    expect(sumWithout4andNext([1, 2, 3, 4])).toEqual(6);
    expect(sumWithout4andNext([1, 2, 3, 4, 5])).toEqual(6);
    expect(sumWithout4andNext([1, 4, 3, 4, 5])).toEqual(1);
    expect(sumWithout4andNext([4, 3, 3, 5])).toEqual(8);
    expect(sumWithout4andNext([4, 4, 4, 4])).toEqual(0);
  });
});

