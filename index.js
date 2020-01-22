const Discord = require('discord.js');
const { prefix, token, giphyToken } = require('./config.json');
const bot = new Discord.Client({disableEveryone: true});
const color = "#0FF3E9";
const fs = require("fs");
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

	if (err) console.log(err);

	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if (jsfile.length <= 0) {
		console.log("Error: couldn't find commands folder.");
		return;
	}
	
	console.log("Found file.");
	for (i = 0; i < jsfile.length; ++i) console.log(jsfile[i]);

	jsfile.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		console.log(`${f} loaded!`);
		bot.commands.set(props.help.name, props);
	});

});

var GphApiClient = require('giphy-js-sdk-core');
giphy = GphApiClient(giphyToken);

bot.once('ready', () => {
	console.log('Ready!');

	// let users know how to call the help command
	bot.user.setActivity(`${prefix} help`, {type: "LISTENING"});
});

bot.on('message', async message => {

	if (message.author.bot) return;
	if (!message.guild) return;
	if (!message.content.startsWith(prefix)) return;
	if (!message.member) message.member = await message.guild.fetchMember(message);

	const args = message.content.slice(prefix.length).trim().split(" ");
	const cmd = args.shift().toLowerCase();
	console.log(cmd);

	if (cmd.length === 0) return;

	let command = bot.commands.get(cmd);

	if (command) { command.run(bot, message, args); }
	
});

bot.login(token);
