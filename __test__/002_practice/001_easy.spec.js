const { logMock } = require('../index');
const {
  length,
  reverse,
  findIndex,
  split,
  sum,
  size,
  average,
  minMax,
  concat,
  seq,
  omitSeq,
  filter,
  fizzBuzz
} = require('../../002_practice/001_easy');

const origin = console.log;
afterEach(() => (console.log = origin));

describe('length', () => {
  test('normal', () => {
    expect(length('hello')).toEqual(5);
    expect(length('bar')).toEqual(3);
    expect(length('')).toEqual(0);
  });
});

describe('reverse', () => {
  test('normal', () => {
    expect(reverse('library')).toEqual('yrarbil');
    expect(reverse('work')).toEqual('krow');
    expect(reverse('')).toEqual('');
  });
});

describe('findIndex', () => {
  test('normal', () => {
    expect(findIndex('library', 'l')).toEqual(0);
    expect(findIndex('library', 'r')).toEqual(3);
    expect(findIndex('library', 'z')).toEqual(-1);
  });
});

describe('split', () => {
  test('normal', () => {
    expect(split('library', 'a')).toEqual(['libr', 'ry']);
    expect(split('banana,apple,pineapple', ',')).toEqual(['banana', 'apple', 'pineapple']);
  });
});

describe('sum', () => {
  test('normal', () => {
    expect(sum([1, 2, 3, 7])).toEqual(13);
    expect(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(55);
    expect(sum([])).toEqual(0);
  });
});

describe('average', () => {
  test('normal', () => {
    expect(average([1, 2, 3])).toEqual(2);
    expect(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(5);
    expect(average([])).toEqual(0);
  });
});

describe('size', () => {
  test('normal', () => {
    expect(size([1, 2, 3])).toEqual(3);
    expect(size([])).toEqual(0);
  });
});

describe('minMax', () => {
  let outputs = []
  beforeEach(() => {
    outputs = []
    console.log = logMock(outputs)
  });
  test('normal', () => {
    minMax([1, 9])
    minMax([-1, 1, 5, 7, 9])
    minMax([2, 2, 2, 2])
    minMax([])
    expect(outputs[0]).toEqual("max: 9, min: 1");
    expect(outputs[1]).toEqual("max: 9, min: -1");
    expect(outputs[2]).toEqual("max: 2, min: 2");
    expect(outputs.length).toEqual(3);
  });
});

describe('concat', () => {
  let outputs = []
  beforeEach(() => {
    outputs = []
    console.log = logMock(outputs)
  });
  test('normal', () => {
    expect(concat([1, 3, 7, 9], [3, 4])).toEqual([1, 3, 7, 9, 3, 4]);
    expect(concat(['h', 'o', 'm', 'e'], ['w', 'o', 'r', 'k'])).toEqual(['h', 'o', 'm', 'e', 'w', 'o', 'r', 'k']);
    expect(concat([], [])).toEqual([]);
  });
});

describe('seq', () => {
  test('normal', () => {
    expect(seq(5)).toEqual([0, 1, 2, 3, 4]);
    expect(seq(0)).toEqual([]);
  });
});

describe('omitSeq', () => {
  test('normal', () => {
    expect(omitSeq(5)).toEqual([1, 3, 5]);
    expect(omitSeq(4)).toEqual([1, 3]);
    expect(omitSeq(0)).toEqual([]);
  });
});

describe('filter', () => {
  test('normal', () => {
    expect(filter([1, 5, 7], 5)).toEqual([1, 5]);
    expect(filter([1, 5, 7], 7)).toEqual([1, 5, 7]);
    expect(filter([], 3)).toEqual([]);
  });
});

describe('fizzBuzz', () => {
  let outputs = []
  beforeEach(() => {
    outputs = []
    console.log = logMock(outputs)
  });
  test('normal', () => {
    fizzBuzz()
    for (let i = 1; i < 100; i++) {
      if ((i % 5 === 0) && (i % 3 === 0)) {
        expect(outputs[i-1]).toEqual(`${i} FizzBuzz`);
        continue
      }

      if (i % 3 === 0) {
        expect(outputs[i-1]).toEqual(`${i} Fizz`);
        continue
      }

      if (i % 5 === 0) {
        expect(outputs[i-1]).toEqual(`${i} Buzz`);
        continue
      }
    }
  });
});

