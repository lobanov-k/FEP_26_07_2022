const input = document.getElementById("input");
const upperLetter = document.getElementById("upperLetter");
const phone = document.getElementById("phone");
const mail = document.getElementById("mail");
const card = document.getElementById("card");

function checkValidCondition(condition, isValid) {
    if (isValid) {
        condition.classList.remove("error");
        condition.classList.add("success");
    } else {
        condition.classList.add("error");
        condition.classList.remove("success");
    }
}

input.addEventListener("input", function() {

    const firstUpperRegEx = /^[A-Z][a-z]+\s[A-Z][a-z]+/;
    checkValidCondition(upperLetter, firstUpperRegEx.test(this.value))

    const phoneRegEx = /^(\+380)\d{9}$/;
    checkValidCondition(phone, phoneRegEx.test(this.value));

    const mailRegEx = /^([a-z]+\.)([a-z]+\.)[0-9]+\@(gmail)\.(com)$/
    checkValidCondition(mail, mailRegEx.test(this.value));

    const cardRegEx = /\d\d\d\d[\s]*[-]*\d\d\d\d[\s]*[-]*\d\d\d\d[\s]*[-]*\d\d\d\d$/
    checkValidCondition(card, cardRegEx.test(this.value));

})