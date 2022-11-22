const symbol = Symbol();
const symbol1 = Symbol();
const symbolName = Symbol("name");
const symbolLastname = Symbol("lastname");

const propName = "prop";

// console.log(symbol === symbol2, symbol === symbol3);

const object1 = {
  [symbol]: "a",
  [propName]: "b",
};

console.log(object1);

object1[symbolName] = "Kostia";
object1[symbolLastname] = "Lobanov";
object1[Symbol()] = "Lobanov";

// console.log(object1[symbol]);

const symbolId = Symbol.for("id");
const someOtherId = Symbol.for("id");

// console.log(symbolId === someOtherId);

// console.log(Symbol.keyFor(symbolId));
// console.log(Symbol.keyFor(symbolName)); // undefined

// Symbol;

const user1 = {
  name: "John",
  age: 25,
  id: "0001",
};

// constants.js
const ID_SYMBOL = Symbol.for("id");
const NAME_SYMBOL = Symbol.for("name");

// index.js
// import { ID_SYMBOL } from "./constants";
user1[ID_SYMBOL] = 0;
user1[NAME_SYMBOL] = "John Deer";

// console.log(user1[ID_SYMBOL]);
user1[NAME_SYMBOL];
