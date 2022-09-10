const str1 = "abcd";
const regexp = /d/g;

// const numOfMatches = str1.match(regexp) && str1.match(regexp).length;
const numOfMatches = str1.match(regexp)?.length;

// console.log(str1.match(regexp));

// console.log(regexp.test(str1));

const str2 = "aaabcv 454 zxaa";
// const regexp2 = /4/;
const regexp3 = /\d\d\d\d/g;

// console.log(str2.match(regexp2));
// console.log(str2.match(regexp3));

// not numbers
// console.log(str2.match(/\D/g));

// spaces
// console.log(str2.match(/\s/g));
// console.log(str2.match(/\S/g));

const str4 = "driver 60kmp AB1234HH -- allowed 35kmp";
// console.log(str4.match(/\w\w\d\d\d\d\w\w/));
// console.log(str4.match(/\d\d[a-z][a-z][a-z]/gi));

const str5 = "apple, banana, orange";
// console.log(str5.match(/(apple|orange)/gi));

const str6 = "apple, banana, 4 oranges";
// console.log(str6.match(/[^\s][c-z][a-z][a-z][a-z][a-z]/gi));
// [a-z] = (a, b, ... z) | [b-d] = (b, c, d) - диапазон по порядку от символа до символа

let str = "123 (bbb) 321 aaa 555 bb*";

console.log(str.match(/\d{3}\s[a-z]{1,3}/g));
console.log(str.match(/\([a-z]{3}\)/g));
console.log(str.match(/[a-z]{1,3}\*/g));

const address = "http://google.com";
const addressSecured = "https://google.com";
const incorrectAddr = "ftp://asdasf.asfasd";

const regExSite = /^https?:\/\/[a-z]*.[a-z]{2,3}$/i;
console.log(regExSite.test(address));
console.log(regExSite.test(addressSecured));
console.log(regExSite.test(incorrectAddr));

const SUCCESS_CLASSNAME = "success";
const ERROR_CLASSNAME = "error";

function highlightValidationHint(hintEl, isValid) {
  if (isValid) {
    hintEl.classList.add(SUCCESS_CLASSNAME);
    hintEl.classList.remove(ERROR_CLASSNAME);
  } else {
    hintEl.classList.remove(SUCCESS_CLASSNAME);
    hintEl.classList.add(ERROR_CLASSNAME);
  }
}

document
  .querySelector("[name=password]")
  .addEventListener("input", function () {
    const minLingthRegExp = /.{8,}/;
    highlightValidationHint(
      document.getElementById("8symbols"),
      minLingthRegExp.test(this.value)
    );

    const oneDigitRegExp = /\d+/;
    highlightValidationHint(
      document.getElementById("digit"),
      oneDigitRegExp.test(this.value)
    );

    const oneCapitalLetterRegExp = /[A-Z]+/;
    highlightValidationHint(
      document.getElementById("capital"),
      oneCapitalLetterRegExp.test(this.value)
    );

    const oneSpecialRegExp = /[^\s\da-z]+/i;
    highlightValidationHint(
      document.getElementById("special"),
      oneSpecialRegExp.test(this.value)
    );
  });
