const Discord = require("discord.js");
const dares = require('../../Data/TextData/Dare.json')

module.exports = {
 name: ["dare"],
 aliases: ['d'],
 run: async(client, message, args) => {

const user = message.mentions.users.first() || message.author;

const randomdare = dares[Math.floor(Math.random() * dares.length)]

  let dareembed = new Discord.MessageEmbed()
      .setTitle("**Amakano || Dare**")
      .setDescription(`${user} Here is the random dare for you:\n\n\n**${randomdare}**`)
      .setColor('#53fa43')
      .setThumbnail('https://media.tenor.com/images/3408860a5f846d39283b01e5d6b5712d/tenor.gif')
      .setFooter(message.author.username)
  
  message.reply({ embeds: [dareembed] })

 }
}