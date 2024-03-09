import EventEmitter from "node:events";
import { generateId } from "../utils";

enum Size {
  small,
  medium,
  large,
}

class PizzaEmitter extends EventEmitter {
  constructor() {
    super();
    this.on("order-pizza", (clientName: string, size: Size = Size.medium) => {
      const order = new Order(generateId(), size, clientName);
      console.log(
        `${order.id} Order recieved! (${Size[order.size]} pizza for ${
          order.clientName
        })`
      );
      setTimeout(() => this.emit("cook-start", order), 1000);
    });

    this.on("cook-start", (order: Order) => {
      console.log(
        `${order.id} Pizza is cooking... (${Size[order.size]} pizza for ${
          order.clientName
        })`
      );
      const estimatedTime =
        order.size === Size.large
          ? 10000
          : order.size === Size.medium
          ? 5000
          : 2500;
      setTimeout(() => this.emit("cook-end", order), estimatedTime);
    });

    this.on("cook-end", (order: Order) => {
      console.log(
        `${order.id} Pizza is ready (${Size[order.size]} pizza for ${order.clientName})`
      );
      setTimeout(() => this.emit("give-pizza", order), 1000);
    });

    this.on("give-pizza", (order: Order) =>
      console.log(`${order.id} Order completed! ${order.clientName} is happy`)
    );
  }
  registerOrder(size: Size, clientName: string) {
    this.emit("order-pizza", clientName, size);
  }
}

const pizzaEmitter = new PizzaEmitter();

class Order {
  #id: string;
  #size: Size;
  #clientName: string;
  constructor(id: string, size: Size, clientName: string) {
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

pizzaEmitter.registerOrder(Size.large, "John");
pizzaEmitter.registerOrder(Size.medium, "Jake");
pizzaEmitter.registerOrder(Size.small, "Sam");
// pizzaEmitter.registerOrder(Size.large, "Mark");
// pizzaEmitter.registerOrder(Size.medium, "Lars");
// pizzaEmitter.emit("order-pizza", "medium");
// pizzaEmitter.emit("order-pizza", "large");
// pizzaEmitter.emit("order-pizza", "medium");
// pizzaEmitter.emit("order-pizza", "small");
// pizzaEmitter.emit("order-pizza", "medium");
// pizzaEmitter.emit("order-pizza", "medium");
