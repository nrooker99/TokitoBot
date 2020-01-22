const Discord = require('discord.js');
const bot = new Discord.Client();
const color = "#0FF3E9";

module.exports.run = async (bot, message, args) => { 

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!rUser) return message.channel.send("**Couldn't find user.**");
        args.shift();
        let reason = args.join(" ");
        if (!reason) return message.channel.send("**You need to supply a reason to use this command.**");
        

        let reportEmbed = new Discord.RichEmbed()
            .setDescription("Reports")
            .setColor(color)
            .setFooter("TokitouBot!", bot.user.displayAvatarURL)
            .setTimestamp()
            .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
            .addField("Report By", `${message.author} with ID: ${message.author.id}`)
            .addField("Channel", message.channel)
            .addField("Time", message.createdAt)
            .addField("Reason", reason);

        let reportChannel = message.guild.channels.find(`name`, "reports");
        if (!reportChannel) return message.channel.send("Using this command requires you to have a 'reports' channel.");

        message.delete();
        return reportChannel.send(reportEmbed);
    
}

module.exports.help = {
    name: "report"
}