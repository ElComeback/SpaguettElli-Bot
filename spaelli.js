const Discord = require("discord.js");
const prefix = process.env.PREFIX
const { Client } = require('klasa');
//Inicio de Klasa--------------------------------------------------------------------------------------------------
new Client({
    clientOptions: {
        fetchAllMembers: false
    },
    prefix: 'se/',
    cmdEditing: true,
    typing: true,
    readyMessage: (client) => `${client.user.tag}, Online en ${client.guilds.size} servidores y con ${client.users.size} usuarios`
}).login('process.env.BOT_TOKEN');

client.on("ready", () => {
   console.log("Estoy Online!");
});
 //Ping--------------------------------------------------------------------------------------------------------------
client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'ping')) {
        message.channel.sendMessage('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
    }
});   
