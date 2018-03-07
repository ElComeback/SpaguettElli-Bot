const { Command } = require('klasa');
const Discord = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'serverinfo',
            enabled: true,
            runIn: ['text', 'group'],
            cooldown: 0,
            aliases: [],
            permLevel: 0,
            botPerms: [],
            requiredSettings: [],
            description: '',
            quotedStringSupport: false,
            usage: '',
            usageDelim: undefined,
            extendedHelp: 'No extended help available.'
        });
    }

    async run(msg, [message]) {

    var server = message.guild;
  
    const embed = new Discord.RichEmbed()
    .setThumbnail(server.iconURL)
    .setAuthor(server.name, server.iconURL)
    .addField('ID', server.id, true)
    .addField('Region', server.region, true)
    .addField('Creado el', server.joinedAt.toDateString(), true)
    .addField('Dueño del Servidor', server.owner.user.username+'#'+server.owner.user.discriminator+' ('+server.owner.user.id +')', true)
    .addField('Miembros', server.memberCount, true)
    .addField('Roles', server.roles.size, true)
    .setColor(0x00FF00)
    
   message.channel.send({ embed });

    }

    async init() {
        // You can optionally define this method which will be run when the bot starts (after login, so discord data is available via this.client)
    }

};
