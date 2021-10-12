const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'lick',
  run: async(client, message, args) => {

    const member = message.mentions.users.first() ;
    

    await fetch('https://shiro.gg/api/images/lick')
      .then(res => res.json())
      .then(json => {

        let noPing = new Discord.MessageEmbed()
          .setTitle('**😋 Lick**')
          .setColor('ffffff')
          .setDescription(`${message.author} is licking someone!`)
          .setImage(json.url)
          .setFooter(`Requested by ${message.author.tag}`);

        let selfPing = new Discord.MessageEmbed()
          .setTitle('**😋 Lick**')
          .setColor('ffffff')
          .setDescription('Sorry for being alone... Here, let me lick you! 😋')
          .setImage(json.url)
          .setFooter(`Requested by ${message.author.tag}`);

        let ping = new Discord.MessageEmbed()
          .setTitle('**😋 Lick**')
          .setColor('ffffff')    
          .setDescription(`${member}, you're getting licked by ${message.author}`)
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