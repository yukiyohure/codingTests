const { logMock } = require('../index');
const {
  printArray,
  getDays,
  findNum,
  isDuplicate,
} = require('../../001_syntax/005_array');

const origin = console.log;
afterEach(() => (console.log = origin));

describe('printArray', () => {
  let outputs = [];
  beforeEach(() => {
    outputs = []
    console.log = logMock(outputs)
  });
  test('正常系', () => {
    printArray([1, 2, 3, 4, 5]);

    expect(outputs[0]).toEqual(1);
    expect(outputs[1]).toEqual(2);
    expect(outputs[2]).toEqual(3);
    expect(outputs[3]).toEqual(4);
    expect(outputs[4]).toEqual(5);
  });

  test('empty', () => {
    printArray([]);

    expect(outputs.length).toEqual(0);
  });
});

describe('getDays', () => {
  test('正常系', () => {
    const days = getDays();

    expect(days[0]).toEqual('Monday');
    expect(days[1]).toEqual('Tuesday');
    expect(days[2]).toEqual('Wednesday');
    expect(days[3]).toEqual('Thursday');
    expect(days[4]).toEqual('Friday');
    expect(days[5]).toEqual('Saturday');
    expect(days[6]).toEqual('Sunday');
  });
});

describe('findNum', () => {
  test('正常系', () => {
    expect(findNum([1, 2, 3], 1)).toEqual(true);
    expect(findNum([1, 2, 3], 3)).toEqual(true);
    expect(findNum([1, 2, 3], 4)).toEqual(false);
    expect(findNum([], 1)).toEqual(false);
  });
});

describe('isDuplicate', () => {
  test('正常系', () => {
    expect(isDuplicate([1, 2, 3, 2])).toEqual(true);
    expect(isDuplicate([2, 2, 2, 2])).toEqual(true);
    expect(isDuplicate([1, 2, 2, 3])).toEqual(true);
    expect(isDuplicate([1, 2, 3])).toEqual(false);
    expect(isDuplicate([])).toEqual(false);
  });
});
