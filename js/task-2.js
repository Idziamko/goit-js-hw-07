class Storage {
  // 1. Declare a private property
  #items;

  constructor(items) {
    this.#items = items; // Initialize private property
  }

  // Method to get current items
  getItems() {
    return this.#items;
  }

  // Method to add a new item
  addItem(newItem) {
    this.#items.push(newItem);
  }

  // Method to remove an item by name
  removeItem(itemToRemove) {
    // Filter out the item that needs to be removed
    this.#items = this.#items.filter((item) => item !== itemToRemove);
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
