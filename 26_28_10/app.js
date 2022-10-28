async function f() {
  alert("Im promise!");
}

// const asyncReturn = f();
// console.log(asyncReturn);

const promise = new Promise((res) => {
  setTimeout(() => res("promise resolved"), 1000);
});

async function asyncFunc() {
  const promiseResult = await promise;
  // const promiseResult2 = await promise2;
  console.log(promiseResult);
}

// asyncFunc();

// promise
//   .then((data) => console.log(data))
//   .then((data2) => {
//     // ...
//   });

async function renderPhoto() {
  const response = await fetch("https://api.github.com/users/lobanov-k");
  const data = await response.json();

  console.log(data);
}

// renderPhoto();

try {
  user[1];
} catch (error) {
  console.log(`${error.name}; ${error.message}; ${error.stack}`);
}
// console.log("Other code ...");

// const user2 = {
//   name: "Bob",
//   addres: {
//     street: "Johanstrasse 8",
//   },
// };
const user1 = { name: "Bob" };

let street;
try {
  street = user1.addres.street;
} catch (e) {
  // console.log(e.message);
  street = "uknown";
}

console.log(street);

const problemUrl = "https://api.github.com/users/lobanov-k";

const renderAvatar = async () => {
  try {
    const response = await fetch(problemUrl);
    const data = await response.json();

    document.querySelector(
      ".avatar"
    ).innerHTML = `<img src="${data.avatar_url.url.url}" />`;
  } catch {
    document.querySelector(".avatar").innerHTML = `<img src="" alt="uknown" />`;
  } finally {
    // console.log("Anyway we rendered something");
  }
};

renderAvatar();

class CustomError extends Error {
  constructor(args) {
    super(args);

    this.dateTime = new Date();
    this.message = args.message;
    this.name = args.name;
    this.stack = args.stack;
  }
}

function App() {
  console.log("code of all website");

  function foo() {
    throw new Error("my error 1");
  }

  foo();
}

function logger(message) {
  console.log(message);
}

try {
  App();
} catch (e) {
  logger(e.message);
}

const user2 = { name: "Bob" };

const street2 = user2?.addres?.street;
// const street2 = user2 && user2.addres && user2.addres.street;

console.log(street2);

// console.log(!!~["a", "b", "c"].indexOf("a"));
// console.log(!!~["a", "b", "c"].indexOf("d"));
// console.log(["a", "b", "c"].some((item) => item === "d"));
// console.log(!!~["a", "b", "c"].findIndex((item) => item === "d"));

const someVar = "d";

if (["a", "b", "c"].includes(someVar)) {
  // console.log("Action if someVar was one of a, b, c");
}

let value1 = "";
let result = value1 ?? "default value"; // set default value if value1 null or undefined
console.log(result);

result = value1 || "default value"; // set default value if value1 falsy (0, '', null, undefined, false)

const arr = [10, 8, 0, 1];
console.log(arr.at(-1));
// equivalent
console.log(arr[arr.length - 1]);

const input = "1234";
let str = input.padStart(8, "abc");
console.log(str); // "00001234"

console.log(input.padEnd(8));

const objA = { a: "a" };
const objB = { b: "b" };

const links = new Map();

links.set(objA, objB);

console.log(links.get(objA));
