const buttonEl = document.getElementById('link');
const buttonLinkEl = document.getElementById('button-link');

let link = null;

const inputLink = () => link = prompt('Введите ссылку');

const goToLink = () =>  {
    if (link) {
        return document.location.href = link;
    }
    alert('Введите ссылку!')
}
buttonEl.addEventListener('click', inputLink);
buttonLinkEl.addEventListener('click', goToLink)



