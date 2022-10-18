function greeting(userName) {
  alert(`Hi, ${userName}`);
}

function processUserInput(callback) {
  const userName = prompt("What is your name?");
  callback(userName);
}
// processUserInput(greeting);

// [1, 2]
//   .forEach
//   // for (i = 0; i < array.length; i++)
//   // callback(array[i])
//   // (item) => console.log(item * 2)
//   ();

// navigator.geolocation.getCurrentPosition(function (position) {
//   console.log(position.coords.latitude, position.coords.longitude);
// });

const promise = new Promise((res, rej) => {
  setTimeout(() => res("success 1"), 1000);
  // setTimeout(() => rej(new Error("Some error 1!")), 1000);
});

promise
  .then(function (result) {
    return new Promise((res, rej) => {
      setTimeout(() => rej(new Error("Some error 2!")), 1000);
      // setTimeout(() => res("Success!"), 1000);
    });
  })
  .then((data) => console.log("result:", data))
  .catch((error) => {
    // console.log("OOPS! callback from catch", error.message);
    return error;
  })
  .finally(() => {
    // console.log("Promise fullfilled!");
  });

const promisesArr = [
  new Promise(function (res, rej) {
    // setTimeout(() => res("Promise 1"), 100);
    setTimeout(() => rej(new Error("Promise 1 error")), 100);
  }),
  new Promise(function (res, rej) {
    // setTimeout(() => res("Promise 2"), 1000);
    setTimeout(() => rej(new Error("Promise 2 error")), 1000);
  }),
  new Promise(function (res, rej) {
    // setTimeout(() => res("Promise 3"));
    setTimeout(() => rej(new Error("Promise 3 error")), 1000);
  }),
  new Promise(function (res, rej) {
    // setTimeout(() => res("Promise 4"), 200);
    setTimeout(() => rej(new Error("Promise 4 error")), 1000);
  }),
];

Promise.all(promisesArr)
  .then((data) => console.log(data))
  .catch((error) => console.log(`Error: ${error}`));

Promise.allSettled(promisesArr).then((data) => console.log("allSettled", data));

Promise.race(promisesArr)
  .then((data) => console.log("Race", data))
  .catch((error) => console.log("Race error", error.message));

Promise.any(promisesArr)
  .then((data) => console.log("Any", data))
  .catch((error) => console.log("Any error", error));

setTimeout(() => console.log("Timeout")); // Macrotask

Promise.reject("some error").catch((e) => console.error(e)); // Microtask
Promise.resolve("some success").then((e) => console.log(e)); // Microtask

console.log("some inline code");

const exchangeForm = document.forms["exchange-calc"];
const currencySelect = document.getElementById("currency");
const resultField = document.getElementById("uah-amount");

const updateResult = () =>
  (resultField.textContent = (
    exchangeForm.currency.value * exchangeForm.amount.value
  ).toFixed(2));

fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
  .then((result) => result.json())
  .then((data) => {
    data.forEach((currencyItem) => {
      const option = document.createElement("option");
      option.setAttribute("value", currencyItem.rate);
      option.textContent = `${currencyItem.txt} - ${currencyItem.rate}`;

      currencySelect.append(option);
    });
  })
  .catch((error) => console.error(error.message));

currencySelect.addEventListener("change", updateResult);
exchangeForm.amount.addEventListener("input", updateResult);

const error1 = new Error();
console.dir(error1.message);
