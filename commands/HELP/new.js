const Discord = require('discord.js')

module.exports = {
  name: 'new',
  run: async(client, message, args) => {

    let embed = new Discord.MessageEmbed()
      .setTitle('**🆕 New**')
      .setColor('#ffffff')
      .setAuthor('0.0.12', client.user.displayAvatarURL())
      .setDescription('```yaml\n Change-Log :```\n• `Poll` Has been added to create polls\n• `.Ship` has been added\n• new info commands are now avaliable `.ChannelInfo`, `.FirstMessage`\n• new NSFW rp commands has been added `.Fuck`, `.YaoiFuck`, `.YuriFuck`')
      .setTimestamp()

    message.reply({ embeds: [embed] })  
  }
}