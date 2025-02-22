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
