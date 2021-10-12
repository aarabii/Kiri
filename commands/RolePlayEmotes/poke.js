const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'poke',
  run: async(client, message, args) => {

    const member = message.mentions.users.first() ;
    

    await fetch('https://shiro.gg/api/images/poke')
      .then(res => res.json())
      .then(json => {

        let noPing = new Discord.MessageEmbed()
          .setTitle('**👉 Poke**')
          .setColor('ffffff')
          .setDescription(`${message.author} is poking someone!`)
          .setImage(json.url)
          .setFooter(`Requested by ${message.author.tag}`);

        let selfPing = new Discord.MessageEmbed()
          .setTitle('**👉 Poke**')
          .setColor('ffffff')
          .setDescription('Sorry for being alone... Here, let me poke you! :3')
          .setImage(json.url)
          .setFooter(`Requested by ${message.author.tag}`);

        let ping = new Discord.MessageEmbed()
          .setTitle('**👉 Poke**')
          .setColor('ffffff')    
          .setDescription(`${member}, you're getting poked by ${message.author}`)
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