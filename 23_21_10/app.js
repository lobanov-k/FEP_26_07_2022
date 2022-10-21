class MyClass {
  constructor() {
    this.myProp = "something";
  }

  #myProp2Value; // private property

  myMethod() {
    console.log(this.myProp);
  }

  set myProp2(value) {
    this.#myProp2Value = value;
  }

  get myProp2() {
    return this.#myProp2Value;
  }
}

const myObj = new MyClass();

myObj.myProp2 = "new value";

// console.log(myObj);

class User {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  #name;

  static createAnonymous(gender) {
    let name = gender == "male" ? "John Doe" : "Jane Doe";
    return new User(name, 18, gender);
  }

  getInfo() {
    alert(`user ${this.#name}, age: ${this.age}`);
  }

  set name(value) {
    if (!(typeof value === "string" && value.length > 3)) {
      return;
    }

    this.#name = value;
  }

  get name() {
    return this.#name;
  }
}

const user1 = new User("Kostia", 30);

// user1.getName = function () {
//   return this.#name; // ERROR
// };

// console.log(user1);

// user1.getInfo();

const anonymous = User.createAnonymous("female");

class Item {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;

    this.constructor.count++;
  }

  static count = 0;

  static getCount() {
    return Item.count;
  }
}

const itemObj1 = new Item("pen", 2);
const itemObj2 = new Item("pencil", 3);

console.log(Item.getCount());
console.log(itemObj2);

class Animal {
  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
  }

  walk() {
    console.log(`${this.name} is walking with ${this.legs} legs`);
  }
}

class Bird extends Animal {
  constructor({ wings, name, legs }) {
    super(name, legs);

    this.wings = wings;
  }

  fly() {
    console.log(`${this.name} is flying with ${this.wings} wings`);
  }

  walk() {
    super.walk();
    console.log(`and eating seeds`);
  }
}

const pigeonBird = new Bird({ wings: 2, name: "pigeon", legs: 2 });

// console.log(pigeonBird);
// pigeonBird.walk();
// pigeonBird.fly();
