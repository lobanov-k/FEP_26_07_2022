const cars = [];
const users = [];

const usersBlock = document.getElementById("users");
const autosBlock = document.getElementById("autos");

users.push(new User("John Doe", 30));
users.push(new User("Ann Stacy", 28));
users.push(new User("Sam Smith", 45));

cars.push(new Car("BMW", 2015, 300));
cars.push(new Car("Toyota", 2017, 170));
cars.push(new Car("Lexus", 2019, 280));

let selectedCar = "";

cars.forEach((item) => {
  autosBlock.innerHTML += getCarHtml(item);
});

users.forEach((item) => {
  usersBlock.innerHTML += getUserHtml(item);
});
