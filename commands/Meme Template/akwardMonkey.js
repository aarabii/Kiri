const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'akwardmonkey',
  run: async(client, message, args) => {
    
    const text = message.content.split(' ').slice(1).join(' ');
    const res = await fetch(`https://frenchnoodles.xyz/api/endpoints/awkwardmonkey?text=${text}`);
    const cmmImage = await res.buffer();

    if(!text){
      let embed1 = new Discord.MessageEmbed()
        .setTitle('**Akward Monkey**')
        .setDescription('```yaml\nError: Please provide some text```')
        .addFields(
          {
            name: '```Example :```',
            value: ".AwkwardMonkey when someone asks 'whats that smell?'"
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