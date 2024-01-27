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
