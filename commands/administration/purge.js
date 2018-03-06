
const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(client) {
        super(client, {
            name: 'purge',
            enabled: true,
            runIn: ['text', 'group'],
            cooldown: 5,
            aliases: ['pg'],
            permLevel: 6,
            botPerms: ['MANAGE_MESSAGES', 'SEND_MESSAGES'],
            requiredSettings: [],
            description: 'Elimina una cantidad de mensajes dado por el usuario',
            quotedStringSupport: false,
            usage: '',
            usageString: ['se/purge [cantidad de mensajes]', 'se/pg [cantidad de mensajes]'],
            usageDelim: undefined,
            extendedHelp: 'No extended help available.'
        });
    }

    async run(msg) {
        let message = await msg.channel.send(`***__Eliminando ${args} mensajes. Por favor espere, esto podría tomar un rato...__***`)
    let modLog = msg.guild.channels.find('name', 'log')
    if (msg.member.hasPermission('MANAGE_MESSAGES')) {
      if (args) {
        if (!isNaN(args)) {
          msg.channel.fetchMessages({
            before: msg.id,
            limit: args
          }).then(messages => {
            msg.channel.bulkDelete(messages);
            msg.channel.send(`:wastebasket: | **__${args} mensajes eliminados correctamente!__**`);
            message.delete();
          }).catch(console.log);
          msg.delete();
        } else {
          msg.channel.send("Eso no es un número.");
          return;
        }
      } else {
        msg.channel.send("Necesito saber cuántos mensajes quieres que borre...");
        return;
      }
    } else {
      msg.reply("Lo siento, no puedo tomar esta orden de tí, revisa tener los permisos correctos");
    }

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
        // You can optionally define this method which will be run when the bot starts (after login, so discord data is available via this.client)
    }

};
