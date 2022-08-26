let button = document.querySelector('.button');
button.addEventListener('click', function () {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    arr = arr[Math.floor(Math.random() * arr.length)];
    let newImg = document.createElement('img');
    newImg.setAttribute("src","./imgs/img"+arr+".jfif");
    document.getElementById('image').appendChild(newImg);  
})







