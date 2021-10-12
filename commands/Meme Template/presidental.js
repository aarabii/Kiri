const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'presidentialalert',
  aliases: ['presidentalert', 'pa'],
  run: async(client, message, args) => {
    
    const text = message.content.split(' ').slice(1).join(' ');
    const res = await fetch(`https://frenchnoodles.xyz/api/endpoints/presidentialalert?text=${text}`);
    const cmmImage = await res.buffer();

    if(!text){
      let embed1 = new Discord.MessageEmbed()
        .setTitle('**Presidential Alert**')
        .setDescription('```yaml\nError: Please provide some text```')
        .addFields(
          {
            name: '```Example :```',
            value: '.presidentalert The girls are fightiGGGG'
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