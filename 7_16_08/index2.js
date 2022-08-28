let array = [10, 20, "Vova", 30, 'Oleg', 'Nan', 40, 50, 60, 70, 80, 90];

function getAverageOfArray(arr) {
    let newArray =[];
    arr.filter(function(value) {
        if (typeof value === 'number') {
            newArray.push(value);
        }
    })
    return newArray.reduce((previousValue, currentValue) => 
    (previousValue + currentValue)) / newArray.length;
}

console.log(getAverageOfArray(arr1));
    


