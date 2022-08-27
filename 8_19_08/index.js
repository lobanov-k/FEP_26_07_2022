const userName = prompt('Введите ваше имя');



const userAge = getUserAge();

if (userAge < 18) {
    alert('Ошибка! Несовершеннолетние лица не могут быть владельцами автомобиля')
} else {
    const carBrand = prompt('Введите марку автомобиля');
    const carModel = prompt('Введите модель автомобиля');
    const carProductionYear = prompt('Введите год производства автомобиля');
    const carCountry = prompt('Введите страну производства автомобиля');
    
    const newUser = new User(userName, userAge);

    checkEmptyString.apply(newUser);

    const newCarInfo = new CarInfo(carBrand, carModel, carProductionYear, carCountry, newUser);

    checkEmptyString.apply(newCarInfo);
    
    console.log(newCarInfo);
}

function getUserAge() {
    let age = +prompt('Введите ваш возраст');
    if (isNaN(age)) {
        return getUserAge()
    } else {
        return age
    }
}

function User(name, age) {
    this.name = name;
    this.age = age;
}
function CarInfo(brand, model, productionYear, country, user) {
    this.brand = brand;
    this.model = model;
    this.productionYear = productionYear;
    this.country = country;
    this.owner = user;
}

function checkEmptyString() {
    if (this.name == '' || this.age == '' ||
    this.brand == '' || this.model == '' ||
    this.productionYear == '' || this.country == '') {
        return alert(`Вы ввели не все значения. Проверьте правильность ввода и повторите попытку`) 
    }
}