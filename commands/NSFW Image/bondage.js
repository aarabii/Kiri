const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'bondage',
  run: async(client, message, args) => {

    if(message.channel.nsfw === true) {
      await fetch('https://shiro.gg/api/images/nsfw/bondage')
        .then(res => res.json())
        .then(json => {

          let embed = new Discord.MessageEmbed()
            .setTitle('**Bondage**')
            .setDescription(`[Click here for link](${json.url})`)
            .setColor('#800080')
            .setImage(json.url)
            .setTimestamp()

          message.reply({ embeds: [embed] })  
        })
    } else {
      let notNsfw = new Discord.MessageEmbed()
        .setTitle('**🚫 NSFW**')
        .setColor('ff0000')
        .setDescription('This process has been blocked because the current channel is not marked as NSFW!')
        .setFooter('This message will disappears in 10 seconds.')

      message.reply({ embeds: [notNsfw] }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })  
    }
  }
}