const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'blowjob',
  aliases: ['bj'],
  run: async(client, message, args) => {

    const member = message.mentions.users.first() ;
    
    if(message.channel.nsfw === true) {
      await fetch('https://nekos.life/api/v2/img/bj')
        .then(res => res.json())
        .then(json => {

          let noPing = new Discord.MessageEmbed()
            .setTitle('**🍆 Blowjob**')
            .setColor('ffffff')
            .setDescription(`${message.author} is giving a blowjob!`)
            .setImage(json.url)
            .setFooter(`Requested by ${message.author.tag}`);

          let selfPing = new Discord.MessageEmbed()
            .setTitle('**🍆 Blowjob**')
            .setColor('ffffff')
            .setDescription('Sorry for being alone... Here, let me give you a blowjob ;) you! :3')
            .setImage(json.url)
            .setFooter(`Requested by ${message.author.tag}`);

          let ping = new Discord.MessageEmbed()
            .setTitle('**🍆 Blowjob**')
            .setColor('ffffff')    
            .setDescription(`${member}, you're getting a blowjob by ${message.author}`)
            .setImage(json.url)
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