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
content.innerHTML = `<img src ="${images[page]}"/>`;

document.addEventListener('click', function(event) {
    if (event.target.closest('.next')) {
        if (page >= 9) {page = -1}
        content.innerHTML = `<img src ="${images[++page]}"/>`;   
    } else if (event.target.closest('.previous')) { 
        if (page <= 0) {page = 10}
        content.innerHTML = `<img src ="${images[--page]}"/>`;  
    }
    console.log(page) //Для проверки индекса изображения
})



