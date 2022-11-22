const kings = [
  "John Snow",
  "Cersei Lannister",
  "Daenerys Targaryen",
  "White Walker",
];

for (let king of kings) {
  // console.log(king);
}

// console.log(typeof kings[Symbol.iterator]); // function

const kingsIterator = kings[Symbol.iterator]();

// console.log(kingsIterator.next().value);
// console.log(kingsIterator.next().value);
// console.log(kingsIterator.next().value);
// console.log(kingsIterator.next().value);
// console.log(kingsIterator.next());

const range = {
  from: 0,
  to: 6,
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      }

      return { done: true };
    },
  };
};

for (let index of range) {
  // console.log(index);
}

// console.log("CHANGE to = 20");
range.to = 20;

for (let index of range) {
  // console.log(index);
}

const array = [...range];
// console.log(array);
