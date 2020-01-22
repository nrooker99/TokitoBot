const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let deleteAmount = parseInt(args[0]);

    if (isNaN(deleteAmount)) {
        message.channel.send("**that input isn't a number.**").then(m => m.delete(5000));
        return;
    }
    else if (deleteAmount <= 0) {
        return message.channel.send("**I can't delete less than 1 message.**").then(m => m.delete(5000));
    }
    else if (deleteAmount > 100) {
        return message.channel.send("**I can't delete more than 100 messages at a time.**").then(m => m.delete(5000));
    }
    else if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("**you don't have permission to clear messages.**").then(m => m.delete(5000));
    }
    else {
        message.channel.bulkDelete(deleteAmount + 1, true)
            .then(deleted => message.channel.send(`Deleted \`${deleteAmount}\` messages.`)).then(m => m.delete(5000))
            .catch(err => message.channel.send(`**Sorry! I can't clear messages older than 2 weeks.**`).then(m => m.delete(5000)));
    }

}

module.exports.help = {
    name: "clear"
}