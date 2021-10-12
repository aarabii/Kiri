const { MessageEmbed } = require('discord.js');
const name = require('../../Data/TextData/nickname.json');

module.exports = {
  name: 'nickname',
  aliases: ['setnickname', 'set-nickname'],
  run: async(client, message, args) => {

    const Target = message.mentions.members.first();
    const Names = name[Math.floor(Math.random() * name.length)]
    let Arguments = args.slice(1).join(" ");

    if(!Target)
      return message.reply({
        embeds: [
          new MessageEmbed()
            .setTitle('Nick-Name')
            .setColor('#ff0000')
            .setDescription('Please specify a member with nickname if nickname will not provided then Kir! will give a random nickname from her DATABSE')
            .addFields(
              {
                name: 'Example :',
                value: '`.nickname @user Nickname` or `.nickname @user`'
              },
              {
                name: 'Users :',
                value: '`.nickname @kiri cutie` or `.nickname @kiri`'
              }
            )
            .setFooter('This message will disappear in 10 seconds')
        ]
      }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })

    if(!Arguments){
      Arguments = Names
    }

    try {
      message.reply({
        embeds: [
          new MessageEmbed()
            .setTitle('Nick-Name')
            .setColor('#ffffff')
            .setDescription(`**${Target.user.username}**'s nicknaem has been changed to **${Target}**`)
            .setTimestamp()
        ]
      })
      Target.setNickname(Names)
    } catch (err) {
      message.reply({
        embeds: [
          new MessageEmbed()
            .setTitle('Nick-Name')
            .setColor('#ff0000')
            .setDescription(`${err}`)
            .setFooter('This message will disappear in 10 seconds.')
        ]
      }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })
    }
  }
}