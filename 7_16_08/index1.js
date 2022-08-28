function sum(a) {
  return function (b) {
    return a + b;
  }
}

alert(sum(15)(22));