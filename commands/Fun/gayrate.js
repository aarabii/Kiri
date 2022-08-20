const Discord = require('discord.js');

module.exports = {
  name: 'gayrate',
  run: async(client, message, args) => {

    const member = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;

    const rate = Math.floor(Math.random() * 101);

    let embed = new Discord.MessageEmbed()
      .setTitle('**🌈 Gay-Rate Machine**')
      .setColor('#ffffff')
      .setDescription(`${member.username}, You are **${rate}%** gay 🌈`)
      .setThumbnail(member.displayAvatarURL())

    if(member.id === '642394459396636703'){
      message.reply({
        content: 'ARV is not gay'
      })
    } else if(member.id === '700379708495495199') {
      let embed2 = new Discord.MessageEmbed()
        .setTitle('**🌈 Gay-Rate Machine**')
        .setColor('#ffffff')
        .setDescription('Rohit arya is 10000000% Gay!!!!')
        .setThumbnail(member.displayAvatarURL())

      message.reply({
        embeds: [embed2]
      })
    } else {
      message.reply({ embeds: [embed] })
    }
  }
}