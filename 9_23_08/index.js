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
