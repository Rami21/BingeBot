module.exports = {
	name: 'beep',
	description: 'Beep!',
	guildOnly: false,
	embed: false,
	execute(message) {
		message.channel.send('boop.');
	},
};