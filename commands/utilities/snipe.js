const { Client, Message, MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
  name: 'snipe',
  run: async(client, message, args) => {


    const snipes = client.snipes.get(message.channel.id);
    if(!snipes){
      let embed = new MessageEmbed()
        .setTitle('**✉️ Deleted Message**')
        .setColor('#ffffff')
        .setDescription('There is no deleted message in this channel')
        .setTimestamp()

      return message.reply({ embeds: [embed] })  
    }

    const snipe = args[0] - 1 || 0;
    const target = snipes[snipe];
    if(!target){
      let embed2 = new MessageEmbed()
        .setTitle('**✉️ Deleted Message**')
        .setColor('#ffffff')
        .setDescription(`There is only ${snipe.length} messages!`)
        .setTimestamp()

      return message.reply({ embeds: [embed2] })  
    }

    const { msg, time, image } = target;
    
    let embed3 = new MessageEmbed()
      .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
      .setImage(image)
      .setDescription(msg.content)
      .setFooter(`${moment(time).fromNow()} | ${snipe + 1} / ${snipes.length}`)
      .setColor('ffcccc')

    message.reply({ embeds: [embed3] })  
  }
}