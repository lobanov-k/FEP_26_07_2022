function Car(brand, year, hp) {
  this.brand = brand;
  this.year = year;
  this.hp = hp;

  this.id = `car-${Date.now()}`;

  this._users = [];
}

Car.prototype.setUser = function (user, shouldSetToUser = true) {
  if (!User.prototype.isPrototypeOf(user)) return;
  this._users.push(user);

  if (shouldSetToUser) user.setCar(this);
};

Car.prototype.getUsers = function () {
  return this._users;
};

function User(name, age) {
  this.name = name;
  this.age = age;

  this.id = `user-${Date.now()}`;

  this.cars = null;
}

User.prototype.setCar = function (car) {
  if (!Car.prototype.isPrototypeOf(car)) return;
  car.setUser(this, false);

  this.car = car;
};
