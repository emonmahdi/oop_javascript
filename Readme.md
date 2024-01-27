## Object Oriented Programming

### Introduction:

Object-oriented programming (OOPs) is a widely used paradigm in software development that allows for modular and organized code. JavaScript, a versatile and powerful programming language, also supports OOPs concepts.

Object-Oriented Programming (OOP) is essentially a programming paradigm that organises code into reusable, self-contained objects. It focuses on the concept of objects, which represent real-world entities with their own attributes (data) and behaviours (methods).

OOP allows developers to write modular, maintainable, and scalable code by promoting code reusability and encapsulation. OOP Concepts in JavaScript can be defined as the concepts that promote Object-Oriented Programming in JavaScript.

### Encapsulation:

Encapsulation is defined as the process of bundling data and methods together within a single unit, known as an object. It allows for the organization of related data and operations, promoting code modularity and reusability. Encapsulation provides two key benefits: data hiding and access control.

By encapsulating data, an object's internal state is hidden from external entities. This ensures that the data can only be accessed and modified through defined methods, preventing direct manipulation and maintaining data integrity. Access control mechanisms, such as private and public modifiers, allow developers to control the visibility and accessibility of object members. Encapsulation in JavaScript can be achieved using techniques like closures, IIFE (Immediately Invoked Function Expressions), and modules.

#### Normal Function:

```js
let name = "sakib al hasan";
let birthDay = "1987-1-1";
let noOfMonths = "12";
let monthlySalary = 200000;

function calculate_age(dob) {
  const diff_ms = Date.now() - new Date(dob).getTime();
  const age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear()) - 1970;
}

function getSalary(monthlySalary, noOfMonths) {
  return (monthlySalary * noOfMonths).toLocaleString();
}

console.log(calculate_age(birthDay));
console.log(getSalary(monthlySalary, noOfMonths));
```

#### Js way Encapsulate

```js
const sakib = {
  name: "sakib al hasan",
  birthDay: "1987-1-1",
  noOfMonths: "12",
  monthlySalary: 200000,

  calculate_age() {
    const diff_ms = Date.now() - new Date(this.birthDay).getTime();
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear()) - 1970;
  },

  getSalary() {
    return (this.monthlySalary * this.noOfMonths).toLocaleString();
  },
};

console.log(sakib.calculate_age());
console.log(sakib.getSalary());
```

#### OOP js Encapsulated

```js
class Player {
  constructor(name, birthDay, monthlySalary, noOfMonths) {
    this.name = name;
    this.birthDay = birthDay;
    this.monthlySalary = monthlySalary;
    this.noOfMonths = noOfMonths;
  }
  calculate_age() {
    const diff_ms = Date.now() - new Date(this.birthDay).getTime();
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear()) - 1970;
  }

  getSalary() {
    return (this.monthlySalary * this.noOfMonths).toLocaleString();
  }
}

const sakib2 = new Player("Sakib", "1984-2-4", 200000, 1);
const tamim = new Player("Tamim", "1984-4-1", 300000, 1);

console.log(sakib2.getSalary());
console.log(tamim.calculate_age());
```

#### Use Private property

```js
class Player {
  #name;
  #birthDay;
  #monthlySalary;
  #noOfMonths;
  constructor(name, birthDay, monthlySalary, noOfMonths) {
    this.#name = name;
    this.#birthDay = birthDay;
    this.#monthlySalary = monthlySalary;
    this.#noOfMonths = noOfMonths;
  }
  calculate_age() {
    const diff_ms = Date.now() - new Date(this.#birthDay).getTime();
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear()) - 1970;
  }

  getSalary() {
    return (this.#monthlySalary * this.#noOfMonths).toLocaleString();
  }
}

//console.log(tamim.birthDay); // undefined
// when i use the private sign # then not access that property outside the class or function

// # use er maddhome property k private kora jate jara ei code neye kaj kore tara jeno ei ta follow kore kaj kore organized way te. Etar mane ei na j eta keo kono din access korte parbe na. Eta ekta organized way jeta maintain korei team player ra kaj korbe
```

Note: Encapsulation holo ek e boisisto goto j method ba property gulo k ekta capsul ba ekta jaygay kore neye geye class er kase bole deya je ei sei property ba method tumi jeta chao seta use korte paro `.` deye access nete paro. R e tai Encapsulation.

### Inheritance:

In programming, inheritance refers to passing down characteristics from a parent to a child so that a new piece of code can reuse and build upon the features of an existing one. JavaScript implements inheritance by using objects. Each object has an internal link to another object called its prototype.

Example:

```js
class Player {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getPlayerDetails() {
    return ` ${this.name} is ${this.age} years old`;
  }
}

class Cricketer extends Player {
  constructor(name, age, centuries) {
    super(name, age);
    this.centuries = centuries;
  }
}

class Footboller extends Player {
  constructor(name, age, goals) {
    super(name, age);
    this.goals = goals;
  }
}

const musfiq = new Cricketer("Musfiqur Rahim", 36, 14);
const messi = new Footboller("Leonal Messi", 33, 250);

console.log(musfiq);
console.log(musfiq.getPlayerDetails());
console.log(messi);
console.log(messi.goals);
```

Note: Inheritance holo uttoradhikar sutre powa. Dada er assets pabe ter sele and baba ta pabe ta sele. Jemon ekta common pattern tkbe jet ter child class e use kora jabe parent thke neye alada kore abr ek e jinis bar bar korte hobe na

### Abstraction

Abstraction is a fundamental concept in object-oriented programming (OOP) that refers to the practice of hiding the implementation details of an object and exposing only the essential features to the user. In JavaScript, abstraction is achieved by using abstract classes and interfaces.

Example:

```js
class BetterArray {
  #items;

  constructor() {
    this.#items = [];
  }

  getItems() {
    return [...this.#items];
  }

  addItem(item) {
    this.#items.push(item);
  }

  removeItem(deleteItem) {
    this.#items = this.#items.filter((item) => item !== deleteItem);
  }

  modifyItem(itemChange, newItem) {
    const index = this.#items.indexOf(itemChange);

    if (index !== 1) {
      this.#items[index] = newItem;
    }
  }
}

const array = new BetterArray();
array.addItem("I love Bangladesh");

array.addItem("I love JavaScript");
console.log(array.getItems());

array.removeItem("I love Bangladesh");
console.log(array.getItems());

array.modifyItem("I love JavaScript", "I Love Programming");
console.log(array.getItems());
```

Note: Jokhon kono Implementation k hide kora hoy but kaj thik motoi kore setai abstration. Jemon - ATM booth a amra tk tule but kivae seta kaj kore amra jani na and Car driver chalay just hat r pa deye but engine er moddhe kivabe seta hosse seta hoyte ter janar dorker nai. Ei rokom hajaro kaj ase jeta amra kore but amr implentation dekhe na.
