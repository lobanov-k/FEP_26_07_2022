// const varNumber1 = "12345";

// const r1 = varNumber1 % 10;
// const r2 = ((varNumber1 - r1) / 10) % 10;

// console.log(r1);
// console.log(r2);

// console.log(varNumber1[4]);

// 2 + "2";
// Boolean(0);

// Boolean(2 / "n2");

// console.log(Boolean(" ")); // true
// console.log(Boolean("2") || Boolean(0));
// console.log(0 || 0);

// const number1 = 0;
// const number2 = 0;
// const number3 = 0;

// console.log(number1 || number2 || number3);

// const number1 = 2;
// const number2 = "";

// console.log(
//   number1 &&
//     setTimeout(() => {
//       // ifSmth && doSmth();
//       console.log("2sec");
//     }, 2000)
// );

// !"";
// !"2";
// !-5; // false
// Boolean(-5); // true

// console.log(!!1);

// let user = false;
// console.log(user ?? "anonnymus");

// let user2;
// console.log(user2 ?? null ?? "string");

// let varNum1 = 10;
// varNum1 -= 2;
// console.log(varNum1);

// const number = prompt();

// if (!(number % 2)) {
//   console.log("odd"); // четного
// }

// if (number % 2) {
//   console.log("even"); // нечетного
// }

// if (number % 2) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// const hours = parseInt(prompt());
// if (hours < 6) {
//   console.log("early morning");
// } else if (hours < 12) {
//   console.log("morning");
// } else if (hours < 20) {
//   console.log("day");
// } else {
//   console.log("evening");
// }

// let price = 1000;
// if (price >= 1000) {
//   price *= 0.95;
// }

// const price = 1000;
// const finalPrice = price >= 1000 ? price * 0.95 : price;
// console.log(finalPrice);

// const age = parseInt(prompt("How old are you?"));
// const accessAllowed = age > 18 && age < 60 ? true : false;
// // const accessAllowed = age > 18 && age < 60;
// console.log(accessAllowed);

const num = 2 + 2;

switch (num) {
  case 5:
    console.log("too little");
    break;
  case 4:
    console.log("good");
    break;
  default:
    console.log("error");
}

const post = "Nova Poshta";
let price;

switch (post) {
  case "Nova Poshta":
    price = 40;
    break;

  case "Meest":
    price = 40;
    break;

  case "DHL":
    price = 150;
    break;

  default:
    price = 0;
}

// switch (post) {
//   case "Nova Poshta":
//   case "Meest":
//     price = 40;
//     break;

//   case "DHL":
//     price = 150;
//     break;

//   default:
//     price = 0;
// }
