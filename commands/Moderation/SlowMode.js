const { MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = {
  name: 'slowmode',
  run: async(client, message, args) => {

    if(!message.member.permissions.has("MANAGE_CHANNELS")) {
      let embed1 = new MessageEmbed()
        .setTitle('**🐢 Slow-Mode**')
        .setDescription('```yaml\nMissing Permission : MANAGE CHANNEL```')
        .setColor('#ffffff')
        .setFooter('This message will disappear in 10 seconds.')
        .setTimestamp()

      return message.reply({ embeds: [embed1] }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })  
    }

    if(!args[0]) {
      message.channel.setRateLimitPerUser(0);
        
        let embed2 = new MessageEmbed()
          .setTitle('**🐢 Slow-Mode**')
          .setDescription('```The Slow-Mode has been removed.```')
          .setColor('#ffffff')
          .setFooter('This message will disappear in 10 seconds.')
          .setTimestamp()     

      return message.reply({ embeds: [embed2] }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })    
    }

    const raw = args[0];
    const milliseconds = ms(raw);

    if(isNaN(milliseconds)){
      let embed3 = new MessageEmbed()
        .setTitle('**🐢 Slow-Mode**')
        .setDescription('```This is not a valid time!```')
        .setColor('#ffffff')
        .setFooter('This message will disappear in 10 seconds.')
        .setTimestamp()

      return message.reply({ embeds: [embed3] }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })
    }

    if(milliseconds < 1000){
      let embed4 = new MessageEmbed()
        .setTitle('**🐢 Slow-Mode**')
        .setDescription('```The minimum Slow-Mode is 1 Second```')
        .setColor('#ffffff')
        .setFooter('This message will disappear in 10 seconds.')
        .setTimestamp()

      return message.reply({ embeds: [embed4] }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })
    }

    if(milliseconds > 21600000){
      let embed4 = new MessageEmbed()
        .setTitle('**🐢 Slow-Mode**')
        .setDescription('```The maximum Slow-Mode is 6 hours```')
        .setColor('#ffffff')
        .setFooter('This message will disappear in 10 seconds.')
        .setTimestamp()

      return message.reply({ embeds: [embed4] }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })
    }    

    message.channel.setRateLimitPerUser(milliseconds / 1000);

      let finalEmbed = new MessageEmbed()
        .setTitle('**🐢 Slow-Mode**')
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setDescription(`The Slow-Mode for this channel has been set to ${ms(milliseconds, { long: true })}`)
        .setColor('#ffffff')
        .setTimestamp()    
    
    message.reply({ embeds: [finalEmbed] })
  }
}