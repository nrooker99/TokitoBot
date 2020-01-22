const Discord = require('discord.js');
const bot = new Discord.Client();
const color = "#0FF3E9";

module.exports.run = async (bot, message, args) => {
    
if (message.author.bot) return;
if (!message.guild) return;

const msg = await message.channel.send(`**Pinging...**`);
msg.edit(`**Pinged!**`);

let clientLatency = `${Math.floor(msg.createdAt - message.createdAt)}ms`;
let apiLatency = `${Math.round(bot.ping)}ms`;

let pingembed = new Discord.RichEmbed()
	.setDescription("**Ping**")
	.setColor(color)
	.addField("My latency", clientLatency)
    .addField("API latency", apiLatency);
    
message.channel.send(pingembed);

}

module.exports.help = {
    name: "ping"
}