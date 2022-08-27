let button = document.querySelector('.button_prompt');

function promptOnClick() { //Ссылка для примера : https://learn.javascript.ru/modifying-document
    button = prompt('Введите ссылку');
    document.location.href = button;
}

function buttonOnClick() {
    document.location.href="https://github.com/"
}


