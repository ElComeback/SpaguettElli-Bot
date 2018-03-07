const token = process.env.BOT_TOKEN;
const {Client, PermissionLevels} = require('klasa');
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
client.eventArray = []
client.usersArray = client.users.array()

client.permissionLevels = new PermissionLevels()
  // Cualquiera puede usar este comando
  .add(0, () => true)
  // Miembros que sean mods en el servidor
  .add(7, (client, msg) => {
    if (!msg.guild) return false
    if (msg.member.roles.get(msg.guildConfigs.modRole)) return true
    return false
  })
  // Miembros que son owners en el servidor
  .add(8, (client, msg) => msg.guild && msg.member === msg.guild.owner)
  // Bot Developers
  .add(9, (client, msg) => client.botDevs.includes(msg.author.id))
  // Deja al creador del bot usar comandos solo para el creador del bot
.add(10, (client, msg) => msg.author === client.owner)
