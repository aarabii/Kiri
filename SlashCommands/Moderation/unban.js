const Discord = require('discord.js');

module.exports = {
  name: 'unban',
  description: 'Unban a member',
  userPermissions: ["BAN_MEMBERS"],
  options: [
    {
      name: 'userid',
      description: "UserId that you want to unban",
      type: "STRING",
      required: true,
    }
  ],
  run: async(client, interaction) => {

    const userId = interaction.options.getString("userid");

    interaction.guild.members.unban(userId).then((user) => {

      let unbanEmbed = Discord.MessageEmbed()
        .setTitle('**Un-Ban**')
        .setDescription(`**${user.tag}** in unbanned from this server!`)
        .setThumbnail(user.displayAvatarURL())
        .setColor('#ffffff')

      interaction.followUp({ embeds: [unbanEmbed] })  
    }).catch(() => {
      interaction.followUp({
        content: "Please specify a valid banned member's Id."
      })
    })


  }
}