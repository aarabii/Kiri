const Discord = require('discord.js');
const replies = require('../../Data/MediaData/fortune.json');

module.exports = {
  name: 'fortune',
  aliases: ['8ball'],
  run: async(client, message, args) => {

    let randomized = replies[Math.floor(Math.random() * replies.length)];

    let sentance = message.content.split(' ').slice(1).join(' ');

    if(!sentance){
      let embed1 = new Discord.MessageEmbed()
        .setTitle('**❓ Fortune**')
        .setColor('#ffffff')
        .setDescription('```yaml\nWith this command a question will be randomly answered```')
        .addFields(
          {
            name: '```Uses :```',
            value: '• .fortune <question>',
            inline: true
          },
          {
            name: '```Example :```',
            value: '• .fortune Am I ever gonna be rich?',
            inline: true
          }
        )

      return message.reply({ embeds: [embed1] })  
    }

    let finalEMbed = new Discord.MessageEmbed()
      .setTitle('**❓ Fortune**')
      .setColor('#ffffff')
      .addFields(
        {
          name: `${message.author.username}'s Question :`,
          value: `${sentance}`
        },
        {
          name: 'My Answer ',
          value: ':'
        }
      )
      .setImage(randomized)

    message.reply({ embeds: [finalEMbed] })  
  }
}