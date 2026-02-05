var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greeting', function () {
  console.log('This is a greeting!');
});

emtr.on('greeting', function () {
  console.log('Hello World!');
});

console.log(emtr);
emtr.emit('greeting');
