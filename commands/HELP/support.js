const { MessageEmbed, WebhookClient } = require('discord.js');
const mySecret = process.env['WebHookToken'];


module.exports = {
  name: 'support',
  aliases: ['bug','report'],
  run: async(client, message, args) => {

    const webhookClient = new WebhookClient({ id: '890086191838429265', token: mySecret });

    const reportText = message.content.split(' ').slice(1).join(' ');

    const guild = message.guild;

    let embed1 = new MessageEmbed()
      .setTitle('**AMA || SUPPORT**')
      .setColor('ff0000')
      .setDescription('```yaml\nYou can you this command to report any bug or give your feedback or request any features or to CONTACT WITH THE DEVs.```')
      .addFields(
        { name: '```Example :```', value: '```.support This bot is fun :)```'}
      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
      .setTimestamp()

    let embed2 = new MessageEmbed()
      .setTitle('**AMA || SUPPORT**')
      .setColor('ff0000')
      .setDescription(`\`\`\`yaml\n${reportText}\n\`\`\`\n\`\`\`yaml\nYour Feedback has been submited.\n\`\`\``)
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
      .setTimestamp()      
    
    let embed3 = new MessageEmbed()
      .setTitle("Feedback Received") 
      .setDescription(`\`\`\`yaml\n${reportText}\n\`\`\``)
      .addFields(
        { name: 'Id', value: `\`\`\`${message.author.id}\n\`\`\``, inline: true },
        { name: 'Guild Name:', value: `\`\`\`${guild.name}\n\`\`\``, inline: true },
        { name: 'Guild Id:', value: `\`\`\`${guild.id}\n\`\`\``, inline: true }
      )  
      .setColor('#ffff00')

    if(!reportText) {
      message.reply({ embeds: [embed1] }) 
    } else {
      message.reply({ embeds: [embed2] })

      
      webhookClient.send({
	      username: message.author.tag,
	      avatarURL: message.author.displayAvatarURL(),
	      embeds: [embed3],
      });
    }
       
  }
}