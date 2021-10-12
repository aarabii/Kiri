const warnModel = require('../../models/warnModel');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'warn',
  description: 'warn a user',
  userPermissions: ['MANAGE_MESSAGES'],
  options: [
    {
      name: 'target',
      description: 'User you want to warn',
      type: 'USER',
      required: true,
    },
    {
      name: 'reason',
      description: 'reason for this warn',
      type: 'STRING',
      required: false,
    },
  ],
  run: async(client, interaction) => {

    const user = interaction.options.getUser('target');
    const reason = interaction.options.getString('reason') || 'Unspecified : (';

    new warnModel({
      userId: user.id,
      guildId: interaction.guildId,
      moderatorId: interaction.user.id,
      reason,
      timestamp: Date.now(),
    }).save();

    let userEmbed = new MessageEmbed()
      .setTitle('**Warnings...**')
      .setColor('#ff0000')
      .setDescription("**You have been warned!**")
      .setThumbnail(interaction.user.displayAvatarURL())
      .addFields(
        {
          name: 'In server :',
          value: `\`\`\`yaml\n${interaction.guild.name}\n\`\`\``,
        },
        {
          name: 'Moderator :',
          value: `\`\`\`yaml\n${interaction.user.tag}\n\`\`\``,
        },
        {
          name: 'Reason :',
          value: `\`\`\`yaml\n${reason}\n\`\`\``,
        },
      )
      .setTimestamp()

    user.send({
      embeds: [userEmbed]
    }).catch(console.log);

    let warnEmbed = new MessageEmbed()
      .setTitle('**Warning**')
      .setColor('#ff0000')
      .setDescription(`**${user.username} have been warned!**`)
      .setThumbnail(user.displayAvatarURL())
      .addFields(
        {
          name: 'Moderator',
          value: `\`\`\`yaml\n${interaction.user.tag}\n\`\`\``,
        },
        {
          name: 'Reason :',
          value: `\`\`\`yaml\n${reason}\n\`\`\``,
        },
      )
      .setTimestamp()

    interaction.followUp({ embeds: [warnEmbed] })  
      

  }
}