import * as someImport from "./sayHi.js";
import User, { userName as var1 } from "./User.js";
import _ from "lodash";

const user1 = new User();
someImport.sayHi();
console.log(someImport.SOME_CONSTANT);
console.log(var1);
