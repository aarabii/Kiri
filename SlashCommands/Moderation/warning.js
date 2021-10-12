const warnModel = require('../../models/warnModel');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
  name: 'warnings',
  description: 'display a members all warnings',
  options: [
    {
      name: 'target',
      description: 'User you want to view warnings on!',
      type: 'USER',
      required: true,
    },
  ],
  run: async(client, interaction) => {

    const user = interaction.options.getUser('target');

    const userWarnings = await warnModel.find({
      userId: user.id,
      guildId: interaction.guildId,
    })

    if(!userWarnings?.length)
      return interaction.followUp({
        embeds: [
          new MessageEmbed()
            .setTitle('**Warnings...**')
            .setAuthor(interaction.user.tag, interaction.user.displayAvatarURL())
            .setColor('#ffffff')
            .setDescription(`**${user.username}** has no warnings in this server`)
            .setThumbnail(user.displayAvatarURL())
            .setTimestamp()
        ]
      });

    const embedDescription = userWarnings.map((warn) => {
      const moderator = interaction.guild.members.cache.get(
        warn.moderatorId
      )

      return [
        `WarnId: ${warn._id}`,
        `Moderator: ${moderator || "Moderator has left!"}`,
        `Reason: ${warn.reason}`,
        `Date: ${moment(warn.timestamp).format("MMMM Do YYYY")}`
      ].join("\n");
    }).join("\n\n");

    const embed = new MessageEmbed()
      .setTitle('**Warnings...**')
      .setColor('#ff0000')
      .setAuthor(`${user.tag}'s Warning.`, user.displayAvatarURL())
      .setDescription(embedDescription)

    interaction.followUp({ embeds: [embed] })  
  }
}