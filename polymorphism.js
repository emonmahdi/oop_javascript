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
