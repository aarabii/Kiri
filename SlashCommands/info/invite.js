const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  name: 'invite-bot',
  description: 'Get a invite link to invite me in your server >W<',
  run: async(client, interaction) => {

  const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setLabel('Invite KirI')
        .setStyle('LINK')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=890100719930179655&permissions=8&scope=bot%20applications.commands')
    )     
    
    let embed = new MessageEmbed()
      .setTitle('**Invite Me uWu**')
      .setDescription('Click the button below to invite me <3')
      .setURL('https://discord.com/api/oauth2/authorize?client_id=890100719930179655&permissions=8&scope=bot%20applications.commands')
      .setTimestamp()
      .setColor('#ffff00')

    interaction.followUp({
      embeds: [embed],
      components: [row],
      ephemeral: true
    })  
  }
}