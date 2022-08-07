const varNum = 1.5;

// console.log(Math.ceil(varNum));
// console.log(Math.floor(varNum));
// console.log(Math.round(varNum));
// console.log(Math.trunc(varNum));

let varNum2 = 1.66666;

varNum2.toFixed(2);

// console.log(varNum2);

// рекомендуемое округление для денег
// console.log(Math.floor(varNum2 * 100));

// console.log(varNum2.toString(16));

const varNum3 = "a" / 3;
// console.log(isNaN(varNum3));
// console.log(isNaN("qwe"));
// console.log(isNaN("123"));

// console.log(varNum3 === varNum3); // false

// console.log(isFinite(varNum3));
// console.log(isFinite(1 / 0));
// console.log(isFinite("123"));

// console.log((Math.random() * 100).toFixed(0));

// 1 to 6

// Math.random() 0 => 1
// console.log("Random:", Math.ceil(Math.random() * 6));

// const varNum4 = 4;
// const varNum5 = 5;
// const varNum1 = 1;
// const infinity = 1 / 0;

// const min = Math.min(
//   -infinity,
//   varNum4,
//   varNum5,
//   varNum1 /* ..... varNum999 */
// );
// console.log(min);

// const max = Math.max(infinity, varNum4, varNum5, varNum1 /* ..... varNum999 */);
// console.log(max);

// const powerty = Math.pow(2, 3); // = 2**3
// console.log(powerty);

// STRINGS

let string1 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting";
// 0 to length
// console.log(string1[2]);
// console.log(string1.charAt(2));
// console.log(string1.length);

// console.log(string1.toLowerCase()); // returns new string
// console.log(string1.toUpperCase()); // returns new string

// string1 = string1.toUpperCase();

// console.log(string1.includes("some"));
// console.log(string1.includes("text"));
// console.log(string1.startsWith("Lorem"));

// console.log(string1.endsWith("typesetting"));

// console.log(string1);
// const search = "Lorem";
// string1 = string1.toUpperCase();

// console.log(string1.toUpperCase().startsWith(search.toUpperCase()));

// SEARCH
// console.log(string1.search("Lorem"));
// console.log(string1.search("not_lorem"));

// console.log(!!~string1.search("not_lorem"));
// console.log(!!~string1.search("Lorem"));

// const newStr = string1.slice(0, 1);
// const newStr = string1.slice(6);
// const newStr2 = string1.slice(
//   string1.search("Ipsum"),
//   string1.search("Ipsum") + "Ipsum".length
// );

// console.log(string1.replace("Lorem", "Ipsum"));
// console.log(string1.replace("Lorem", "1"));

// Из строки ‘lorem ipsum is simply dummy’
// создать новую строку с первой буквой в верхнем регистре.

// const string2 = "lorem ipsum is simply dummy";
// const result = string2.slice(0, 1).toUpperCase() + string2.slice(1);
// console.log(result);

// FOR

// for (let i = 0; i < 4; i++) {
//   console.log(i);
// }

// for (let i = 0; i < 40; i += 10) {
//   console.log(i);
// }

let i = 3;
while (i < 3) {
  i++;
  console.log(i);
}

// do {
//   console.log(i);
// } while (i < 3);

// С помощью цикла вывести в консоль квадраты чисел от 1 до 9

// stop
// for (let i = 1; true; i++) {
//   console.log(i);
//   if (i > 50) {
//     break;
//   }
// }

// continue
for (let i = 1; i < 10; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

// for (let i = 1; i < 100000; i *= 10) {
//   // console.log(!!(i % 2));
//   i *= 10;
//   if (i % 2) {
//     continue;
//   }
//   console.log(i);
// }

// Найти сумму всех целых чисел от 1 до 15
let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}

console.log(sum);

// Распечатать полную таблицу умножения от 1 до 10
// 2 * 1 = 2;
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    // i = 1
    // j = 1
    // j = 2
    console.log(i + " * " + j + " = " + i * j);
  }
}
