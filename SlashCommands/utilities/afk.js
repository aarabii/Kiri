const { MessageEmbed } = require('discord.js');
const afkModel = require('../../models/afkModel');

module.exports = {
  name: 'afk',
  description: 'Set an AFK status shown when you are mentioned.',
  options: [
    {
      name: 'message',
      type: 'STRING',
      description: 'AFK message to set!',
      required: false
    },
  ],
  run: async(client, interaction) => {

    const reason = interaction.options.getString('message') || "No reason has been provided for AFK";

    new afkModel({
      userId: interaction.user.id,
      guildId: interaction.guildId,
      reason,
      timestamp: Date.now(),
    }).save();

    let afkEmbed1 = new MessageEmbed()
      .setAuthor(interaction.user.tag, interaction.user.displayAvatarURL())
      .setTitle('**AFK**')
      .setDescription(`**${interaction.user.username}** I set you AFK\n\n**Reason**\n\`\`\`yaml\n${reason}\n\`\`\``)
      .setThumbnail(interaction.user.displayAvatarURL())
      .setTimestamp()
      
    interaction.followUp({ embeds: [afkEmbed1] })  

    client.on('message',async message => {

      if (message.content.includes('@here') || message.content.includes('@everyone'))
        return false; 

      if (message.author.bot) return;

      if(message.content.includes(interaction.user.id)){
        let embed2 = new MessageEmbed()
          .setAuthor(interaction.user.tag, interaction.user.displayAvatarURL())
          .setTitle('**AFK**')
          .setThumbnail(interaction.user.displayAvatarURL())
          .setDescription(`**${interaction.user.username}** Is AFK!\n\n**Reason**\n\`\`\`yaml\n${reason}\n\`\`\``)
          .setColor('#ffffff')
          .setFooter('| This message will disappear in 10 seconds |')

        return message.reply({ embeds: [embed2] }).then(m => {
          setTimeout(() => {
            m.delete()
          }, 10000)
        })  
      } else {
        if(message.author.id === interaction.user.id){

          const errchannel = client.channels.cache.get('887731502291492914');
          
          try{
            const data = await afkModel.findOne({
              userId: interaction.user.id,
              guildId: interaction.guildId,
            })
 
            if(!data)
              return;

            await data.delete()

            let embed3 = new MessageEmbed()
              .setTitle('**AFK**')
              .setAuthor(message.author.tag, message.author.displayAvatarURL())
              .setDescription(`Your AFK has been removed **${message.author.username}**`)
              .setColor('#ffffff')
              .setFooter('| This message will disappear in 10 seconds |')

            message.reply({ embeds: [embed3] }).then(m => {
              setTimeout(() => {
                m.delete()
              }, 10000)
            })   
          } catch (err) {
            errchannel.send({
              content: `${err}`
            })
          }
        }
      }


    })
  }
}