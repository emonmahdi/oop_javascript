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

// console.log(sakib.calculate_age());
// console.log(sakib.getSalary());

const sakib2 = new Player("Sakib", "1984-2-4", 200000, 1);
const tamim = new Player("Tamim", "1984-4-1", 300000, 1);

console.log(sakib2.getSalary());
console.log(tamim.calculate_age());

console.log(tamim.birthDay); // undefined
// when i use the private sign # then not access that property outside the class or function
