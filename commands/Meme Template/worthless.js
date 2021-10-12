const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'worthless',
  run: async(client, message, args) => {
    
    const text = message.content.split(' ').slice(1).join(' ');
    const res = await fetch(`https://frenchnoodles.xyz/api/endpoints/worthless?text=${text}`);
    const cmmImage = await res.buffer();

    if(!text){
      let embed1 = new Discord.MessageEmbed()
        .setTitle('**Worth-Less**')
        .setDescription('```yaml\nError: Please provide some text```')
        .addFields(
          {
            name: '```Example :```',
            value: '.presidentalert me :('
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