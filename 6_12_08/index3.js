let characters = "abcdefghklmop12345678";

let array = [];

function generateKey(quantity, row) {
  let arr = row.split("");
  for (let i = 1; i <= +quantity; i++) {
    array.push(arr[Math.round(Math.random() * (arr.length - 1))]);
  }
  return array.join("");
}

const key = generateKey(4, characters);
console.log(key);
