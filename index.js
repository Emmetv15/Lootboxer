const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');
var store = JSON.parse(fs.readFileSync('./store.json'));

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(store.token);