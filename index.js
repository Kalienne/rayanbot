﻿const Discord = require('discord.js')
const bot = new Discord.Client()
const Google = require('./commands/google')
const Play = require('./commands/play')
const Random = require('./commands/random')


bot.on('ready', function () {
  bot.user.setGame('tap r!help to help').catch(console.error)
})

bot.on('guildMemberAdd', function (member) {
  member.createDM().then(function (channel) {
    return member.send("Bienvenue sur le serveur + memberDisplayName, pour avoir les commande, tappe 'r!help'")
  }).catch(console.error)
})


bot.on('message', function (message) {
  if (message.content === 'r!invite') {
    message.channel.send("https://discordapp.com/oauth2/authorize?client_id=397817720512577557&scope=bot&permissions=8")
  }
})
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
bot.on('message', function (message) {
  if (message.content === 'r!ping') {
    const embed = {
    "color": 0x0066FE,
    "description": "pong",
  }
message.channel.send({ embed })
 }
})

bot.on('message', function (message) {
  let commandUsed =
  Google.parse(message) ||
  Play.parse(message) ||
  Random.parse(message) 
  

})

bot.on('message', function (message) {
  if (message.content === 'r!lenny') {
    message.channel.send('( ͡° ͜ʖ ͡°)')
  }
})


bot.login(process.env.TOKEN)
