const Discord = require("discord.js");
const prefix = process.env.PREFIX;
const token = process.env.BOT_TOKEN;
const { Client } = require('klasa');
//Inicio de Klasa--------------------------------------------------------------------------------------------------
new Client({
    clientOptions: {
        fetchAllMembers: true
    },
    fetchAllMembers: true,
    prefix: 's/',
    cmdEditing: true,
    cmdLogging: true,
    typing: true,
    laguage: ('es-MX'),
    botDevs: ['131403526411780096', '285402109900226560'],
    readyMessage: (client) => `${client.user.tag}, Online en ${client.guilds.size} servidores y con ${client.users.size} usuarios`
}).login(token);
