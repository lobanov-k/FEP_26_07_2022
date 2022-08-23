const array = [1, 2, 3, 4, 5];

// const addToArray = (arr, value) => {
// if (arr.includes(value)) {
//   return arr;
// }
// return [...arr, value];
// };

const addToArray = (arr, value) =>
  arr.includes(value) ? arr : [...arr, value];

// function addToArray(arr, value) {
//   return arr.includes(value) ? arr : [...arr, value];
// }

const arrNew = addToArray(array, 2); // [1, 2, 3, 4, 5]
const arrNew2 = addToArray(array, 8); // [1, 2, 3, 4, 5]
// console.log(arrNew);
// console.log(arrNew2);

function init() {
  let name = "Test"; // локальная переменная

  function displayName() {
    // внутренняя функция
    alert(name); // использует переменную из родительской функции
    console.log(arrNew2);
  }

  displayName();
}

// init();

function createCounter() {
  let count = 0;

  function counter() {
    return ++count;
  }

  return counter;
}

const counter1 = createCounter(); // counter = 0
counter1();
counter1();
counter1();

const counter2 = createCounter(); // counter = 0
counter2();
counter2();

// console.log("counter1", counter1());
// console.log("counter2", counter2());

function pow(x, n) {
  let returnValue = x;
  for (let i = 1; i < n; i++) {
    returnValue *= x;
  }
  return returnValue;
}

// console.log(pow(2, 1));
// console.log(pow(2, 3));

function powRec(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * powRec(x, n - 1);
  }
}

// console.log(powRec(3, 3));

// [1] x = 3 n = 3
//   3 *
// [2] x = 3 n = 2
//        3 *
// [3] x = 3 n = 1
//             3

// factorial(3) = 3 + 2 + 1
// factorial(5) = 5 + 4 + 3 + 2 + 1

// pure functions
const add = (x, y) => x + y;

// not pure
const add2 = (x, y) => {
  return (x += y);
};

// pure adding of property to object

const obj1 = {
  name: "a1",
  number: 2,
  links: {
    a: "a",
  },
};

// add isNew: true

// not pure
// obj1[isNew] = true;

const obj2 = Object.assign(obj1, { isNew: true });

// pure
const pureObj = Object.assign({}, obj1, { isNew: true });
const pureObj2 = { ...obj1, isNew: true };

function copyObj(obj) {
  // создаем новый объект
  const newObj = {};

  for (key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      // если свойство объекта является вложенным объектом, то передаем в рекурсивный вызов
      newObj[key] = copyObj(obj[key]);
    } else {
      // если это обычное свойство, то просто копируем
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

const newObj = copyObj(obj1);
