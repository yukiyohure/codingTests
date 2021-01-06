const { logMock } = require('../index');
const {
  getPersonObject,
  mutateObject,
  assignNumber,
  isDuplicate,
} = require('../../001_syntax/006_object');

const origin = console.log;
afterEach(() => (console.log = origin));

describe('getPersonObject', () => {
  test('正常系', () => {
    const res = getPersonObject()
    expect(res.name).toEqual("Bob");
    expect(res.age).toEqual(32);
    expect(res.gender).toEqual("male");
  });
});

describe('mutateObject', () => {
  test('正常系', () => {
    const res = mutateObject({ name: 'Bob', age: 32, gender: 'male' })
    expect(res.name).toEqual("Mary");
    expect(res.age).toEqual(37);
    expect(res.gender).toEqual("female");
    expect(Object.keys(res).length).toEqual(3);
  });
});

describe('assignNumber', () => {
  test('正常系', () => {
    let res = assignNumber(['Bob', 'Mary', 'Ann', 'Mike'])

    expect(res.Bob).toBeGreaterThan(0);
    expect(res.Mary).toBeGreaterThan(0);
    expect(res.Ann).toBeGreaterThan(0);
    expect(res.Mike).toBeGreaterThan(0);

    res = assignNumber(['paris', 'tokyo', 'newyork', 'london'])

    expect(res.paris).toBeGreaterThan(0);
    expect(res.tokyo).toBeGreaterThan(0);
    expect(res.newyork).toBeGreaterThan(0);
    expect(res.london).toBeGreaterThan(0);
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
