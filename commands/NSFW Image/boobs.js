const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'boobs',
  run: async(client, message, args) => {

    const apiLink = [
      'https://nekos.life/api/v2/img/boobs',
      'https://nekos.life/api/v2/img/tits',
    ]

    const randomApi = apiLink[Math.floor(Math.random() * apiLink.length)]

    if(message.channel.nsfw === true) {
      await fetch(`${randomApi}`)
        .then(res => res.json())
        .then(json => {

          let embed = new Discord.MessageEmbed()
            .setTitle('**BooBs**')
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