const { MessageEmbed } = require('discord.js');
const chatBOT = require('../../models/chatBOT');

module.exports = {
  name: 'chatbot',
  description: 'Enable chat-bot',
  userPermissions: ['MANAGE_CHANNELS'],
  options: [
    {
      name: 'channel',
      description: 'in which channel you want to enable chat bot',
      type: 'CHANNEL',
      required: true
    }
  ],
  run: async(client, interaction) => {

    const Channel = interaction.options.getChannel('channel');

    const data = await chatBOT.findOne({
      channelId: Channel.id,
      guildId: interaction.guildId,
    })

    const embed = new MessageEmbed()
      .setTitle('ChatBOT')
      .setDescription(`ChatBOT has been enabled in this channel by **${interaction.user.username}**`)
      .setColor('#ffff00')
      .setTimestamp()
      .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))

    const embed1 = new MessageEmbed()
      .setTitle('ChatBOT')
      .setColor('#ffffff')
      .setTimestamp()
      .setDescription(`ChatBOT has been enabled in ${Channel}`)
      .setFooter('This message will disappear in 10 seconds.') 

    const embed2 = new MessageEmbed()
      .setTitle('ChatBOT')
      .setColor('#ffffff')
      .setDescription(`ChatBOT is already avaliable in that channel(${Channel})`)
      .setFooter('This message will disappear in 10 seconds.')    

    if(data)
      return interaction.followUp({ embeds: [embed2] }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })

    new chatBOT({
      channelId: Channel.id,
      guildId: interaction.guildId,
    }).save();      
      
    interaction.followUp({ embeds: [embed1] }).then(m => {
      setTimeout(() => {
        m.delete()
      }, 10000); 
    })
    
    Channel.send({ embeds: [embed] });
  }
}