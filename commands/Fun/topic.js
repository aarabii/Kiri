const { MessageEmbed } = require('discord.js');
const topic = require('../../Data/TextData/Topic.json');

module.exports = {
  name: 'topic',
  run: async(client, message, args) => {

  const randomtopic = topic[Math.floor(Math.random() * topic.length)]

    let embed = new MessageEmbed()
      .setTitle('**🥠 Topic**')
      .setDescription(randomtopic)
      .setTimestamp()
      .setColor('#ffffff')

    message.reply({ embeds: [embed] })  
  }
}