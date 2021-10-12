const Discord = require('discord.js');

module.exports = {
  name: 'pp',
  run: async(client, message, args) => {

    const member = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;

    const pp = [
      '=',
      '==',
      '===',
      '====',
      '=====',
      '======',
      '=======',
      '========',
      '=========',
      '==========',
    ]

    let randomizedpp = pp[Math.floor(Math.random() * pp.length)];

    const ppEmoji = '<:peepeekun:867300916734459904>';

    let embed = new Discord.MessageEmbed()
      .setTitle(`**${ppEmoji} Pee-Pee Machine**`)
      .setColor('#ffffff')
      .setDescription(`${member.username}'s pp \n **${randomizedpp}8** ${ppEmoji}`)
      .setThumbnail(member.displayAvatarURL())

    message.reply({ embeds: [embed] })  
  }
}