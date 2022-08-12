"use strict";

const object = {
  age: "25",
};

const object2 = {
  age: "25",
  name: "John",
  lastname: "Doe",
  "firstname lastname": "John Doe",
};

object2.address = "Main street";
object2["salary"] = 1000;

// console.log(object2.salary);

const name2 = "Maria Stewart";

const object3 = {
  name: name2,
};

const key = "firstname lastname";

// console.log(object2[key]);
// console.log(object2.key); // undefined

const objectOfStringCounter = {
  "lorem Ipsum": 0,
  "lorem Ipsum 1": 0,
  "lorem Ipsum 2": 0,
  0: "0",
};

objectOfStringCounter["lorem Ipsum"]++;

// console.dir(object2);
const object4 = object2;
const name3 = object4.name;

object4.name = "Stan";

// console.log(name3);
// console.log(object2);
// console.log(objectOfStringCounter);

// COPY OF {}

const newObject = {};

for (let key in object2) {
  newObject[key] = object2[key];
}

const data = {
  gender: "male",
};

newObject.lastname = "Johnson";
// console.log(newObject);

const newObject2 = { ...object4, insurance: "PZK" /*, ...object5 */ };
// console.log(newObject2);

const newObject3 = Object.assign({}, newObject2, { insurance: "Uniqa" });
// console.log(newObject3);

// handleUser(newObject3);

function handleUser(userObj) {
  const defaultObj = {
    age: 18,
    gender: "male",
    country: "US",
  };
  // Object.assign(defaultObj, userObj);

  console.log({ ...defaultObj, ...userObj });
}

const jsonString = JSON.stringify(object4);
const newObject4 = JSON.parse(jsonString);
// console.log(newObject4);

const cars = [
  {
    brand: "VW",
    year: 2000,
    tires: ["summer", "winter"],
    engine: {
      fuel: "diesel",
      power: "200",
    },
  },
  {
    brand: "Honda",
    year: 2010,
  },
  {
    brand: "Tesla",
    year: 2020,
    engine: {
      fuel: "electric",
      power: "200",
    },
  },
];

const oldCars = cars.filter(function (carItem) {
  return carItem.year < 2010;
});

console.log(oldCars);

const ecoCars = cars.filter(function (carItem) {
  // []
  console.log(carItem?.engine);
  // return carItem.engine && carItem.engine.fuel == "electric";
  return carItem?.engine;
});

const honda = cars.find(function (carItem) {
  // element of []
  return carItem.brand === "Honda";
});

cars.push({
  brand: "Mercedes",
  year: 2015,
});

const newCars = cars.map(function (carItem) {
  carItem.damage = false;
  return carItem;
});

console.log(newCars);

// FUNCTIONS
{
  const message = "hello";

  function helloWorld(name, message = "no message") {
    alert(message);
  }
}
// helloWorld();

// console.log(message);

function helloWorld2(name, message = "no message") {
  console.log(`${name}: ${message}`);
}

// helloWorld2();
// helloWorld2("Kate");
helloWorld2("Kate", "Hello!");

function helloWorld2(name, message = "no message") {
  return "smth to return";
  // console.log(`${name}: ${message}`);
}

const helloFunc = function () {};
helloFunc();

function sum(a, b) {
  return a + b;
}

const sum2 = (a, b) => {
  return a + b;
};

// ===

const sum3 = (a, b) => a + b;

let varA;

const aObj = {
  a: "a",
  sayA: function () {
    varA = "a";
    console.log(this.a);
  },
  sayArrowA: () => console.log(this.a),
};

aObj.sayA();
aObj.sayArrowA();

// cars.filter((item) => {
//   ... item
// });

// varA = "a";
