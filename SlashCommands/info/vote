const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  name: 'vote',
  description: 'Vote us on top.gg',
  run: async(client, interaction) => {

  const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setLabel('Vote KirI')
        .setStyle('LINK')
        .setURL('https://top.gg/bot/890100719930179655')
    )

  const embed = new MessageEmbed()
    .setTitle('Vote')
    .setDescription('It will help us a lot if you take some of your presious time to vote us <3')
    .setColor('#ffff00')
    .setFooter('Thank you >W<')
  
  
  await interaction.followUp({ embeds: [embed], components: [row], ephemeral: true });   
  }
}