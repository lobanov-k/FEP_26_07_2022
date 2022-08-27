const button = document.getElementById('showImg');
const image = document.getElementById('randomImg');

const getRandomNumber = (min, max) => (Math.random() * (max - min) + min).toFixed(0);

function getRandomLink() {
    img = `./imgs/${getRandomNumber(1, 9)}.jfif`;
     image.setAttribute('src', img);
} 

button.addEventListener('click', getRandomLink);

getRandomLink();











