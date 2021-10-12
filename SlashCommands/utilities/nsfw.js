const Discord = require('discord.js');

module.exports = {
  name: 'nsfw',
  description: 'To change a channel type from SFW to NSFW and vice-versa',
  userPermissions: ['MANAGE_CHANNELS'],
  run: async(client, interaction, args) => {

    let channel = interaction.channel;

    if(channel.nsfw) {
      channel.edit({ nsfw: !channel.nsfw });

      let sfwembed = new Discord.MessageEmbed()
        .setTitle("**🦺 SFW**")
        .setDescription('This channel is now SFW.')
        .setColor('#81ebd9')
        .setTimestamp()

      interaction.followUp({ embeds: [sfwembed] })  
    } else {
      channel.edit({ nsfw: !channel.nsfw });

      let nsfwembed = new Discord.MessageEmbed()
        .setTitle('**🚫 NSFW**')
        .setDescription('This channel is now NSFW.')
        .setColor('f50000')
        .setTimestamp()

      interaction.followUp({ embeds: [nsfwembed] })  
    }
  }
}