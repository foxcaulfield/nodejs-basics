const EventEmitter = require("events");

const MESSAGE_EVENT = "message";

class Logger extends EventEmitter {
    log(message) {
        this.emit(MESSAGE_EVENT, `${Date.now()} ${message}`);
    }
}

const logger = new Logger();

logger.on(MESSAGE_EVENT, (data) => {
    console.log(data);
});

logger.log("first");
logger.log("second");
logger.log("third");