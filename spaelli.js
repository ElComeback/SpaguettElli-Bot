const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy Online!");
});


client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(process.env.PREFIX)) return;

    if (message.content.startsWith(process.env.PREFIX + 'ping')) {
        message.channel.sendMessage('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
    }
});

client.login(process.env.BOT_TOKEN);     
