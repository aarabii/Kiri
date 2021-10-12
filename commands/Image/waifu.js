const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'waifu',
  run: async(client, message, args) => {

    await fetch('https://nekos.life/api/v2/img/waifu')
      .then(res => res.json())
      .then(json => {
        let embed = new Discord.MessageEmbed()
          .setTitle('**Waifu**')
          .setColor('ffffff')
          .addFields(
            {
              name: 'To Download :',
              value: `[Click Here](${json.url})`
            }
          )
          .setImage(json.url)
          .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())

        message.reply({ embeds: [embed] })  
      })
  }
}