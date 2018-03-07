
const {Command, RichDisplay} = require('klasa');
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

    async run(msg, [amount, message]) {
        return (msg.channel.bulkDelete(amount, true), msg.reply(`**__${amount} mensajes eliminidos con éxito!__**`));
        const modLog = msg.guild.channels.find('name', 'log')
        msg.delete();
       const embed = new this.client.methods.Embed()
       .setTimestamp()
       .addField('Action:', '***purge***')
       .addField('Purged By:', `${msg.author}`)
       .addField('Purged Messages:', `**${amount}**`)
       .setColor('RANDOM')
       .setFooter(`ServerID: ${msg.guild.id}`)
       return msg.modLog.send({ embed });
    }
    async init() {
    }
};
