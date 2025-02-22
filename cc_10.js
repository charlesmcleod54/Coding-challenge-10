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

// Task 3: Creating an Inventory Class
class Inventory {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    listProducts() {
        this.products.forEach(product => {
            console.log(product.getDetails());
        });
    }
}

// Test Case 3
const Inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();

// Task 4: Implementing Order Management
class Inventory {
    constructor() {
        this.products = [];
        this.orders = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    placeOrder(orderId, product, quantity) {
        if (product.stock >= quantity) {
            const order = new Order(orderId, product, quantity);
            this.orders.push(order);
            console.log(order.getOrderDetails());
        } else {
            console.log('Not enough stock available!');
        }
    }
    listOrders() {
        this.orders.forEach(order => {
            console.log(order.getOrderDetails());
        });
    }
}

// Test Case 4
inventory.placeOrder(464, prod1, 4);
inventory.listOrders();
console.log(prod1.getDetails());

// Task 5: Implementing Product Restocking
class Inventory {
    constructor() {
        this.products = [];
        this.orders = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    placeOrder(orderId, product, quantity) {
        if (product.stock >= quantity) {
            const order = new Order(orderId, product, quantity);
            this.orders.push(order);
            console.log(order.getOrderDetails());
        } else {
            console.log('Not enough stock available!');
        }
    }
    listOrders() {
        this.orders.forEach(order => {
            console.log(order.getOrderDetails());
        });
    }
    restockProduct(productId, quantity) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            product.stock += quantity;
        } else {
            console.log('Product not found!');
        }
    }
}

// Test Case 5
inventory.restockProduct(101, 5);
console.log(prod1.getDetails());
