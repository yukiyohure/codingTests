const { logMock } = require('../index');
const {
  length,
  lengthIsEven,
  firstChar,
  lastChar,
  substring,
  isInclude,
  printByChar,
} = require('../../001_syntax/004_string');

const origin = console.log;
afterEach(() => (console.log = origin));

describe('length', () => {
  test('正常系', () => {
    expect(length('abcd')).toEqual(4)
    expect(length('')).toEqual(0)
    expect(length('abcdefghijklmnopqrstuvwxyz')).toEqual(26)
  });
});

describe('lengthIsEven', () => {
  test('偶数の場合', () => {
    expect(lengthIsEven('abcd')).toEqual(true)
    expect(lengthIsEven('')).toEqual(true)
    expect(lengthIsEven('abcdefghijklmnopqrstuvwxyz')).toEqual(true)
  });
  test('奇数の場合', () => {
    expect(lengthIsEven('a')).toEqual(false)
    expect(lengthIsEven('aaa')).toEqual(false)
    expect(lengthIsEven('aaabb')).toEqual(false)
  });
});

describe('firstChar', () => {
  test('normal', () => {
    expect(firstChar('abcd')).toEqual('a')
    expect(firstChar('')).toEqual('')
  });
});

describe('lastChar', () => {
  test('normal', () => {
    expect(lastChar('abcd')).toEqual('d')
    expect(lastChar('')).toEqual('')
  });
});

describe('substring', () => {
  test('normal', () => {
    expect(substring('abcd', 1, 2)).toEqual('ab')
    expect(substring('abcd', 1, 4)).toEqual('abcd')
    expect(substring('abcd', 1, 5)).toEqual('abcd')
    expect(substring('', 1, 2)).toEqual('')
  });
});

describe('isInclude', () => {
  test('normal', () => {
    expect(isInclude('abcd', 'ab')).toEqual(true)
    expect(isInclude('abcd', '')).toEqual(true)
    expect(isInclude('', 'ab')).toEqual(false)
    expect(isInclude('efghaeb', 'ab')).toEqual(false)
  });
});

describe('printByChar', () => {
  let outputs = [];
  beforeEach(() => {
    outputs = []
    console.log = logMock(outputs)
  });
  test('string', () => {
    printByChar('abcdefg')

    expect(outputs[0]).toEqual('a')
    expect(outputs[1]).toEqual('b')
    expect(outputs[2]).toEqual('c')
    expect(outputs[3]).toEqual('d')
    expect(outputs[4]).toEqual('e')
    expect(outputs[5]).toEqual('f')
    expect(outputs[6]).toEqual('g')
  });

  test('string', () => {
    printByChar('1234567890')

    expect(outputs[0]).toEqual('1')
    expect(outputs[1]).toEqual('2')
    expect(outputs[2]).toEqual('3')
    expect(outputs[3]).toEqual('4')
    expect(outputs[4]).toEqual('5')
    expect(outputs[5]).toEqual('6')
    expect(outputs[6]).toEqual('7')
    expect(outputs[7]).toEqual('8')
    expect(outputs[8]).toEqual('9')
    expect(outputs[9]).toEqual('0')
  });
});

