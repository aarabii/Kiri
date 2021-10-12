const Discord = require("discord.js");
const truth = require('../../Data/TextData/Truth.json')

module.exports = {
 name: ["truth"],
 aliases: ['t'],
 run: async(client, message, args) => {

const user = message.mentions.users.first() || message.author   

const randomtruth = truth[Math.floor(Math.random() * truth.length)]

  let truthembed = new Discord.MessageEmbed()
    .setTitle("**Amakano || Truth**")
    .setDescription(`${user} Here is the random question for you:\n\n\n**${randomtruth}**`)
    .setColor('#53fa43')
    .setThumbnail('https://media.tenor.com/images/b2f04c9d19c4378840741fcdcd41fc5f/tenor.gif')
    .setFooter(message.author.username)
  
  message.reply({ embeds: [truthembed] })

 }
}