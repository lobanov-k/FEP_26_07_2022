"use strict";

const name = "Good evening";

const user = {
  name: "John",
  age: 30,
  sayHi: function () {
    return this.name + ": " + name + ` I am ${this.age} old`;
    console.log(this);
  },
  sayHello() {
    alert("Hello");
  },
};

user.sayBye = function () {
  alert("Bye!");
};

// user.sayBye();
// user.sayHello();

// console.log(user.sayHi());

const courses = {
  name: "Front End Pro",
  students: ["Dima", "Yulia", "Mark"],
  getInfo() {
    console.log(this.name);
    this.students.forEach((item, index) => {
      console.log(this.students[index]);
    });
  },
  getInfo2() {
    const that = this;
    console.log(this.name + " 2");

    this.students.forEach(function (item, index) {
      console.log(that.students[index]);
    });
  },
};

// courses.getInfo2();

// анонимная функция ссылается на undefined
(function () {
  // korzina
  let a = "a";
  // console.log(this);
})();

(function () {
  // user info
  let a = "aaa";
  // console.log(this);
})();

const user1 = { name: "John" };
const user2 = { name: "Steve" };

function message(text) {
  console.log(this.name, ":", text);
}

user1.say = message;
user2.say = message;

user1.say("hi!");
user2.say("good evening!");

function notify(amount, errorMsg) {
  console.log(this.name, ", session will end soon!", `pay ${amount}`, errorMsg);
}

// notify.call(user1, "50$", "time is over");

// user1.say.call(user2, "Bye!");

const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);

console.log(max);

const divs = document.querySelectorAll("div");
console.log(divs);
const newDivs = [].slice.call(divs, 1, 2);
// console.log(newDivs);
// console.log(newDivs[0].innerText);

const someFunc = function () {
  // arguments.join(",");
  console.log([].join.call(arguments, ","));
  console.log(Array.prototype.join.call(arguments, ","));
};

// someFunc(1, 2, 3, 4, 5);

const sayByUser2 = user1.say.bind(user2);
sayByUser2("Bye");

function User(name, age) {
  this.name = name;
  this.age = age;
  this.isAdmin = false;
  this.say = function () {
    console.log(this.name, ": Hi!");
  };
  // return {};
}

const userJohn = new User("John", 30);
const userSteve = new User("Steve", 25);
const userRoy = new User("Roy", 20);

// Создать объект калькулятор с методами
// sum () возвращает сумму двух значений
// mul () возвращает произведение двух значений
// Инициализировать объект с помощью конструктора
// Const calculator = new Calculator(2, 2);calculator.sum();

function Calculator(a, b) {
  this.a = a;
  this.b = b;

  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

const calculator = new Calculator(3, 2);

calculator.pow = function () {
  return this.a ** this.b;
};

const sum = calculator.sum();
console.log(calculator.mul());
console.log(calculator.pow());

// console.log(userJohn);

userRoy.say();

const nameUser = prompt("Select name");
const ageUser = prompt("Select age");

const userOrigin = new User(nameUser, ageUser);

userOrigin.say();

function Chair() {
  this.legs = 4;
  this.material = "wood";
}

const chair1 = new Chair();
// console.log(chair1);
