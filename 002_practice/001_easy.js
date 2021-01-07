
/**
 *  文字列の長さ
 *
 *  lengthをも使わずに引数で渡された文字列の長さを求める関数を定義してください
 *
 *  example:
 *    'banana' => output: 6
 *    'cucumber' => output: 8
 *    '' => output: 0
 *
 */

const { objectExpression } = require("@babel/types");

function length(str) {
  let charCount = 0;
  while (str[charCount]) {
    charCount++;
  }
  return charCount;
}

/**
 *  文字列の反転
 *
 *  文字列を反転させる関数を実装してください
 *
 *  example:
 *    'library' => 'yrarbil'
 *    'krow' => 'work'
 *    'fizzbuzz' => 'zzubzzif'
 *
 */
function reverse(str) {
  let reverse = '';
  for (i=str.length; i > 0; i--) {
    reverse = reverse + str[i - 1];
  }
  return reverse;
}

/**
 *  指定された文字列の位置を返却
 *
 *  指定された文字列の位置を返却する関数を定義してください
 *
 *  example:
 *    'library', a => output: 4
 *    'work', w => output: 0
 *    'bicycle', a => output: -1
 *
 */

function findIndex(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
}

/**
 *  指定された文字列を指定された文字で分割
 *
 *  指定された文字列aを指定された一文字bで分割して配列を返却する関数を定義してください
 *
 *  example:
 *    'library', a => output: ['libr', 'ry']
 *    'apple,banana,pineapple', w => output: ['apple', 'banana', 'pineapple']
 *    'bicycle', a => output: ['bicycle']
 *
 */

function split(a, b) {
  let str = a;
  const result = [];
  for (let i = 0; i < a.length; i++) {
    if (b === str[i]) {
      result.push(str.slice(0, i)); // スタート地点の文字から「1文字目」のカウント
      str = str.slice(i + 1, str.length); // 分割した分は切り落とす
      i = 0; // iをリセットしないと。
    }
  }
  result.push(str); // 分割できて最後の余ったやつをpush or 分割できなかったからstrを丸ごと配列へin!
  return result;
}

/**
 *  配列の合計
 *
 *  渡された配列の合計を返す関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => output: 20
 *    [2, 5, 3] => output: 10
 *    [1] => output: 1
 *
 */

function sum(array) {
  return array.reduce((accum, current) => {
    return accum + current;
  }, 0);
}

/**
 *  配列の平均
 *
 *  渡された配列の合計を整数(小数切り捨て)で返す関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => output: 5
 *    [2, 5, 3] => output: 3
 *    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => output: 5
 *    [1] => output: 1
 *    [] => output: 0
 *
 */

function average(array) {
  const length = array.length;
  if (length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum = sum + array[i];
  }
  return Math.trunc(sum/length);
}

/**
 *  配列の結合
 *
 *  渡された二つの配列を連結する関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9], [3, 4] => output: [1, 3, 7, 9, 3, 4]
 *    ['h', 'o', 'm', 'e'], ['w', 'o', 'r', 'k'] => output: ['h', 'o', 'm', 'e', 'w', 'o', 'r', 'k']
 *    [], [] => output: []
 *
 */

function concat(a, b) {
  for (let i = 0; i < b.length; i++) {
    a.push(b[i]);
  }
  return a;
}

/**
 *  2.1.2 配列の個数
 *
 *  渡された配列の要素数を返す関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => output: 4
 *    [2, 5, 3] => output: 3
 *    [1] => output: 1
 *
 */

function size(array) {
  let count = 0;
  while (array[count]) {
    count ++;
  }
  return count;
}

/**
 *  2.1.3 配列の最大値と最小値
 *
 *  配列の最大値と最小値を出力する関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => max: 20, min: 1
 *    [2, 5, 3, 6, 10, -1] => max: 10, min: -1
 *    [1] => max: 1, min: 1
 *    [] => 表示しない
 *
 */

function minMax(array) {
  if (array.length === 0) {
    return;
  }
  let max = null;
  let min = null; // ここでminを0とかで決めちゃうと最小値が0のままになってしまう場合が多々ある。
  for (let i = 0; i < array.length; i++) {
    if (max === null || max < array[i]) { // なので、nullの時かどうかも条件に入れてあげる
      max = array[i];
    }
    if (min ===null || min > array[i]) { // ここも一緒
      min = array[i];
    }
  }
  console.log(`max: ${max}, min: ${min}`);
}

/**
 *  連番
 *
 *  指定された数字のまでの連番の配列を生成する関数を定義してください
 *
 *  example:
 *    5 => [0, 1, 2, 3, 4]
 *    0 => []
 *
 */

function seq(num) {
  const array = [];
  for (let i = 0; i < num; i++) {
    array.push(i);
  }
  return array;
}

/**
 *  奇数の連番
 *
 *  指定された数字までの奇数の連番の配列を生成する関数を定義してください
 *
 *  example:
 *    5 => [1, 3, 5]
 *    10 => [1, 3, 5, 7, 9]
 *    0 => []
 *
 */

function omitSeq(num) {
  const array = [];
  for (let i = 0; i <= num; i++) { // 指定された数字も含んであげましょう
    if (i % 2 === 1) {
      array.push(i);
    }
  }
  return array;
}

/**
 *  指定された数値以下の配列
 *
 *  指定された数字以下を抜き出した配列を返す関数を定義してください
 *
 *  example:
 *    [1, 7, 5, 4], 3 => [1]
 *    [1, 7, 5, 4], 7 => [1, 7, 5, 4]
 *    [], 7 => []
 *
 */

function filter(array, num) {
  let ResultArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= num) {
      ResultArray.push(array[i]);
    }
  }
  return ResultArray;
}



/**
 *  Fizz Buzz
 *
 *  1から100の数字までをカウントして、数字が3の倍数の場合にFizz
 *  5の倍数の場合にBuzz、3と5の倍数の時にFizzBuzzと表示する関数を実装してください。
 *
 *  example:
 *    1
 *    2
 *    3 Fizz
 *    4
 *    5 Buzz
 *    6
 *    7
 *    ..
 *    15 FizzBuzz
 *    ..
 *    18 Fizz
 *    ...
 *    30 FizzBuzz
 *    ...
 */

function fizzBuzz () {
  for (let i = 1; i <= 100; i++) {
    console.log(`${i} ` + (i % 3 === 0 ? 'Fizz' : '') + (i % 5 === 0 ? 'Buzz' : '')); // ${i}の隣スペースを入れることをお忘れなく。
  }
}

module.exports = {
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
  filter,
  omitSeq,
  fizzBuzz
}
