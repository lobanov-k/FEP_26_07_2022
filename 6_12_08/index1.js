let arr = [
  {
    index: 0,
    isActive: true,
    name: "John Doe",
    balance: "$2,226.60",
    phone: "+1 (840) 583-3207",
  },
  {
    index: 1,
    isActive: true,
    name: "Merry Hope",
    balance: "$2,778.05",
    phone: "+1 (856) 599-3450",
  },
  {
    index: 2,
    isActive: true,
    name: "Eugene Stakidis",
    balance: "$730.10",
    phone: "+1 (840) 333-5400",
  },
  {
    index: 2,
    isActive: true,
    name: "Stan Smith",
    balance: "$5,001.50",
    phone: "+1 (839) 121-3044",
  },
  {
    index: 3,
    isActive: true,
    name: "Johnatan Tape",
    balance: "$3,020.60",
    phone: "+1 (839) 003-5579",
  },
  {
    index: 4,
    isActive: true,
    name: "Aaron Big",
    balance: "$1,999.99",
    phone: "+1 (840) 033-6873",
  },
  {
    index: 5,
    isActive: true,
    name: "Artur Cheese",
    balance: "$2,545.00",
    phone: "+1 (840) 562-3790",
  },
];

//Проверка пользователей с балансом более 2000
let newArr = arr.filter(function (value, number) {
  number = arr.phone;
  return (
    +value.balance.replace(/[^0-9]/g, "") > +"$2,000.00".replace(/[^0-9]/g, "")
  );
});

console.log(newArr);

//Сумма балансов пользователей
let sumArr = arr.reduce(
  (prev, value) => prev + +value.balance.replace(/[^0-9]/g, "") / 100,
  0
);

// Разделение числа запятыми
function addCommas() {
  return sumArr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
console.log("$" + addCommas());
