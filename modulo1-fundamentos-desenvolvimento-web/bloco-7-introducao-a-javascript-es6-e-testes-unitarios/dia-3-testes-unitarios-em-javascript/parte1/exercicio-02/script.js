const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(parseInt(arr[index]));
    }
  }
  return newArr;
}

// implemente seus testes aqui
const arr = [1, 2, 3, 4];
const item = 3;
const expected = [1, 2, 4];
assert.deepStrictEqual(myRemove(arr, item), expected);

if (myRemove(arr, item) === expected) {
  assert.strictEqual(myRemove(arr, item), expected2, 'A funcão não retorna o array errado');
}

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
 