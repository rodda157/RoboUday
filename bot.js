const discord = require('discord.js');
const client = new discord.Client();
client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
    console.log("Logged in!");
});

client.on('message', message => {
    if (message.author.id !== '619226333058301972') return;
	message.react('623034988861980673');
});

client.on('message', message => {
    if (message.author.id !== '188451576036196373') return;
	message.channel.send('Yeah, Ok Boomer');
});
