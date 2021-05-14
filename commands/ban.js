module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){
		if(message.member.roles.cache.has("839748516757635103")){
			const target = message.mentions.users.first();
			if(target){
				const memberTarget = message.guild.members.cache.get(target.id);
				memberTarget.ban();
				message.channel.send(`**Successfully banned member!**`);
			}else{
				message.channel.send(`**You can't ban that member!**`);
			}
		}
    }
}