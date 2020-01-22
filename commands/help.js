const Discord = require('discord.js');
const bot = new Discord.Client();
const color = "#0FF3E9";

module.exports.run = async (bot, message, args) => { 

    let icon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("__**Command list**__")
    .setColor(color)
    .setTimestamp()
    .addField("\n__Mod commands__", "\n!tokito ban [@user] - bans a user. Requires both the kick and ban members permissions to use.\n!tokitou kick [@user] - kicks a user. Requires the kick members permission to use.\n!tokito clear [1-100] - clear the given number of messages in any channel. Requires the manage messages permission to use. Cannot delete messages older than 2 weeks.\n!tokito mute [@user] - mutes the given user in chat and voice channels. Requires the manage roles permission to use.\n!tokito unmute [@user] - unmutes the given user.\ntokito report [@user] [reason] - reports the mentioned user for the reason that is given. Anybody can use this. Requires a channel called 'reports' in order to work")
    .addField("\n__For fun!__", "\n!tokito meme - grabs a random meme from reddit, and posts it in the chat.\n!tokitou rps - a rock, paper, scissors minigame. Wait for the emojis to pop up and then choose one to play.\n!tokitou love [@user] - a love affinity minigame.")
    .addField("\n__Music commands__", "\n!tokito music play [youtube link here] - provide a youtube link to the song you want to play, and I'll play it in the voice chat.\n!tokito music skip - skips the current song in the queue.\n!tokito music stop - stops the current song and clears the queue.")
    .addField("\n__Other commands__", "\n!tokito botinfo - displays info about me.\n!tokito serverinfo - displays info about the server I'm in.\n!tokito ping - displays my ping and the API's ping.")
    .addField("Problems?", "Contact **extra mayo#7782**")
    .setFooter("TokitoBot!", bot.user.displayAvatarURL);

    return message.channel.send(botembed);

}

module.exports.help = {
    name: "help"
}