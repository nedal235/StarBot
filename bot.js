const Discord = require('discord.js');
const client = new Discord.Client();
 




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setGame("*help|By:bk7-v", "https://www.twitch.tv/Alpha");
});
 

client.on("message", message => {
	var prefix = "*";
 if (message.content === "*help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#ff0000") 
      .setDescription(`
	 ** 
	         Please Chose: 
---------------------------------------------
${prefix}help public ⇏ اوامر عامة
---------------------------------------------
${prefix}help admin ⇏ اوامر ادارة السيرف
--------------------------------------------
${prefix}help games ⇏ اوامر الالعاب
---------------------------------------------
${prefix}help music ⇏ اوامر الموسيقى
---------------------------------------------
**
`)

   message.channel.sendEmbed(embed)
    
   }
   }); 



client.on("message", message => {
	var prefix = "*";
 if (message.content === "*help public") {
	 message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("#005c8")
      .setDescription(`
		 **__اوامر عامة__**
**
❖*allbots ~ لعرض جميع البوتات الي بالسيرفر
❖*
❖*
❖*
❖*
❖*
❖*
❖*
❖*
❖*
❖*
❖*
❖*
❖*
❖*
❖*
❖*


client.on("message", message => {
	var prefix = "*";
 if (message.content === "*help public") {
	 message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("#005c8")
      .setDescription(`
		      
		 **__اوامر الادمنية__**
**
❖*allbots ~ لعرض جميع البوتات الي بالسيرفر
❖*
❖*
❖*
❖*
❖*
❖*
❖*
❖*
❖*
❖*
❖*
❖*
❖*
❖*
❖*
❖*

























client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});





client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).kick();
 
  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});


















































client.login(process.env.BOT_TOKEN);
