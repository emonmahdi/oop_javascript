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
