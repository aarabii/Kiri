const Discord = require('discord.js');

module.exports = {
  name: 'nsfw',
  run: async(client, message, args) => {

    let channel = message.channel;

    if(channel.nsfw) {
      channel.edit({ nsfw: !channel.nsfw });

      let sfwembed = new Discord.MessageEmbed()
        .setTitle("**🦺 SFW**")
        .setDescription('This channel is now SFW.')
        .setColor('#81ebd9')
        .setTimestamp()

      message.reply({ embeds: [sfwembed] })  
    } else {
      channel.edit({ nsfw: !channel.nsfw });

      let nsfwembed = new Discord.MessageEmbed()
        .setTitle('**🚫 NSFW**')
        .setDescription('This channel is now NSFW.')
        .setColor('f50000')
        .setTimestamp()

      message.reply({ embeds: [nsfwembed] })  
    }
  }
}