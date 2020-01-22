const Discord = require('discord.js');
const bot = new Discord.Client();
const color = "#0FF3E9";
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => { 

if (!message.member.hasPermission(["MANAGE_ROLES"])) return message.channel.send("**You don't the permissions to use this command.**");
let mutee = message.mentions.members.first();
if (!mutee) return message.channel.send("**You need to enter a user to use this command.**");

let muterole = message.guild.roles.find(r => r.name ===  "muted");
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "muted",
                color: color,
                permissions: []
            })
        message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                SEND_TTS_MESSAGES: false,
                SPEAK: false,
                ATTACH_FILES: false,
                CONNECT: false,
                
            })
        })
        } catch (err) { console.log(err); }
    }

    mutee.addRole(muterole.id).then(() => {
        message.channel.send(`**${mutee.user.username} has been muted.**`);
    })

}

module.exports.help = {
    name: "mute"
}