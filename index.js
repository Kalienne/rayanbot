const Discord = require('discord.js');
const music = require('discord.js-music-v11')


var bot = new Discord.Client();
var prefix = ("r!");
var randnum = 0;

bot.on('ready', () => {
  bot.user.setPresence({ game: { name: 'Préfix = r! ', type: 0} });
  console.log("Bot ready !");
  music(bot)
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
  if (message.content === "ping"){
      message.reply("pong");
      console.log('ping pong');

  }

  if (message.content === "Coucou le bot"){

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
"title": "Aide des commandes:",
"description": "``Le préfixe du bot est r!``",
"color": 0x0066FE,
"fields": [
{
 "name": "Invite",
 "value": "``C'est pour inviter le bot dans un autre serveur``"
},
{
 "name": "ping",
 "value": "``Il te répondra pong``"
},
{
"name": "help",
"value": "``C'est pour voir toutes les commendes du bot !``"
},
{
"name": "youtube",
"value": "``C'est pour rechercher sur youtube !``"
},
{
"name": "play",
"value": "``C'est pour lancé des musique a partir de l'url youtube``"
},
{ 
"name": "clear",
"value": "``C'est pour effacer autant de message que vous le désiré``"
},  
 {
"name": "say",
"value": "``C'est pour faire parler le bot``"
},
{
"name": "random",
"value": "``Nico Nico NIIIII``"
},
{
"name": "twitter",
"value": "``Cette commande donne le twitter du créateur``"
},
{
"name": "lenny",
"value": "`( ͡° ͜ʖ ͡°)`"
},
{
"name": "google",
"value": "`Pour faire une recherche google: r!google + recherche`"
},
{
"name": "Serveur du bot !",
"value": "https://discord.gg/y8Zqvj6"
},
{
"name": "Serveur du créateur !",
"value": "https://discord.gg/aTUUGUr"
}
]
}
message.channel.send({ embed })
  }
})
