const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'drake',
  run: async(client, message, args) => {

    const res = await fetch(`https://frenchnoodles.xyz/api/endpoints/drake?text1=${args[1]}&text2=${args[0]}`);
    const cmmImage = await res.buffer();

    if(!args[1]){
      let embed1 = new Discord.MessageEmbed()
        .setTitle('**Drake**')
        .setDescription('```yaml\nError: Please provide some text```')
        .addFields(
          {
            name: '```Example :```',
            value: '.drake yes no'
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