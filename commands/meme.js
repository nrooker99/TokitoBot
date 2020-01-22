const { RichEmbed } = require('discord.js');
const randomPuppy = require("random-puppy");
const color = "#0FF3E9";

module.exports.run = async (bot, message, args) => {
    const subReddits = ["dankmemes", "meme", "memes", "me_irl", "meirl"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await randomPuppy(random);
    const embed = new RichEmbed()
        .setColor(color)
        .setImage(img)
        .setTitle(`From r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)
        .setTimestamp()
        .setFooter("TokitoBot!", bot.user.displayAvatarURL);

    message.channel.send(embed);
    
}

module.exports.help = {
    name: "meme"
}