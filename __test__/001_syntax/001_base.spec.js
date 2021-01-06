const { logMock } = require('../index');
const {
  helloWorld,
  displayLet,
  displayConst,
  displayArgument,
  sumTwoArgs,
  subtractTwoArgs,
  quotientTwoArgs,
  productTwoArgs,
  remainderTwoArgs,
  isEven,
  concatString
} = require('../../001_syntax/001_base');

const origin = console.log;
afterEach(() => (console.log = origin));

describe('helloWorld', () => {
  let outputs = [];
  beforeEach(() => (console.log = logMock(outputs)));
  test('call console.log', () => {
    helloWorld();

    expect(outputs[0]).toEqual('Hello World');
  });
});

describe('displayConst', () => {
  let outputs = [];
  beforeEach(() => (console.log = logMock(outputs)));
  test('display output', () => {
    displayConst();
    expect(outputs[0]).toEqual('hoge');
  });
});

describe('displayLet', () => {
  let outputs = [];
  beforeEach(() => (console.log = logMock(outputs)));
  test('display output', () => {
    displayLet();
    expect(outputs[0]).toEqual('hoge');
  });
});

describe('displayArgument', () => {
  let outputs = [];
  beforeEach(() => (console.log = logMock(outputs)));
  test('display output', () => {
    displayArgument('hoge');
    expect(outputs[0]).toEqual('hoge');
  });
});

describe('sumTwoArgs', () => {
  test('addition postive', () => {
    expect(sumTwoArgs(1, 2)).toEqual(3)
  });
  test('addition zero', () => {
    expect(sumTwoArgs(0, 0)).toEqual(0)
  });
  test('addition negative', () => {
    expect(sumTwoArgs(-1, -2)).toEqual(-3)
  });
});

describe('subtractTwoArgs', () => {
  test('subtraction postive', () => {
    expect(subtractTwoArgs(3, 2)).toEqual(1)
  });
  test('subtraction zero', () => {
    expect(subtractTwoArgs(3, 0)).toEqual(3)
  });
  test('subtraction negative', () => {
    expect(subtractTwoArgs(-3, -5)).toEqual(2)
  });
});

describe('quotientTwoArgs', () => {
  test('normal divide', () => {
    expect(quotientTwoArgs(3, 2)).toEqual(1)
  });
  test('zero divide', () => {
    expect(quotientTwoArgs(3, 0)).toEqual(null)
  });
});

describe('productTwoArgs', () => {
  test('normal multiple', () => {
    expect(productTwoArgs(3, 2)).toEqual(6)
  });
  test('negative multiple', () => {
    expect(productTwoArgs(-3, 2)).toEqual(-6)
  });
});

describe('remainderTwoArgs', () => {
  test('normal', () => {
    expect(remainderTwoArgs(3, 2)).toEqual(1)
    expect(remainderTwoArgs(4, 2)).toEqual(0)
    expect(remainderTwoArgs(-2, 2)).toEqual(-0)
    expect(remainderTwoArgs(-1, 2)).toEqual(-1)
    expect(remainderTwoArgs(12345, 2)).toEqual(1)
  });
});

describe('isEven', () => {
  test('is even', () => {
    expect(isEven(0)).toEqual(true)
    expect(isEven(2)).toEqual(true)
    expect(isEven(-4)).toEqual(true)
    expect(isEven(2842)).toEqual(true)
  });
  test('is odd', () => {
    expect(isEven(1)).toEqual(false)
    expect(isEven(-1)).toEqual(false)
    expect(isEven(3)).toEqual(false)
    expect(isEven(127)).toEqual(false)
  });
});

describe('concatString', () => {
  test('concat', () => {
    expect(concatString("abc", "def")).toEqual("abcdef")
    expect(concatString("abc", "")).toEqual("abc")
  });
});