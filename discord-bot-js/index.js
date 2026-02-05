const Discord = require('discord.js'); //require = npm install
const fetch = require('node-fetch');
const Database = require('@replit/database');
const keepAlive = require('./server');

const db = new Database();
const client = new Discord.Client();

const sadWords = ['sad', 'depressed', 'unhappy', 'angry'];
const starterEncouragements = [
  'Cheer up!',
  'Hang in there!',
  'You are a great person!',
];

db.get('encouragements').then((encouragements) => {
  //add new encouragements to the existing ones, to database
  if (!encouragements || encouragements.length < 1) {
    db.set('encouragements', starterEncouragements);
  }
});

db.get('responding').then((value) => {
  //set initial status of ON/OFF upon initialization
  if (value === null) {
    db.set('responding', true);
  }
});

function updateEncouragements(encouragingMessage) {
  db.get('encouragements').then((encouragements) => {
    encouragements.push([encouragingMessage]);
    db.set('encouragements', encouragements);
  });
}

function deleteEncouragement(index) {
  db.get('encouragements').then((encouragements) => {
    if (encouragements.length > index) {
      encouragements.splice(index, 1); //remove an item from the array
      db.set('encouragements', encouragements);
    }
  });
}

function getQuote() {
  //fetched data from the server
  return fetch('https://zenquotes.io/api/random')
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      return data[0]['q'] + ' - ' + data[0]['a']; //compile elements into a readible sentence
    });
}

client.on('ready', () => {
  //bot's notification in console, once logged in
  console.log(`Logged in as ${client.user.tag}`); //bot's name
});

client.on('message', (msg) => {
  //regular msg reply from bot on request
  if (
    msg.content.toLowerCase() === 'hi' ||
    msg.content.toLowerCase() === 'hello' ||
    msg.content.toLowerCase() === 'hey'
  ) {
    msg.reply(`Hello!`);
  }
  if (msg.author.bot) {
    //ensuring that bot doesn't respond to itself
    return;
  }
  if (msg.content.includes('inspire') || msg.content.includes('quote')) {
    //
    getQuote().then((quote) => msg.channel.send(quote));
  }

  db.get('responding').then((responding) => {
    if (responding && sadWords.some((word) => msg.content.includes(word))) {
      //checks for on/off status and if on - look for sad word and reply with random index in encouragements array
      db.get('encouragements').then((encouragements) => {
        const encouragment =
          encouragements[Math.floor(Math.random() * encouragements.length)];
        msg.reply(encouragment);
      });
    }
  });

  if (msg.content.startsWith('$new')) {
    encouragingMessage = msg.content.split('$new ')[1];
    updateEncouragements(encouragingMessage);
    msg.channel.send('New encouraging message added!');
  }

  if (msg.content.startsWith('$del')) {
    index = parseInt(msg.content.split('$del ')[1]);
    deleteEncouragement(index);
    msg.channel.send('Encouraging message deleted!');
  }

  if (msg.content.startsWith('$list')) {
    db.get('encouragements').then((encouragements) => {
      msg.channel.send(encouragements);
    });
  }

  if (msg.content.startsWith('$responding')) {
    // ON and OFF functionality for the Responding Function
    value = msg.content.split('responding ')[1];
    if (value.toLowerCase() === 'true') {
      db.set('responding', true);
      msg.channel.send('Responding ON');
    } else {
      db.set('responding', false);
      msg.channel.send('Responding OFF');
    }
  }
});

keepAlive();
client.login(process.env.TOKEN); //.env file to store Bot's key safely
