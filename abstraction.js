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
