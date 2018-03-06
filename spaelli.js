const Discord = require("discord.js");
const prefix = process.env.PREFIX;
const token = process.env.BOT_TOKEN;
const { Client } = require('klasa');
//Inicio de Klasa--------------------------------------------------------------------------------------------------
new Client({
    clientOptions: {
        fetchAllMembers: false
    },
    prefix: 'se/',
    language: 'es-MX',
    cmdEditing: true,
    typing: false,
    readyMessage: (client) => `${client.user.tag}, Online en ${client.guilds.size} servidores y con ${client.users.size} usuarios`
}).login(token);
