const express = require('express');

const server = express();

server.all('/', (req, res) => {
  //create new route at root domain. Will respond to all HTTP requests with the reply below
  res.send('Bot is running!');
});

function keepAlive() {
  server.listen(5000, () => {
    console.log('Server is ready!');
  });
}

module.exports = keepAlive();
