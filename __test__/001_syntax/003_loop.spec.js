const { logMock } = require('../index');
const {
  printOneToTen,
  printOneToTenDesc,
  printOneToTenWhile,
  printOneToTenWhileDesc,
} = require('../../001_syntax/003_loop');

const origin = console.log;
afterEach(() => (console.log = origin));

describe('printOneToTen', () => {
  let outputs = [];
  beforeEach(() => {
    outputs = []
    console.log = logMock(outputs)
  });
  test('正常系', () => {
    printOneToTen();

    expect(outputs[0]).toEqual(0);
    expect(outputs[1]).toEqual(1);
    expect(outputs[2]).toEqual(2);
    expect(outputs[3]).toEqual(3);
    expect(outputs[4]).toEqual(4);
    expect(outputs[5]).toEqual(5);
    expect(outputs[6]).toEqual(6);
    expect(outputs[7]).toEqual(7);
    expect(outputs[8]).toEqual(8);
    expect(outputs[9]).toEqual(9);
    expect(outputs[10]).toEqual(10);
  });
});

describe('printOneToTenDesc', () => {
  let outputs = [];
  beforeEach(() => {
    outputs = []
    console.log = logMock(outputs)
  });
  test('正常系', () => {
    printOneToTenDesc();

    expect(outputs[0]).toEqual(10);
    expect(outputs[1]).toEqual(9);
    expect(outputs[2]).toEqual(8);
    expect(outputs[3]).toEqual(7);
    expect(outputs[4]).toEqual(6);
    expect(outputs[5]).toEqual(5);
    expect(outputs[6]).toEqual(4);
    expect(outputs[7]).toEqual(3);
    expect(outputs[8]).toEqual(2);
    expect(outputs[9]).toEqual(1);
    expect(outputs[10]).toEqual(0);
  });
});

describe('printOneToTenWhile', () => {
  let outputs = [];
  beforeEach(() => {
    outputs = []
    console.log = logMock(outputs)
  });
  test('正常系', () => {
    printOneToTenWhile();

    expect(outputs[0]).toEqual(0);
    expect(outputs[1]).toEqual(1);
    expect(outputs[2]).toEqual(2);
    expect(outputs[3]).toEqual(3);
    expect(outputs[4]).toEqual(4);
    expect(outputs[5]).toEqual(5);
    expect(outputs[6]).toEqual(6);
    expect(outputs[7]).toEqual(7);
    expect(outputs[8]).toEqual(8);
    expect(outputs[9]).toEqual(9);
    expect(outputs[10]).toEqual(10);
  });
});

describe('printOneToTenWhileDesc', () => {
  let outputs = [];
  beforeEach(() => {
    outputs = []
    console.log = logMock(outputs)
  });
  test('正常系', () => {
    printOneToTenWhileDesc();

    expect(outputs[0]).toEqual(10);
    expect(outputs[1]).toEqual(9);
    expect(outputs[2]).toEqual(8);
    expect(outputs[3]).toEqual(7);
    expect(outputs[4]).toEqual(6);
    expect(outputs[5]).toEqual(5);
    expect(outputs[6]).toEqual(4);
    expect(outputs[7]).toEqual(3);
    expect(outputs[8]).toEqual(2);
    expect(outputs[9]).toEqual(1);
    expect(outputs[10]).toEqual(0);
  });
});
