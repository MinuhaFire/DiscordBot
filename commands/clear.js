module.exports = {
    name: 'clear',
    description: "Clear messages!",
    async execute(message, args){
		if(message.member.roles.cache.has("839748516757635103")){
			if(!args[0]) return message.reply("**Please specify the number of messages!**");
			if(isNaN(args[0])) return message.reply("**Please enter a number!**")
			
			if(args[0] > 1000) return message.reply("**The number must be smaller than 1000!**")
				
			if(args[0] < 1) return message.reply("**The number must be bigger than 1!**")
				
			await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
				message.channel.bulkDelete(messages);
			});
    } else {
		message.reply("**You do not have permissions to use this command!**");
	}
	
	}
}