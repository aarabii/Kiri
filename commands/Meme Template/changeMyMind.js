const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'changemymind',
  aliases: ['cmm'],
  run: async(client, message, args) => {

    const cmmText = message.content.split(' ').slice(1).join(' ');
    const res = await fetch(`https://frenchnoodles.xyz/api/endpoints/changemymind?text=${cmmText}`);
    const cmmImage = await res.buffer();

    if(!cmmText){
      let embed1 = new Discord.MessageEmbed()
        .setTitle('**Change My Mind**')
        .setDescription('```yaml\nError: Please provide some text```')
        .addFields(
          {
            name: '```Example :```',
            value: '.cmm Gamer with anime pfp are all vergins.'
          }
        )
        .setColor('#ff0000')

      return message.reply({ embeds: [embed1] })  
    } else {
      message.reply({
        files: [
          { attachment: cmmImage }
        ]
      })
    }
  }
}