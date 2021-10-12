const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  name: 'roll',
  run: async(client, message, args) => {

    let dice = [
      'https://cdn.discordapp.com/attachments/890100498508697620/890247722739847208/download.png',
      'https://cdn.discordapp.com/attachments/890100498508697620/890247719669604432/download_1.png',
      'https://cdn.discordapp.com/attachments/890100498508697620/890247716872011816/download_2.png',
      'https://cdn.discordapp.com/attachments/890100498508697620/890247713491415071/images.png',
      'https://cdn.discordapp.com/attachments/890100498508697620/890247710874148935/download_3.png',
      'https://cdn.discordapp.com/attachments/890100498508697620/890247709028675594/download_4.png'
    ];

    const randomDice = dice[Math.floor(Math.random() * dice.length)];  

    let embed = new MessageEmbed()
      .setTitle('**🎲 Roll**')
      .setDescription(`**${message.author.username}** threw a dice and gets...`)
      .setThumbnail(randomDice)
      .setTimestamp()

    message.reply({
      embeds: [embed]
    })

  }
}
