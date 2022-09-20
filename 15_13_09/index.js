"use strict";

queueMicrotask(() => {
  console.log("run microtask");
});

const timerId = setTimeout(() => {
  alert("5 seconds later");
}, 1000);

console.log(timerId);

clearTimeout(timerId);

let timer = 0;
const timerEl = document.getElementById("timer");

const intervalId = setInterval(() => {
  timerEl.textContent = ++timer;
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);

setTimeout(() => {
  console.log("macro task");
});

let i = 0;
while (i <= 100000) {
  i++;
}

console.log(i);

// alert("2");

// var j = 0;
for (let j = 0; j < 10; j++) {
  // let j
  setTimeout(function () {
    // console.log(j);
  });
}

const obj1 = {
  a: "a",
  sayA: function () {
    console.log(this.a);
  },
};

const obj2 = {
  a: "b",
  sayA: function () {
    console.log(this.a);
  },
};

const flag = false;

// setTimeout(obj1.sayA.bind(obj1), 1000);

const date1 = new Date();
// console.log(now);

const someDate = new Date(2007, 11, 1, 12, 33);

console.log(someDate);
console.log(date1.getTime());
console.log(date1.getUTCHours());

date1.setHours(48);
// now.setMonth(12);

const difference = date1 - Date.now();

console.log(difference / (1000 * 60 * 60)); // hours

const date2 = new Date("2019-01-20T13:55:10");
console.log(date2);

console.log(date2.toLocaleDateString("en-US"));
