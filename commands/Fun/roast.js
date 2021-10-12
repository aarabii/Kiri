const { MessageEmbed, MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');
const { Canvas } = require('canvacord');

module.exports = {
  name: 'roast',
  aliases: ['insult'],
  run: async(client, message, args) => {

    const Target = message.mentions.users.first();   

    if(!Target){
      let embed1 = new MessageEmbed()
        .setTitle('**Roasting...**')
        .setDescription('```yaml\nMention soneone while running this command to insult them```')
        .setFooter('| This message will disappear in 10 seconds! |')
        .setTimestamp()

      return message.reply({ embeds: [embed1] }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000);
      });
    };
  

    await fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
      .then(res => res.json())
      .then((json) => {
        
        let embed2 = new MessageEmbed()
          .setAuthor(message.author.tag, message.author.displayAvatarURL())
          .setDescription(`\`\`\`yaml\n${json.insult}\n\`\`\``)
          .setThumbnail(Target.displayAvatarURL())
          .setColor('#ffff00')
          .setTimestamp()

        message.channel.send({ embeds: [embed2] });
     })
    
  }
}