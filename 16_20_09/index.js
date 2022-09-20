"use strict";

const room = {
  students: ["Ivan", "Kolia", "Vasya"],
  chairs: 10,
  tables: 10,
  getInfo() {
    return `Chairs: ${this.chairs}, tables: ${this.tables}`;
  },
};

function Student(name, age) {
  this.name = name;
  let _age = age; // private property

  this.getAge = function () {
    return _age;
  };

  this.setAge = function (newAge) {
    if (!isFinite(newAge) && newAge < 0) {
      alert("Error!");
    }
    _age = newAge;
  };
}

const student = new Student("Ivan", 25);

// console.log(student._age);
// console.log(student.getAge());
// console.log(student.setAge(26));
// console.log(student.getAge());

const person = {
  firstName: "",
  lastName: "",
  get name() {
    return this.firstName + " " + this.lastName;
  },
  set name(newName) {
    const [firstName, lastName] = newName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  },
  // getInfo: function() {
  getInfo() {
    return this.firstName + " " + this.age;
  },
};

Object.defineProperty(person, "age", {
  value: 20,
  writable: false,
});

// console.log(person);

person.name = "Kostya Lobanov";

console.log(person);
console.log(person.name);

const coder = {
  skillsArr: [],
  set skills(newSkills) {
    newSkills.split(",").forEach((skill) => this.skillsArr.push(skill.trim()));
  },
  get skills() {
    return this.skillsArr.join(", ");
  },
};

coder.skills = "JS,CSS, PHP";
coder.skills = "React,Python";
// console.log(coder.skills); // "JS, CSS, PHP, React"
// console.log(coder); // "JS, CSS, PHP, React"

function Human() {
  this.getInfo = function () {
    console.log("Name: ", this.name, "Age: ", this.age);
  };
  this.planet = "Earth";
}

function Developer(name, age, gender, technicalSkills, area) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  this.technicalSkills = technicalSkills;
  this.area = area;

  this.getProfessionalInfo = function () {
    console.log(
      "Professional Skills: ",
      this.technicalSkills,
      "Area: ",
      this.area
    );
  };
}
Developer.prototype = new Human();

function TechLead(name, age, gender, technicalSkills, area, leaderSkills) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  this.technicalSkills = technicalSkills;
  this.area = area;

  this.leaderSkills = leaderSkills;

  this.makeJiraTask = function () {
    console.log("Jira task");
  };
}
TechLead.prototype = new Developer();

// const developer = new Developer("Ivan", 30, "male", "JS, React", "Ukraine");
const lead = new TechLead("Ivan", 30, "male", "JS, React", "Ukraine");

// lead.getInfo();
// lead.getProfessionalInfo();
// lead.makeJiraTask();
// console.log(lead.planet);

const GeneralHumanObj = new Human();

const man = Object.create(GeneralHumanObj);

man.age = 20;
man.name = "John";

man.getInfo();

const man2 = {
  age: 24,
  name: "Woody",
};

Object.setPrototypeOf(man2, GeneralHumanObj);
console.log(man2.planet);

console.log(man2);

// HOW TO CREATE OBJECT WITHOUT PROTOTYPE
const withoutPrototype = Object.create(null);
console.log(withoutPrototype);

console.log(man2.hasOwnProperty("planet")); // false
console.log(man2.hasOwnProperty("age"));

for (let key in man2) {
  console.log(key);
}

for (let key of Object.keys(man2)) {
  console.log(key);
}
