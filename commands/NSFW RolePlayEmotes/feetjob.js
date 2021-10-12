const Discord = require('discord.js');
const fetch = require('node-fetch');
const images = require('../../Data/MediaData/Yaoi_Fuck.json')

module.exports = {
  name: 'footjob',
  aliases: ['feetjob'],
  run: async(client, message, args) => {

    const randomImage = images[Math.floor(Math.random() * images.length)]

    const member = message.mentions.users.first() ;
    
    if(message.channel.nsfw === true) {
      await fetch('https://nekos.life/api/v2/img/feetg')
        .then(res => res.json())
        .then(json => {

          const random = [randomImage, json.url];

          const raimg = random[Math.floor(Math.random() * random.length)]

          let noPing = new Discord.MessageEmbed()
            .setTitle('**🐾 FootJob**')
            .setColor('ffffff')
            .setDescription(`${message.author} is giving a footjob!`)
            .setImage(raimg)
            .setFooter(`Requested by ${message.author.tag}`);

          let selfPing = new Discord.MessageEmbed()
            .setTitle('**🐾 FootJob**')
            .setColor('ffffff')
            .setDescription('Sorry for being alone... Here, let me give you a footjob ;) you! :3')
            .setImage(raimg)
            .setFooter(`Requested by ${message.author.tag}`);

          let ping = new Discord.MessageEmbed()
            .setTitle('**🐾 FootJob**')
            .setColor('ffffff')    
            .setDescription(`${member}, you're getting a footjob by ${message.author}`)
            .setImage(raimg)
            .setFooter(`Requested by ${message.author.tag}`)

          if(member === message.author){
            return message.reply({ embeds: [selfPing] })
          } else if(!member){
            return message.reply({ embeds: [noPing] })
          } else {
            return message.reply({ embeds: [ping] })
          }

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