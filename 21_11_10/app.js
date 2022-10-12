let [firstName, lastName] = ["Иван", "Пупкин"];
// alert(firstName); // Иван
// alert(lastName);

//
const dataFromApi = ["2def3", "name of data", 1111];
dataFromApi[0]; // id
// [
//   ["nameProperty", "valueproprty"],
//   ["nameProperty2", "valueproprty2"],
//   ["nameProperty3", "valueproprty3"],
// ];

const [id, text, counter] = dataFromApi;

console.log(id);

const someObj = { name: "Kostia", age: 30 };

const { name: name2, age } = someObj;

console.log(name2);
console.log(age);

const carData = {
  brand: "VW",
  engine: {
    power: 200,
    fuel: "e10",
  },
};

const {
  engine: { power: horsePower },
  brand,
} = carData;

console.log(horsePower);

let [firstName1, lastName2, ...info] = [
  "Иван",
  "Пупкин",
  "front-end",
  "junior",
];

console.log(firstName1);
console.log(lastName2);
console.log(info);

const articleData = {
  title: "new article",
  text: "some text",
  id: 1,
  author: "John",
};

const {
  title,
  text: articleText,
  ...articleProps // {...}
} = articleData;

console.log(title);
console.log(articleText);
console.log(articleProps.id);

const copiedObj = { ...articleData };
console.log(copiedObj);

console.log(...info);

const newArray = ["kostia", "6 year", ...info];
console.log(newArray);

const copy = newArray;
const copyTrue = [...newArray];

console.log(copy === newArray);
console.log(copyTrue === newArray);

function log(dateTime, error, ...info) {
  console.log(dateTime, error, info);
}

log("11-10-2022", "Wrong username");
log("11-10-2022", "Wrong credentials", "missed password");

function calcPrice(amount, discount = 0.05) {
  return amount * (1 - discount);
}

console.log(calcPrice(100));
console.log(calcPrice(100, 0.1));

const doSmt = (a, b) => {
  return a + b;
};

const doSmt2 = (a, b) => a + b;

info.forEach((item) => {
  console.log(item);
});

let group = {
  title: "Наш курс",
  students: ["Вася", "Петя", "Даша"],
  showList: function () {
    this.students.forEach((student) => {
      console.log(this.title + ": " + student);
    });
  },
  showList2: function () {
    // const that = this;
    const { title } = this;

    this.students.forEach(function (student) {
      console.log(title + ": " + student);
    });
  },
};

// group.showList();
group.showList2();

console.log(`data: ${firstName}, ${lastName}`);
console.log("data: " + firstName + ", " + lastName);

const mapData = new Map();

const objA = { a: 1 };
const arrB = ["b", 2];

mapData.set(objA, "value 1");
mapData.set(arrB, "value 2");
mapData.set("key2", "simple value 3");

mapData.delete(arrB);

console.log(mapData.get(arrB));

console.log(mapData.size);

let recipeMap = new Map([
  ["Огурец", 500],
  ["Помидор", 350],
  ["Лук", 50],
]);

console.log(recipeMap.keys()); // all keys of map
console.log(recipeMap.values()); // all values of map

for (let key of recipeMap.keys()) {
  console.log(key);
}

for (let value of recipeMap.values()) {
  console.log(value);
}

const arr = [];
for (let entry of recipeMap) {
  // [ "key", "value" ]
  const [key, value] = entry;
  console.log(key, value);
  arr.push(value);
}

const numbersArr = [1, 2, 3, 4, 4, 2, 5];
const numbersSet = new Set(numbersArr);

numbersSet.add(8);
numbersSet.add(8);

numbersSet.delete(4);

console.log(numbersSet.has(1));

for (let entry of numbersSet) {
  console.log(entry);
  arr.push(entry);
}

console.log(...numbersSet.values());

const arr2 = [...numbersSet.values()];

function showPrice(price) {
  console.log(`Price: ${price}`);
}

function showPriceToUser(amount, discount, showPriceCallback) {
  const finalAmount = amount * (1 - discount);
  showPriceCallback(finalAmount);
  return finalAmount;
}

showPriceToUser(1000, 0.02, showPrice);

const promise = new Promise((resolved, reject) => {
  setTimeout(() => {
    resolved(42);
  }, 500);
});

promise.then((data) => console.log(data));

const promiseError = new Promise((resolved, rejected) => {
  setTimeout(() => rejected(10), 100);
});

promiseError.catch((data) => console.log(data));

const secretPromise = new Promise((res, rej) => {
  setTimeout(() => {
    const random = Math.random();
    console.log(random);
    random > 0.5 ? res({ status: 200 }) : rej({ error: "400" });
  }, 1000);
});

secretPromise
  .then(({ status }) => console.log("SUCCESS!", status))
  .catch(({ error }) => console.error("OOOOPS!", error))
  .finally(() => console.log("Promise fullfilled"));
