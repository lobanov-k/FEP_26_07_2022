// Functions

// function giveTwo() {
//   return 2 + 2;
// }

// const num4 = giveTwo();
// console.log(num4);

// // arguments

// function apply(num1, num2) {
//   return num1 * num2;
// }

// // console.log(num1); // error

// const result = apply(2, 3);

// console.log(result);

const arr1 = new Array("css", "html", "js");
//            0      1       2
const arr2 = ["css", "html", "js"];

// console.log(arr1);
// console.log(arr2);
// console.log(arr2.length);

arr2[3] = "jquery"; // добавление нового значения
// console.log(arr2);
arr2[1] = "react"; // изменение значения
// console.log(arr2);

// arr2 = ["python", "java"]; ERROR

[].length; // 0

arr2[arr2.length] = "python";

// console.log(arr2[arr2.length]);

// console.log(arr2);
// console.log(arr2.pop());
// console.log(arr2);

// arr2.push("python");
// arr2.push("python2");
// arr2.push("python3");
// console.log(arr2);

// console.log(arr2[0]);
const css = arr2.shift();
const js = arr2.pop();
// console.log(arr2[0]);
// console.log(css);

// delete arr2[2];
// console.log(arr2);

// const newArr = [];

// // newArr.push(1);
// // newArr[newArr.length] = 1;

// const numArr = [2, 4, 5, 6];
// let sum = 0;

// for (let i = 0; i < numArr.length; i++) {
//   sum += numArr[i]; // 0 1 2 3
//   // ===
//   // sum = sum + numArr[i];
// }

// console.log(sum);

// const matrix = [
//   [0, 1, 2], // 0
//   [3, 4, 5], // 1
//   [6, 7, 8], // 2
// ];
// // console.log(matrix[1][1]);

// let sum2 = 0;
// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     sum2 += matrix[i][j];
//     // matrix[0][0];
//     // matrix[0][1];
//     // matrix[0][2];
//   }
//   // matrix[1]
// }

// console.log(sum2);

// const string1 = "1,2,3,4,5,6";
// const arr3 = string1.split(",");
// const string2 = "123456";
// const arr4 = string2.split("");
// // console.log(arr3);
// console.log(arr4);
// const string3 = arr4.join(" + ");
// console.log(string3);

// const loremStr =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

// const loremArr = loremStr.split(" ");
// console.log(loremArr);

// const newArr2 = [];

// for (let i = 0; i < loremArr.length; i++) {
//   if (loremArr[i].length > 5) {
//     newArr2.push(loremArr[i]);
//   }
// }

// console.log(newArr2);

// const numArr = [1, 2, 6, 7, 8];

// numArr.splice(2, 0, 3, 4, 5);
// console.log(numArr);

const arrOfStrings = ["css", "html", "js"];
// arrOfStrings.splice(1, 1);
// console.log(arrOfStrings);
// const deleted = arrOfStrings.splice(1, 1, "react", "python", "java");
// console.log(arrOfStrings);
// console.log(deleted);

let arr5 = [1, 2, 15];

function sortNums(item1, item2) {
  if (item1 > item2) {
    return 1;
  }
  if (item1 === item2) {
    return 0;
  }
  if (item1 < item2) {
    return -1;
  }
}

// const sortedArr = arr5.sort(sortNums);

// const sortedArr = arr5.sort(function (item1, item2) {
//   if (item1 < item2) {
//     return 1;
//   }
//   if (item1 === item2) {
//     return 0;
//   }
//   if (item1 > item2) {
//     return -1;
//   }
// });

// console.log(sortedArr);
// console.log(arr5.reverse());

// console.log(...arr5);

// const newArr6 = [0, ...arr5, 6, 7, 10];
// console.log(newArr6);

// const newArr7 = [0, 1, 2, 3];
// const newArr8 = [4, 5, 6, 7, 8];

// const newArr5 = [...newArr7, ...newArr8];
// const newArr6 = newArr7.concat(newArr8);
// console.log(newArr6);

// someFunc(...newArr7);
// ===
// someFunc(0, 1, 2, 3);

let str = "2458453";
const newStr = str.split("").sort().join("");
console.log(newStr);

const numArr = [1, 2, 6, 7, 8];

let sum = 0;

// numArr.forEach(function (value, index, array) {
//   sum += value;
//   array[index] = sum;
// });

// console.log(numArr);

const oddArray = numArr.filter(function (value) {
  return value % 2 == 0;
});

// console.log(oddArray);

// const arr8 = [1, "0", "john", null];

// const strArray8 = arr8.filter(function (value) {
//   return typeof value === "string";
// });

// console.log(strArray8);

// const doubledArr = numArr.map(function (value) {
//   return 2 * value;
// });

// console.log(doubledArr);

// const isSomeOdd = numArr.some(function (value) {
//   console.log(value);
//   return value % 2 == 0;
// });
// console.log(isSomeOdd);

// const isEveryOdd = [2, 4, 3, 10].every(function (value) {
//   console.log(value);
//   return value % 2 == 0;
// });
// console.log(isEveryOdd);

// let sum = 0;
const sum3 = numArr.reduce(function (prev, value) {
  return prev + value;
}, 0);

console.log(sum3);
