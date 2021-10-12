const Discord = require('discord.js');
const { promisify } = require('util');
const wait = promisify(setTimeout);

module.exports = {
  name: 'clear',
  aliases: ['purge','delete'],
  run: async(client, message, args) => {

    let embed1 = new Discord.MessageEmbed()
      .setTitle(":wastebasket: **Clear Messages**")
      .setColor('#f2f2f2')
      .setDescription("```You don't have permission of *MANAGE_MESSAGES*```")
      .setFooter(`Requested by ${message.author.username} || This message will disapeare in 10 second`, message.author.displayAvatarURL())

    let embed2 = new Discord.MessageEmbed()
      .setTitle(":wastebasket: **Clear Messages**")
      .setColor('#f2f2f2')
      .setDescription("```yaml\nPlease enter the amount of message you wanna clear```")
      .addFields(
        {name: "```Uses```", value: "prefix+clear (No. of msg)", inline: true },
        {name: "```Example```", value: ".clear 10", inline: true }
      )
      .setFooter(`Requested by ${message.author.username} || This message will disapeare in 10 second`, message.author.displayAvatarURL()) 

    let embed3 = new Discord.MessageEmbed()
      .setTitle(":wastebasket: **Clear Messages**")
      .setColor('#f2f2f2')
      .setDescription("```yaml\nPlease enter real number```")
      .setFooter(`Requested by ${message.author.username} || This message will disapeare in 10 second`, message.author.displayAvatarURL())  

    let embed4 = new Discord.MessageEmbed()
      .setTitle(":wastebasket: **Clear Messages**")
      .setColor('#f2f2f2')
      .setDescription("```yaml\nAs the argument, a number between 2 and 500 is expected as the amount of messages!```")
      .setFooter(`Requested by ${message.author.username} || This message will disapeare in 10 second`, message.author.displayAvatarURL())  

    let embed5 = new Discord.MessageEmbed()
      .setTitle(":wastebasket: **Clear Messages**")
      .setColor('#f2f2f2')
      .setDescription("```yaml\nAs the argument, a number between 2 and 100 is expected as the amount of messages!```")
      .setFooter(`Requested by ${message.author.username} || This message will disapeare in 10 second`, message.author.displayAvatarURL())   

    if(!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.reply({ embeds: [embed1] }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })

    if(!args[0]) 
      return message.reply({ embeds: [embed2] }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })


    if(isNaN(args[0]))
      return message.reply({ embeds: [embed3] }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })

    if(args[0] > 100)
      return message.reply({ embeds: [embed4] }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })

    if(args[0] < 2)
      return message.reply({ embeds: [embed5] }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })
    
    let deleteAmount = parseInt(args[0]);

      message.channel.bulkDelete(deleteAmount, true)

      let finalEmbed = new Discord.MessageEmbed()
        .setTitle(":wastebasket: **Clear Messages**")
        .setColor('f2f2f2')
        .setDescription(`\`\`\`yaml\nDeleted ${args[0]} message from this channel.\n\`\`\``)
        .setFooter(`Requested by ${message.author.username} | This message will disapeare in 10 second`, message.author.displayAvatarURL())

      message.channel.send({ embeds: [finalEmbed] }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })

    
  }
}