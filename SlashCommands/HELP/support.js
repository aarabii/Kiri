const { MessageEmbed, WebhookClient } = require('discord.js');
const mySecret = process.env['WebHookToken'];

module.exports = {
  name: 'support',
  description: 'To contact with DEVs',
  options: [
    {
      name: 'message',
      description: 'Your feedback/report/feature-request for DEVS',
      type: 'STRING',
      required: true
    },
  ],
  run: async(client, interaction, args) => {
    
    const reportText = interaction.options.getString('message');
    
    const webhookClient = new WebhookClient({ id: '890086191838429265', token: mySecret });

    const guild = interaction.guild;
    
    let embed1 = new MessageEmbed()
      .setTitle('**AMA || SUPPORT**')
      .setColor('ff0000')
      .setDescription(`\`\`\`yaml\n${reportText}\n\`\`\`\n\`\`\`yaml\nYour Feedback has been submited.\n\`\`\``)
      .setFooter(`Requested by ${interaction.user.username}`, interaction.user.displayAvatarURL())
      .setTimestamp()      
    
    let embed2 = new MessageEmbed()
      .setTitle("Feedback Received") 
      .setDescription(`\`\`\`yaml\n${reportText}\n\`\`\``)
      .addFields(
        { name: 'Id', value: `\`\`\`${interaction.user.id}\n\`\`\``, inline: true },
        { name: 'Guild Name:', value: `\`\`\`${guild.name}\n\`\`\``, inline: true },
        { name: 'Guild Id:', value: `\`\`\`${guild.id}\n\`\`\``, inline: true }
      )  
      .setColor('#ffff00')

    interaction.followUp({ embeds: [embed1] });
    
    webhookClient.send({
      username: interaction.user.tag,
      avatarURL: interaction.user.displayAvatarURL(),
      embeds: [embed2]
    })
  }
}