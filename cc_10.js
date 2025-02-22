// Task 1: Creating a Product Class
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }
    getDetails() {
        return 'Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}';
    }
    updateStock(quantity) {
        this.stock -= quantity;
    }
}

// Test Case 1
const prod1 = new Product("Footballs", 101, 20, 50);
console.log(prod1.getDetails());

prod1.updateStock(5);
console.log(prod1.getDetails());

// Task 2: Creating an Order Class
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
    }
    getOrderDetails() {
        const totalPrice = this.product.price * this.quantity;
        return 'Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${totalPrice}';
    }
}

// Test Case 2
const order1 = new Order(256, prod1, 8);
console.log(order1.getOrderDetails());
console.log(prod1.getDetails());
