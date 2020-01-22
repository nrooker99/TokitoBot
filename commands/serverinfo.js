const Discord = require('discord.js');
const bot = new Discord.Client();
const color = "#0FF3E9";

module.exports.run = async (bot, message, args) => {

    let icon = bot.user.displayAvatarURL;
	let serverembed = new Discord.RichEmbed()
		.setDescription("**Server info**")
		.setThumbnail(icon)
		.setColor(color)
		.addField("Server Name", message.guild.name)
		.addField("Created on", message.guild.createdAt)
		.addField("You joined on", message.member.joinedAt)
		.addField("Total members", message.guild.memberCount)
		.setTimestamp()
		.setFooter("TokitoBot!", bot.user.displayAvatarURL);

        return message.channel.send(serverembed);
}

module.exports.help = {
    name: "serverinfo"
}