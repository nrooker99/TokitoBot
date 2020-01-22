const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
		
		let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
		if (!member) return message.channel.send("**Couldn't find user**");
			member.ban(1).then((member) => {
				giphy.search('gifs', {"q": "banned"}).then((response) => {
					var totalResponses = response.data.length;
					var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
					var responseFinal = response.data[responseIndex];

					message.channel.send(":wave: " + member.displayName + " **has been banned!**",  {
						files: [responseFinal.images.fixed_height.url]
					})
				}).catch(() => {
					message.channel.send('Error ugh!')
				})
			})
	}
}

module.exports.help = {
    name: "kick"
}