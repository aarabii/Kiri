const { MessageEmbed } = require('discord.js')
const images = require('../../Data/MediaData/Yuri_Fuck.json')

module.exports = {
  name: 'yurifuck',
  run: async(client, message, args) => {
    
    const member = message.mentions.users.first();

    const randomImage = images[Math.floor(Math.random() * images.length)]

      let noPing = new MessageEmbed()
        .setTitle('**👩🛏👩️ Yuri Fuck**')
        .setColor('ffffff')
        .setDescription(`${message.author} is yuri fucking someone!`)
        .setImage(randomImage)
        .setFooter(`Requested by ${message.author.tag}`);

      let selfPing = new MessageEmbed()
        .setTitle('**👩🛏👩️ Yuri Fuck**')
        .setColor('ffffff')
        .setDescription('Sorry for being alone... Here, let me give you a yuri fuck ;) you! :3')
        .setImage(randomImage)
        .setFooter(`Requested by ${message.author.tag}`);

      let ping = new MessageEmbed()
        .setTitle('**👩🛏👩️ Yuri Fuck**')
        .setColor('ffffff')    
        .setDescription(`${member}, you're getting yuri fucked by ${message.author}`)
        .setImage(randomImage)
        .setFooter(`Requested by ${message.author.tag}`)

      if(member === message.author){
        return message.reply({ embeds: [selfPing] })
      } else if(!member){
        return message.reply({ embeds: [noPing] })
      } else {
        return message.reply({ embeds: [ping] })
      }    
  }
}