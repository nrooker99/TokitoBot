const Discord = require('discord.js');
const bot = new Discord.Client();
const ytdl = require('ytdl-core');
const color = "#0FF3E9";

var servers = {}

module.exports.run = async (bot, message, args) => {
    switch (args[0]) {
        case 'play':

            if (!args[1]) return message.channel.send("**You need to provide a link to use this command.**"); 
            if (!message.member.voiceChannel) return message.channel.send("**You must be in a voice channel to play music!**"); 
            if (!(args[1].substr(0, 8) == "https://")) return message.channel.send("**You need to supply a link to play music!**");
            if (!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            }
        
            var server = servers[message.guild.id];
        
            console.log(args[1]);
            server.queue.push(args[1]);
            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                play(connection, message)
            });
            
        message.channel.send("**Song queued!**");
        
        break;

        case 'skip':
            try {
                var server = servers[message.guild.id];
                if (!server.queue[0]) { message.guild.voiceConnection.disconnect(); }
                if (server.dispatcher) server.dispatcher.end();
                message.channel.send("**Song skipped!**");
            }
            catch (err) { message.channel.send("**You don't have any songs queued.**"); }
        break;

        case 'stop':
            var server = servers[message.guild.id];
                if (message.guild.voiceConnection) {
                    for (var i = server.queue.length - 1; i >= 0; --i) {
                        server.queue.splice(i, 1);
                    }

                    message.guild.voiceConnection.disconnect();

                    server.dispatcher.end();
                    message.channel.send("**Queue reset.**");
                    console.log(message.guild.voiceConnection);
                    console.log('Stopped the queue.');
                }
                else {
                    
                }

        break;

    }
}

module.exports.help = {
    name: "music"
}

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(ytdl(server.queue[0], { filter: "audioonly", bitrate: 192000 }));

    server.queue.shift();

    console.log("Queue:" + server.queue[0]);

    server.dispatcher.on("end", function(){
        if (server.queue[0]) {
            play(connection, message);
        } else {
            connection.disconnect();
        }
    });

}


