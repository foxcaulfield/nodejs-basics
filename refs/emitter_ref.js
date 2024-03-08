const EventEmitter = require("events");

class MyEmitter extends EventEmitter {
}

const myEmitter = new MyEmitter();

// myEmitter.on("someEvent", (...args) => {
myEmitter.on("someEvent", function(...args) {
    console.log("Some event occured");
    // console.log(this.constructor.name);
    // console.log(args);
});

myEmitter.once("someEvent", () => {
    console.log("Emitted once");
});

myEmitter.on("error", err => {
    console.log("An error occured", err);
});

myEmitter.emit("someEvent");
myEmitter.emit("someEvent", "one");
myEmitter.emit("someEvent", "one", "two");
myEmitter.emit("error", new Error("Hard error"));
myEmitter.emit("someEvent", "one", "two", "three");