const Discord = require('discord.js');
const music = require('discord.js-music-v11')


var bot = new Discord.Client();
var prefix = ("r!");
var randnum = 0;

bot.on('ready', () => {
  bot.user.setPresence({ game: { name: 'Préfix : r! ', type: 0} });
  console.log("Bot ready !");
  music(bot)
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
  if (message.content === "ping"){
      message.reply("pong");
      console.log('ping pong');

  }

  ife (message.content === "Coucou le bot"){

      if (randnum == 1){
         message.reply("coucou !");
         console.log(randnum);
      }

      if (randnum == 2){
         message.reply("va te faire !:p")
         console.log(randnum);
      }

  }

});

function random(min, max) {
  min = Math.ceil(0);
  max = Math.floor(3);
  randnum = Math.floor(Math.random() * (max - min +1) + min);
}

bot.on('message', function (message) {
  if (message.content === 'r!help') {
  const embed = {
"title": " ⛔ Maintenance ⛔ ",
"description": "``Le préfixe du bot est r!``",
"color": 0x0066FE,
"fields": [
{
 "name": "help",
 "value": "``⛔ Désolé , le bot est en maintenance , contacter Kalienne pour plus d'information ! ⛔``"
}
]
}
message.channel.send({ embed })
  }
})
