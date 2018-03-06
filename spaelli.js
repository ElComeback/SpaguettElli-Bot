const Discord = require("discord.js");
const prefix = process.env.PREFIX
const komada = require("komada");
const client = new komada.Client({
  ownerID : "285402109900226560",
  prefix: "+se/",
  clientOptions: {
    fetchAllMembers: false,
  },
  cmdLogging: true,
});

client.on("ready", () => {
   console.log("Estoy Online!");
});
 


client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'ping')) {
        message.channel.sendMessage('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
    }
});

client.login(process.env.BOT_TOKEN);     
