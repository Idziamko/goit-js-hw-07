const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],

  // Change code below this line
  getBalance() {
    return this.balance; // Added 'this' to access object property
  },

  getDiscount() {
    return this.discount; // Added 'this'
  },

  setDiscount(value) {
    this.discount = value; // Added 'this'
  },

  getOrders() {
    return this.orders; // Added 'this'
  },

  addOrder(cost, order) {
    // Added 'this' to balance and discount
    this.balance -= cost - cost * this.discount;
    this.orders.push(order); // Added 'this'
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
