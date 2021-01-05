
module.exports = {
	name: 'userinfo',
	description: 'Display info about yourself.',
	guildOnly: false,
	embed: true,
	execute(message) {
		const exampleEmbed = {
			color: 0x0099ff,
			author: {
				name: `${message.author.tag}`,
				icon_url: `${message.author.avatarURL()}`,
			},
			fields: [
				{
					name: 'ID',
					value: `${message.author.id}`,
					inline: true,
				},
				{
					name: 'Nickname',
					value: `${message.member.nickname}`,
					inline: true,
				},
				{
					name: 'Join date',
					value: `${message.member.joinedAt}`,
					inline: true,
				},
			],
			timestamp: new Date(),
		};
		
		message.channel.send({ embed: exampleEmbed });
	},
};