const { logMock } = require("../index");
const {
  printMessageByAge,
  greeding,
  getDay
} = require("../../001_syntax/002_condition");

const origin = console.log;
afterEach(() => (console.log = origin));

describe("printMessageByAge", () => {
  let outputs = [];
  beforeEach(() => {
    outputs = [];
    console.log = logMock(outputs);
  });
  test("成年の場合", () => {
    printMessageByAge(20);

    expect(outputs[0]).toEqual("成年です。");
  });

  test("未成年の場合", () => {
    printMessageByAge(19);

    expect(outputs[0]).toEqual("未成年です。");
  });
});

describe("greeding", () => {
  let outputs = [];
  beforeEach(() => {
    outputs = [];
    console.log = logMock(outputs);
  });
  test("朝の場合", () => {
    greeding(4);
    greeding(11);
    expect(outputs[0]).toEqual("Good Morning");
    expect(outputs[1]).toEqual("Good Morning");
  });

  test("昼の場合", () => {
    greeding(12);
    greeding(16);
    expect(outputs[0]).toEqual("Hello");
    expect(outputs[1]).toEqual("Hello");
  });

  test("夜の場合", () => {
    greeding(17);
    greeding(3);
    expect(outputs[0]).toEqual("Good Night");
    expect(outputs[1]).toEqual("Good Night");
  });
});

describe("getDay", () => {
  let outputs = [];
  beforeEach(() => {
    outputs = [];
    console.log = logMock(outputs);
  });
  test("任意の曜日", () => {
    for (let i = 0; i < 7; i++) {
      getDay(i);
    }
    expect(outputs[0]).toEqual("Sunday");
    expect(outputs[1]).toEqual("Monday");
    expect(outputs[2]).toEqual("Tuesday");
    expect(outputs[3]).toEqual("Wednesday");
    expect(outputs[4]).toEqual("Thursday");
    expect(outputs[5]).toEqual("Friday");
    expect(outputs[6]).toEqual("Saturday");
  });
  test("存在しない添字", () => {
    getDay(7);
    expect(outputs.length).toEqual(0);
  });
});
