module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args){
		if(message.member.roles.cache.has("839748516757635103")){
			const target = message.mentions.users.first();
			if(target){
				const memberTarget = message.guild.members.cache.get(target.id);
				memberTarget.kick();
				message.channel.send(`**Successfully kicked member!**`);
			}else{
				message.channel.send(`**You can't kick that member!**`);
			}
		}
    }
}