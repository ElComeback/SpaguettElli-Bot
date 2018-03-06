const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = process.env.PREFIX

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
