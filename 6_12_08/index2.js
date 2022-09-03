let myArray = [
  "name",
  "surname",
  "name",
  "age",
  "adress",
  "surname",
  "country",
];

function removeElement(array, item) {
  return (newArray = array.filter((value) => value !== item));
}
console.log(removeElement(myArray, "name"));
