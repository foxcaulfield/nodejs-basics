const EventEmitter = require("node:events");

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
 