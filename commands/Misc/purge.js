
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
            description: 'Elimina una cantidad de mensajes dada por el usuario',
            quotedStringSupport: false,
            usage: '<amount:int{2,100}>',
            usageDelim: undefined,
            extendedHelp: 'No extended help available.'
        });
    }

    async run(msg, [amount, message]) {
        const embed = new this.client.methods.Embed()
       .addTitle('Action:', '***purge***')
       .addField('Purged By:', `${this.msg.author.username}`)
       .addField('Purged Messages:', `**${amount}**`)
       .addField('Purged By:', `${this.msg.author.username}`, true)
       .addField('Purged Messages:', `**${amount}**`, true)
       .setColor('RANDOM')
       .setTimestamp()
       .setFooter(`ServerID:, ${msg.guild.id}`)
       .setFooter(`ServerID: ${msg.guild.id}`)
       return this.client.channels.get('399062303980519434').send({ embed });
       return (msg.channel.bulkDelete(amount, true), msg.send(`**__¡${amount} mensajes eliminados con éxito!__**`));
       msg.delete();
    }
    async init() {
    }
};
