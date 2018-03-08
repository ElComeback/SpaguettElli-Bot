const { Command, Timestamp } = require('klasa');

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			name: 'server',
                        enabled: true,
                        runIn: ['text'],
                        botPerms: ['MANAGE_MESSAGES'],
			aliases: ['serverinfo'],
			description: 'Get information on the current server.',
			extendedHelp: 'No extended help available.'
		});
	}

	async run(msg, [Timestamp]) {
		this.timestamp = new Timestamp('d MMMM YYYY');
		this.verificationLevels = [
			'None',
			'Low',
			'Medium',
			'(╯°□°）╯︵ ┻━┻',
			'┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
		];

		this.filterLevels = [
			'Off',
			'No Role',
			'Everyone'
		];
		const serverInfo = new this.client.methods.Embed()
			.setColor(0x00AE86)
			.setThumbnail(msg.guild.iconURL())
			.addField('❯ Name', msg.guild.name, true)
			.addField('❯ ID', msg.guild.id, true)
			.addField('❯ Creation Date', this.timestamp.display(msg.guild.createdAt), true)
			.addField('❯ Region', msg.guild.region, true)
			.addField('❯ Explicit Filter', this.filterLevels[msg.guild.explicitContentFilter], true)
			.addField('❯ Verification Level', this.verificationLevels[msg.guild.verificationLevel], true)
			.addField('❯ Owner', msg.guild.owner ? msg.guild.owner.user.tag : 'None', true)
			.addField('❯ Members', msg.guild.memberCount, true);

		return msg.sendEmbed(serverInfo);
	}

};
