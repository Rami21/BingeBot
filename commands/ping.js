module.exports = {
	name: 'ping',
	description: 'Ping!',
	guildOnly: false,
	embed: false,
	execute(message, args) {
		message.channel.send('pong.');
	},
};