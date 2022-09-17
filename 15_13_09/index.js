const images = [
  "./imgs/1.jfif",
  "./imgs/2.jfif",
  "./imgs/3.jfif",
  "./imgs/4.jfif",
  "./imgs/5.jfif",
  "./imgs/6.jfif",
  "./imgs/7.jfif",
  "./imgs/8.jfif",
  "./imgs/9.jfif",
  "./imgs/0.jfif",
];

let page = 0;
const content = document.querySelector(".content");
const buttons = document.querySelector(".buttons");
const newImg = document.createElement("img");
const dots = document.querySelector(".dots");
const middleDot = document.getElementById("middle");
const leftDot = document.getElementById("left");
const rightDot = document.getElementById("right");

newImg.setAttribute("src", `${images[page]}`);

content.append(newImg);
content.append(dots);

buttons.addEventListener("click", function (event) {
  const element = event.target;
  if (element.classList.contains("start")) {
    let startInterval = setInterval(() => {
      newImg.setAttribute("src", `${images[++page]}`);
      content.appendChild(newImg);
      leftDot.classList.remove("dot_active");
      middleDot.classList.add("dot_active");
      if (page == 9) {
        clearInterval(startInterval);
        middleDot.classList.remove("dot_active");
        rightDot.classList.add("dot_active");
      }
    }, 1000);
  }
});

function changeLeftSlider() {
  if (page <= 0) {
    page = 10;
  }
  rightDot.classList.remove("dot_active");
  middleDot.classList.add("dot_active");
  newImg.setAttribute("src", `${images[--page]}`);
  content.appendChild(newImg);
}

function changeRightSlider() {
  if (page >= 9) {
    page = -1;
  }
  rightDot.classList.remove("dot_active");
  middleDot.classList.add("dot_active");
  newImg.setAttribute("src", `${images[++page]}`);
  content.appendChild(newImg);
}
