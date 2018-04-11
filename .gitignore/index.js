const Discord = require('discord.js');
const bot = new discord.Client();

var prefix = ("&");

bot.on("ready", function() {
  bot.user.setGame("&help | By NeYziX")
  console.log("le bot a démarré"); 
});

bot.login("NDMzNzIyMjE0NTMwMDIzNDM0.DbAACw.TvnKIT0eJOKVc8aD0Xa6x2y9K5A");
