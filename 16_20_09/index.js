const userForm = document.getElementById("user-form");
const carForm = document.getElementById("car-form");
const buttons = document.getElementsByClassName(".buttons-block");
const newUser = document.getElementById("newUser-button");

function getLS(key, defaultValue) {
  const lsValue = localStorage.getItem(key);
  return lsValue === null && defaultValue ? defaultValue : JSON.parse(lsValue);
}

function setLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

const USER_CAR_LIST = "user's cars";

const userList = getLS(USER_CAR_LIST, []);

function User(name, age, cars) {
  this.name = name;
  this.age = age;
  this.cars = cars;
}

function Car(brand, model, year, country) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.country = country;
}

let user1 = null;

userForm.addEventListener("submit", function (event) {
  event.preventDefault();

  user1 = new User(this.name.value, this.age.value, []);
  document.getElementById("addCar-button").disabled = false;
  userList.push(user1);
});

carForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const car1 = new Car(
    this.brand.value,
    this.model.value,
    this.year.value,
    this.country.value
  );

  user1.cars.push(car1);
  setLS(USER_CAR_LIST, userList);
  carForm.reset();
});

newUser.addEventListener("click", function () {
  document.getElementById("save-button").disabled = false;
  document.getElementById("addCar-button").disabled = true;

  userForm.reset();
});
