let currentSum = 20;

function getSum (value) { 
    currentSum += value;
    return  console.log("Текущая сумма :" + " " + currentSum);
}

getSum(5);
getSum(10);
getSum(15);


