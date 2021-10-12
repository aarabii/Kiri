const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'lisastage',
  run: async(client, message, args) => {
    
    const text = message.content.split(' ').slice(1).join(' ');
    const res = await fetch(`https://frenchnoodles.xyz/api/endpoints/lisastage?text=${text}`);
    const cmmImage = await res.buffer();

    if(!text){
      let embed1 = new Discord.MessageEmbed()
        .setTitle('**Lisa-Stage**')
        .setDescription('```yaml\nError: Please provide some text```')
        .addFields(
          {
            name: '```Example :```',
            value: '.LisaStage baby yoda is just a green pikachu with a coat'
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