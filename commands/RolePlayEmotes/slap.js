const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'slap',
  run: async(client, message, args) => {

    const member = message.mentions.users.first() ;
    

    await fetch('https://shiro.gg/api/images/slap')
      .then(res => res.json())
      .then(json => {

        let noPing = new Discord.MessageEmbed()
          .setTitle('**👏 Slap**')
          .setColor('ffffff')
          .setDescription(`${message.author} is slapping the heck out of someone!`)
          .setImage(json.url)
          .setFooter(`Requested by ${message.author.tag}`);

        let selfPing = new Discord.MessageEmbed()
          .setTitle('**👏 Slap**')
          .setColor('ffffff')
          .setDescription('Sorry for being alone... Here, let me slap you! UPs Sorry :(')
          .setImage(json.url)
          .setFooter(`Requested by ${message.author.tag}`);

        let ping = new Discord.MessageEmbed()
          .setTitle('**👏 Slap**')
          .setColor('ffffff')    
          .setDescription(`${member}, you've got a slap from ${message.author}`)
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
  }
}