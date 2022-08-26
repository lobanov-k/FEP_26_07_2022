const header = document.getElementById("header");
console.log(header);

const paragraf = document.getElementsByClassName("text");
console.log(paragraf);

// const articles = document.getElementsByClassName("article");
// console.log(aticles);

// console.log(articleFirst);

// console.log(articles);

// const articleFirst = document.querySelector(".article");
// console.log(articleFirst.closest(".articles"));

// articleFirst.innerHTML = '<img src="./imgs/o-img.png" />';

// in CSS:'align-text' in style object: alignText

// const articles = document.querySelectorAll(".article");
// articles.forEach((element) => {
//   element.style.color = "green";
// });

// articleFirst.style.color = "red";

// articles[1].style.textDecoration = "underline";

const list = document.querySelector(".list");
const liArray = list.querySelectorAll("li");
console.log(liArray);

liArray[1].innerHTML = "LESS";
list.previousElementSibling.style.color = "red";

// document.querySelector("img").setAttribute("src", "./imgs/x-img.png");

const button = document.querySelector("button");
button.setAttribute("disabled", "disabled");

button.removeAttribute("disabled");

console.log(button.getAttribute("data-value"));

// console.log(document.querySelector("img").getAttribute("src"));

function onButtonClick() {
  const bgBlueClass = "bg-blue";
  const list = document.querySelector(".list");

  // if (list.classList.contains(bgBlueClass)) {
  //   list.classList.remove(bgBlueClass);
  // } else {
  //   list.classList.add(bgBlueClass);
  // }

  list.classList.toggle(bgBlueClass);
}

function addText() {
  const text = document.createElement("p");
  text.innerText = "Hello World!";
  text.style.color = "green";

  document.querySelector(".text").append(text);
}

const btn = document.getElementById("addText");
// btn.onclick = addText;

btn.addEventListener("click", addText);

const unlistenBtn = document.getElementById("unlisten");

unlistenBtn.addEventListener("click", function () {
  btn.removeEventListener("click", addText);
});

const newList = document.querySelector(".list");
newList.addEventListener("click", function () {
  console.log(this);
  this.classList.toggle("bg-blue");
});

const inputBtn = document.getElementById("btn");
inputBtn.addEventListener("click", function () {
  console.log(this.previousElementSibling.value);
});

document
  .getElementById("somebutton")
  .addEventListener("focus", function (event) {
    console.log(event);
  });

document.addEventListener("keydown", function (event) {
  console.log(event);
});

document.addEventListener("DOMContentLoaded", function (event) {
  console.log(event);
});

// CODE for 1 dropdown
// document.querySelector(".dropDownlabel").addEventListener("click", function () {
//   this.closest(".dropDownWrapper")
//     .querySelector(".dropDown")
//     .classList.toggle("open");
// });

// FOR ALL DROPDOWNS
document.querySelectorAll(".dropDownlabel").forEach(function (element) {
  element.addEventListener("click", function () {
    this.closest(".dropDownWrapper")
      .querySelector(".dropDown")
      .classList.toggle("open");
  });
});

document
  .querySelector(".dropDownWrapper")
  .addEventListener("click", function (event) {
    console.log("CLICK ON WRAPPER");
    console.log(event);
    console.log(this);
  });

document
  .querySelector(".dropDownWrapper span")
  .addEventListener("click", function (event) {
    console.log("CLICK ON SPAN");
    console.log(event.target);
    console.log(this);
  });

document.body.addEventListener("click", function ({ target }) {
  console.log("CLICK ON BODY");
  console.log(target);
  console.log(this);
});

const link = document.getElementById("link");

link.addEventListener("click", function (event) {
  event.preventDefault();
});

link.addEventListener("mouseover", function (event) {
  console.log("mouseover");
});
link.addEventListener("mouseout", function (event) {
  console.log("mouseout");
});

document.getElementById("someForm").addEventListener("click", function (event) {
  event.preventDefault();
});

document.body.addEventListener("click", function (event) {
  console.log(event.altKey);
});

document;

// DOMASHKI RULES
// 1. "use strict";
// 2. Names of variables - camelCase
// BAD: a, b, ... abc...,
// GOOD: letter, number1, number2, string1 ... someString

// 3. Names of functions
// BAD: a, b, ... abc...,
// GOOD: doSmth, getInfo, setInfo, calculateSomething

// Most optimal code
// DRY - dont repeat yourself
// KISS Keep it Simple and Stupid

navigator.geolocation.getCurrentPosition(function (position) {
  console.log("широта", position.coords.latitude);
  console.log("долгота", position.coords.longitude);
  console.log(position);
});

function fnBrowserDetect() {
  let userAgent = navigator.userAgent;
  let browserName;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "firefox";
  } else if (userAgent.match(/safari/i)) {
    browserName = "safari";
  } else if (userAgent.match(/opr\//i)) {
    browserName = "opera";
  } else if (userAgent.match(/edg/i)) {
    browserName = "edge";
  } else {
    browserName = "No browser detection";
  }
}

const images = ["./imgs/o-img.png", "./imgs/x-img.png"];
let page = 0;

// код для работы слайдера должен быть инкапсулирован
document.querySelector(".content").innerHTML = `<img src="${images[page]}"/>`;
// использовать создание элемента document.createElement

document.getElementById("next").addEventListener("click", function () {
  document.querySelector(".content").innerHTML = `<img src="${
    images[++page]
  }"/>`;
});

// использовать работу с атрибутом src картинки
document.getElementById("prev").addEventListener("click", function () {
  // добавить код, чтобы сделать слайдер бесконечным
  // ИЛИ
  // блокировать кнопки если юзер дошел до крайнего элемента 0 - prev:blocked , last - next:blocked
  document.querySelector(".content").innerHTML = `<img src="${
    images[--page]
  }"/>`;
});

// * реализовать listner для next/prev через делегирование событий с помощью одного addEventListener
