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

### Polymorphism

Polymorphism is one of the four fundamental principles of Object-Oriented Programming (OOP). The term originates from Greek, where 'poly' means 'many' and 'morph' means 'forms'. So, polymorphism translates to 'many forms'. The principle allows objects to take on many forms depending on the context.

Example:

```js
class Player {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getName() {
    return this.#name;
  }
  getAge() {
    return this.#age;
  }

  getPlayerDetails() {
    return ` ${this.#name} is ${this.#age} years old`;
  }
}

class Cricketer extends Player {
  constructor(name, age, centuries) {
    super(name, age);
    this.centuries = centuries;
  }

  getPlayerDetails() {
    return ` ${this.getName()} এর বয়স  ${this.getAge()} বছর`;
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

console.log(musfiq.getPlayerDetails());
console.log(messi.getPlayerDetails());
```

Note: Polymorphism holo bohurupi. Jkn kono parent class er nirdisto kono method k ek ek child class er jonno ek ek rokom output dekhano doker tkn amra method overriding er maddome sei nirdisto child component er result change korte pare. Ei tai hosse polymorphism jar implementation same e thkbe but shap ta alada hobe.

## Some Codin Examples:

### 1. Create a Class Hierarchy

```js
class Shape {
  constructor(color) {
    this.color = color;
  }

  draw() {
    console.log(`Drawing a shape with color ${this.color}`);
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  draw() {
    console.log(
      `Drawing a circle with color ${this.color} and radius ${this.radius}`
    );
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  draw() {
    console.log(
      `Drawing a rectangle with color ${this.color}, width ${this.width}, and height ${this.height}`
    );
  }
}

// Usage
const myCircle = new Circle("red", 5);
myCircle.draw();

const myRectangle = new Rectangle("blue", 8, 6);
myRectangle.draw();
```

### 2. Encapsulation and Accessors

```js
class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }
}

// Usage
const account = new BankAccount(1000);
console.log(account.getBalance()); // Output: 1000
account.deposit(500);
console.log(account.getBalance()); // Output: 1500
account.withdraw(200);
console.log(account.getBalance()); // Output: 1300
account.withdraw(1500); // Output: Insufficient funds
```

### 3. Inheritance and Method Overriding

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow!");
  }
}

// Usage
const genericAnimal = new Animal("Generic");
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

genericAnimal.makeSound(); // Output: Generic animal sound
dog.makeSound(); // Output: Woof! Woof!
cat.makeSound(); // Output: Meow!
```

### 4. Implement a Singleton:

```js
class Singleton {
  static instance;

  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
    this.creationTime = new Date();
  }

  getCreationTime() {
    return this.creationTime;
  }
}

// Usage
const instance1 = new Singleton();
console.log(instance1.getCreationTime());

const instance2 = new Singleton();
console.log(instance2.getCreationTime()); // Should be the same as instance1
```

### 5. Design Patterns (Observer Pattern)

```js
class Observer {
  update(data) {
    console.log(`Received update with data: ${data}`);
  }
}

class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

// Usage
const subject = new Subject();

const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers("Some data"); // Both observers will receive the update
```

### 6. Composition and Interfaces:

```js
// Interface
class CanFly {
  fly() {
    console.log("Flying...");
  }
}

// Composable class
class Bird {
  constructor(name) {
    this.name = name;
  }

  // Compose CanFly
  fly() {
    console.log(`${this.name} is flying.`);
  }
}

// Usage
const bird = new Bird("Sparrow");
bird.fly();
```

### 7. Prototype-based Inheritance

```js
// Base object
const vehiclePrototype = {
  init: function (make, model) {
    this.make = make;
    this.model = model;
  },
  display: function () {
    console.log(`Make: ${this.make}, Model: ${this.model}`);
  },
};

// Create objects using the prototype
const car = Object.create(vehiclePrototype);
car.init("Toyota", "Camry");
car.display();

const bike = Object.create(vehiclePrototype);
bike.init("Harley-Davidson", "Sportster");
bike.display();
```

### 8. Callback Functions and Asynchronous Programming

```js
class DataService {
  fetchData(callback) {
    // Simulating asynchronous data fetching
    setTimeout(() => {
      const data = "Some fetched data";
      callback(data);
    }, 1000);
  }
}

// Usage
const dataService = new DataService();

dataService.fetchData((data) => {
  console.log(`Received data: ${data}`);
});
```

### 9. Error Handling and Exceptions

```js
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

class ErrorHandler {
  handleError(error) {
    if (error instanceof CustomError) {
      console.log(`Custom error handled: ${error.message}`);
    } else {
      console.error(`Unhandled error: ${error.message}`);
    }
  }
}

// Usage
const errorHandler = new ErrorHandler();

try {
  throw new CustomError("This is a custom error");
} catch (error) {
  errorHandler.handleError(error);
}

try {
  throw new Error("This is a generic error");
} catch (error) {
  errorHandler.handleError(error);
}
```
