function* someGenerator() {
  yield 0;
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const array = [...someGenerator()];
console.log(array);

const generator = someGenerator();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

function* uniqGenerator() {
  let i = 0;

  while (true) {
    yield i++;
  }
}

const uniqIterator = uniqGenerator();

const idField = document.getElementById("uniq-id");
document.getElementById("generate").addEventListener("click", function () {
  idField.innerText = uniqIterator.next().value;
});

// console.log(uniqIterator.next().value);
// console.log(uniqIterator.next().value);
// console.log(uniqIterator.next().value);

function addA(obj) {
  // mutable | NOT pure function
  // obj.a = "A";
  // return obj;

  // immutable | pure function
  return { ...obj, a: "A" };
}

function* arrayLoop(arr) {
  for (let i = 0; ; i++) {
    if (i === arr.length) i = 0;

    yield arr[i];
  }
}

const array2 = [1, 2, "b", 50, -40, true];

const iterator = arrayLoop(array2);

document.getElementById("iterate").addEventListener("click", function () {
  console.log(iterator.next().value);
});

const myObj = {
  name: "Stanley",
  Job: "Web Dev",
  age: 28,
};

function* objectPropsIterator(callback = (item) => item) {
  for (let prop in this) {
    yield callback(this[prop]);
  }
}

const myObj2 = {
  lang: "JS",
  car: "Aston Martin",
  [Symbol.iterator]: objectPropsIterator,
};

myObj[Symbol.iterator] = objectPropsIterator;

const myObjIterator = myObj[Symbol.iterator](isFinite);

const myObj2Iterator = myObj2[Symbol.iterator]();

console.log([...myObjIterator]);
console.log([...myObj2Iterator]);
