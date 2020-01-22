const Discord = require('discord.js');
const bot = new Discord.Client();
const color = "#0FF3E9";

module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission(['KICK_MEMBERS'])) {
		
			let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
			if (!member) return message.channel.send("**Couldn't find user**");
			member.kick().then((member) => {

				giphy.search('gifs', {"q": "kick out"}).then((response) => {
					var totalResponses = response.data.length;
					var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
					var responseFinal = response.data[responseIndex];

					message.channel.send(":wave: " + member.displayName + " **has been kicked!**",  {
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