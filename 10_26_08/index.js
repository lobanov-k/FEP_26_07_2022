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
const content = document.querySelector('.content');
const buttons = document.querySelector('.buttons');
const newImg = document.createElement('img');


buttons.addEventListener('click', function(event) {
    const element = event.target;
    if (element.classList.contains('next')) {
        if (page >= 9) {page = -1}  
        newImg.setAttribute('src', `${images[++page]}`);  
    } else if (element.classList.contains('previous')) { 
        if (page <= 0) {page = 10}
        newImg.setAttribute('src', `${images[--page]}`)  
    }
    content.appendChild(newImg);
})



