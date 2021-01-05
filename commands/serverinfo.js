module.exports = {
	name: 'serverinfo',
	description: 'Display info about this server.',
	guildOnly: true,
	embed: true,
	execute(message) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};