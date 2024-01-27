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
