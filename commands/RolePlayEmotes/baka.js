const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'baka',
  run: async(client, message, args) => {

    const member = message.mentions.users.first() ;
    

    await fetch('https://nekos.life/api/v2/img/baka')
      .then(res => res.json())
      .then(json => {

        let noPing = new Discord.MessageEmbed()
          .setTitle('**💢 Baka**')
          .setColor('ffffff')
          .setDescription(`${message.author} is behaving like a baka!`)
          .setImage(json.url)
          .setFooter(`Requested by ${message.author.tag}`);

        let selfPing = new Discord.MessageEmbed()
          .setTitle('**💢 Baka**')
          .setColor('ffffff')
          .setDescription(`${message.author} is behaving like a baka!`)
          .setImage(json.url)
          .setFooter(`Requested by ${message.author.tag}`);

        let ping = new Discord.MessageEmbed()
          .setTitle('**💢 Baka**')
          .setColor('ffffff')    
          .setDescription(`${member}, stop being such a baka!`)
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