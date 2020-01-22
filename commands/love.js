const Discord = require('discord.js');
const { getMember } = require("../functions.js");
const bot = new Discord.Client();
const color = "#0FF3E9";

module.exports.run = async (bot, message, args) => {

    let person =  message.mentions.members.first();

    if (!person || message.author.id === person.id) {
        person = message.guild.members
            .filter(m => m.id !== message.author.id)
            .random();
    }

    const love = Math.random() * 100;
    const loveIndex = Math.floor(love / 10);
    const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

    const embed = new Discord.RichEmbed()
        .setColor(color)
        .setThumbnail(person.user.displayAvatarURL)
        .addField(`☁ **${person.displayName}** loves **${message.member.displayName}** this much:`,
        `💟 ${Math.floor(love)}/100\n\n${loveLevel}`);

    message.channel.send(embed);

}

module.exports.help = {
    name: "love"
}