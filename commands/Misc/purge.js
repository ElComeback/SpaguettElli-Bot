
const { Command } = require('klasa');
const Discord = require('discord.js');

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            name: 'purge',
            enabled: true,
            runIn: ['text', 'group'],
            cooldown: 5,
            aliases: ['pg'],
            permLevel: 6,
            botPerms: ['MANAGE_MESSAGES'],
            requiredSettings: [],
            description: 'Elimina una cantidad de mensajes dado por el usuario',
            quotedStringSupport: false,
            usage: '<amount:int{2,100}>',
            usageDelim: undefined,
            extendedHelp: 'No extended help available.'
        });
    }

    async run(msg, [amount]) {
        return msg.channel.bulkDelete(amount, true)
        let message = await msg.channel.send(`***__Eliminando ${args} mensajes. Por favor espere, esto podría tomar un rato...__***`)
        let modLog = msg.guild.channels.find('name', 'log')
        msg.channel.send(`:wastebasket: | **__${args} mensajes eliminados correctamente!__**`);
        message.delete();
        msg.delete();
        const embed = new Discord.RichEmbed()
       .setAuthor(`${msg.author.tag}`, `${msg.author.avatarURL}`)
       .setTimestamp()
       .addField('Action:', '***purge***')
       .addField('Purged By:', `${msg.author}`)
       .addField('Purged Messages:', `**${args}**`)
       .setColor('RANDOM')
       .setFooter(`ServerID: ${msg.guild.id}`)
       return msg.guild.channels.get(modLog.id).send({
       embed
    })
    }
    async init() {
    }
};
