const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'spongebobburnpaper',
  aliases: ['sbbp', 'spongebob'],
  run: async(client, message, args) => {
    
    const text = message.content.split(' ').slice(1).join(' ');
    const res = await fetch(`https://frenchnoodles.xyz/api/endpoints/spongebobburnpaper?text=${text}`);
    const cmmImage = await res.buffer();

    if(!text){
      let embed1 = new Discord.MessageEmbed()
        .setTitle('**Sponge Bob Burn-Paper**')
        .setDescription('```yaml\nError: Please provide some text```')
        .addFields(
          {
            name: '```Example :```',
            value: '.sbbp you are a bad memer'
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