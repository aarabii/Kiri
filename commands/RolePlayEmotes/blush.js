const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'blush',
  run: async(client, message, args) => {

    const member = message.mentions.users.first() ;
    

    await fetch('https://shiro.gg/api/images/blush')
      .then(res => res.json())
      .then(json => {

        let noPing = new Discord.MessageEmbed()
          .setTitle('**😊 Blush**')
          .setColor('ffffff')
          .setDescription("Stop it, you're making me all red >///<")
          .setImage(json.url)
          .setFooter(`Requested by ${message.author.tag}`);

        let selfPing = new Discord.MessageEmbed()
          .setTitle('**😊 Blush**')
          .setColor('ffffff')
          .setDescription("Stop it, you're making me all red >///<")
          .setImage(json.url)
          .setFooter(`Requested by ${message.author.tag}`);

        let ping = new Discord.MessageEmbed()
          .setTitle('**😊 Blush**')
          .setColor('ffffff')    
          .setDescription(`Stop it ${member}, you're making me all red >///<`)
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