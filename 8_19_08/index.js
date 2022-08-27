const userName = prompt('Введите ваше имя');
const userAge = prompt('Введите ваш возраст');

if (userAge < 18) {
    alert('Ошибка! Несовершеннолетние лица не могут быть владельцами автомобиля')
} else {
    const carBrand = prompt('Введите марку автомобиля');
    const carModel = prompt('Введите модель автомобиля');
    const carProductionYear = prompt('Введите год производства автомобиля');
    const carCountry = prompt('Введите страну производства автомобиля');

    function checkEmptyString() {
        if (this.name == '' || this.age == '' ||
        this.brand == '' || this.model == '' ||
        this.productionYear == '' || this.country == '') {
          return alert(`Вы ввели не все значения. Проверьте правильность ввода и повторите попытку`) 
        }
    }
    
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    const newUser = new User(userName, userAge);

    checkEmptyString.apply(newUser);

    function CarInfo(brand, model, productionYear, country, user) {
        this.brand = brand;
        this.model = model;
        this.productionYear = productionYear;
        this.country = country;
        this.owner = user;
    }

    const newCarInfo = new CarInfo(carBrand, carModel, carProductionYear, carCountry, newUser);

    checkEmptyString.apply(newCarInfo);
    
    console.log(newCarInfo);
}