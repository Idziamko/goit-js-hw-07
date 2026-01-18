class StringBuilder {
  // 1. Declare a private property
  #value;

  constructor(initialValue) {
    this.#value = initialValue; // Initialize private property
  }

  // Method to get current value
  getValue() {
    return this.#value;
  }

  // Method to append string to the end
  padEnd(str) {
    this.#value += str;
  }

  // Method to prepend string to the start
  padStart(str) {
    this.#value = str + this.#value;
  }

  // Method to add string to both start and end
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
