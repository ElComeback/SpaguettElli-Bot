const token = process.env.BOT_TOKEN;
const {Client, PermissionLevels} = require('klasa');
const config = require('./config.json');
//Inicio de Klasa--------------------------------------------------------------------------------------------------
const client = new Client({
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
//Inicio de PermLevels-----------------------------------------------------------------------------------------------
config.permissionLevels = new PermissionLevels()
    .addLevel(0, false, () => true)

    .addLevel(6, false, (client, msg) => msg.guild && msg.member.permissions.has('MANAGE_GUILD'))

    .addLevel(7, false, (client, msg) => msg.guild && msg.member === msg.guild.owner)

    .addLevel(9, (client, msg) => client.botDevs.includes(msg.author.id))

    .addLevel(10, false, (client, msg) => msg.author === client.owner);

