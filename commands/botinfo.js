const Discord = require('discord.js');
const color = "#0FF3E9";

module.exports.run = async (bot, message, args) => {

    let icon = bot.user.displayAvatarURL;
		let botembed = new Discord.RichEmbed()
		.setDescription("**My info**")
		.setThumbnail(icon)
		.setColor(color)
		.addField("Name: ", bot.user.username)
		.addField("Created on: ", bot.user.createdAt)
		.addField("Created by: ", "extra mayo#7782")
		.setTimestamp()
		.setFooter("TokitoBot!", bot.user.displayAvatarURL);

		return message.channel.send(botembed);

}

module.exports.help = {
    name: "botinfo"
}