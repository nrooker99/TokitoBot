const Discord = require('discord.js');
const bot = new Discord.Client();
const color = "#0FF3E9";
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("**You dont have permission to perform this command!**");

    let rMember = message.mentions.members.first();
    if(!rMember) return message.channel.send("**Please specify a user to unmute.**");
    let role = message.guild.roles.find(r => r.name == "muted");

    if(!rMember.roles.has(role.id)) {
        return message.channel.send(`**${rMember.displayName} is not muted!**`)
    } else {
        await rMember.removeRole(role.id).catch(e => console.log(e.message))
        message.channel.send(`**${rMember.displayName} has been unmuted.**`)
    }

}

module.exports.help = {
    name: "unmute"
}