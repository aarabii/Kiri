const { MessageEmbed } = require('discord.js');
const nhieQ = require('../../Data/TextData/NHIE.json');

module.exports = {
  name: 'nhie',
  aliases: ['neverhaveiever','never-have-i-ever'],
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    const randomQ = nhieQ[Math.floor(Math.random() * nhieQ.length)];

    let embed = new MessageEmbed()
      .setTitle('**Never Have I Ever**')
      .setDescription(`${Target} Never have i ever\n\`\`\`${randomQ}\`\`\``)
      .setColor('#ffffff')
      .setTimestamp()

    message.reply({ embeds: [embed] })  
  }
}