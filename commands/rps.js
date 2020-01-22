const Discord = require('discord.js');
const { promptMessage } = require("../functions.js");
const bot = new Discord.Client();
const color = "#0FF3E9";



module.exports.run = async (bot, message, args) => { 

    const chooseArr = ["⛰", "📰", "✂️"];
    
    let rpsEmbed = new Discord.RichEmbed()
        .setColor(color)
        .setFooter("TokitoBot!", bot.user.displayAvatarURL)
        .setDescription("Pick one!")
        .setTimestamp();

    const msg = await message.channel.send(rpsEmbed);
    const reacted = await promptMessage(msg, message.author, 30, chooseArr);

    const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

    const result = await getResult(reacted, botChoice);
    await msg.clearReactions();

    rpsEmbed
        .setDescription("")
        .addField(result, `${reacted} vs ${botChoice}`);

    msg.edit(rpsEmbed);

    function getResult(me, clientChosen) {
        if ((me === "⛰" && clientChosen === "✂️") || 
           (me === "📰" && clientChosen === "⛰") ||
           (me === "✂️" && clientChosen === "📰")) {
            return "You win!";
        }
        else if (me === clientChosen) {
            return "Tie game!";
        }
        else {
            return "You lost!";
        }
    
    }
    

}

module.exports.help = {
    name: "rps"
}