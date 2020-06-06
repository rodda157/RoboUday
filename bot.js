const discord = require('discord.js');
const client = new discord.Client();
client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
    console.log("Logged in!");
});


client.on('message', message => {
    if (message.author.id !== '147239441499422720') return;
	message.channel.send('Wow I am so very epic.');
});

