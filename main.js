const Discord = require('discord.js');

const client = new Discord.Client();

const fs = require('fs');
 
client.commands = new Discord.Collection();

const prefix = "."

client.once("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({ 
	activity: 
	{ name: 'with The Book of Life.',
	  type: "PLAYING"
	}, 
	status: 'dnd' 
	})
  .catch(console.error);
});

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	
	if(command === "inflictpain"){
		client.commands.get('inflictpain').execute(message, args);
	
	} else if(command === "clear"){
		client.commands.get('clear').execute(message, args);
	} else if(command === "kick"){
		client.commands.get('kick').execute(message, args);
	} else if(command === "ban"){
		client.commands.get('ban').execute(message, args);
	} else if(command === "help"){
		client.commands.get('help').execute(message, args);
	} else if(command === "mills"){
		client.commands.get('mills').execute(message, args);
	}
});

client.login("ODQyNjQ4NTA4ODcxNjA2MzIz.YJ4XlA.JH93Dh4EtIaKgfxZhyY5x3PBvVo");