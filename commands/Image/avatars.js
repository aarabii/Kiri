const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'pfp',
  run: async(client, message, args) => {

    await fetch('https://shiro.gg/api/images/avatars')
      .then(res => res.json())
      .then(json => {
        let embed = new Discord.MessageEmbed()
          .setTitle('**wallpapers**')
          .setColor('ffffff')
          .setDescription('```yaml\nHere is a random avatar for you <3```')
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