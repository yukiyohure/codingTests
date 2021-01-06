const {logMock} = require('../index');
const {
  linearSearch,
  binarySearch
} = require('../../003_algorithm/002_search');

const origin = console.log;
afterEach(() => (console.log = origin));

describe('linearSearch', () => {
  test('normal', () => {
    expect(linearSearch([1, 3, 2, 4, 5], 3)).toEqual(1);
    expect(linearSearch([1, 3, 2, 4, 5], 6)).toEqual(-1);
  });
});

describe('binarySearch', () => {
  test('normal', () => {
    expect(linearSearch([1, 10, 20, 30, 40, 50, 90, 100], 40)).toEqual(4);
    expect(linearSearch([1, 10, 20, 30, 40, 50, 90, 100], 110)).toEqual(-1);
  });
});

