const EventEmitter = require("node:events");
const { generateId } = require("../utils");

class PizzaEmitter extends EventEmitter { }

const pizzaEmitter = new PizzaEmitter();

class Order {
    #id;
    #size;
    #clientName;
    constructor(id, size, clientName) {
        this.#id = id;
        this.#size = size;
        this.#clientName = clientName;
    } 
    get id() {
        return this.#id;
    }
    get size() {
        return this.#size;
    }
    get clientName() {
        return this.#clientName;
    }
}

pizzaEmitter.on("order-pizza", (clientName, size = "medium") => {
    const order = new Order(generateId(), size, clientName);
    console.log(`${order.id} Order recieved! (${order.size} pizza for ${order.clientName})`);
    setTimeout(() => pizzaEmitter.emit("cook-start", order), 1000);
});

pizzaEmitter.on("cook-start", (order) => {
    console.log(`${order.id} Pizza is cooking... (${order.size} pizza for ${order.clientName})`);
    setTimeout(() => pizzaEmitter.emit("cook-end", order), size === "Large" ? 5000 : 2000);
})

pizzaEmitter.on("cook-end", (order) => {
    console.log(`${order.id} Pizza is ready (${order.size} pizza for ${order.clientName})`);
    setTimeout(() => pizzaEmitter.emit("give-pizza", order), 1000);
});

pizzaEmitter.on("give-pizza", (order) => console.log(`${order.id} Order completed! ${order.clientName} is happy`));



pizzaEmitter.emit("order-pizza", "small");
pizzaEmitter.emit("order-pizza", "medium");
pizzaEmitter.emit("order-pizza", "large");
pizzaEmitter.emit("order-pizza", "medium");
pizzaEmitter.emit("order-pizza", "small");
pizzaEmitter.emit("order-pizza", "medium");
pizzaEmitter.emit("order-pizza", "medium");