//Events Listener Module working in Async
const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(message) {
    this.emit('message', `${message} ${Date.now()}`); // emit synonym = release
  }
}

const logger = new Logger();
logger.on('message', (data) => {
  //pull emitted data and pass it on
  console.log(data);
});

logger.log('Hello');
