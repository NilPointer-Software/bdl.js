# bdl.js
[![npm version](https://badge.fury.io/js/bdl.js.svg)](https://badge.fury.io/js/bdl.js)
Library for Bot Designer List API

## Example:
```js
const Discord = require('discord.js');
const { connectBdlBot } = require('bdl.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('<Discord Token>');
connectBdlBot("<Bot Designer List Token>", client)
```

## How to retrieve Bot Designer List Token?
- Go here https://botdesignerlist.com/account
- Click `Settings` button under your bot
- Press `Copy token`
