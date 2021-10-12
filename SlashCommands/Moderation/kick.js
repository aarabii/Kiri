const Discord = require('discord.js');

module.exports = {
  name: 'kick',
  description: 'Kick a member',
  userPermissions: ['KICK_MEMBERS'],
  options: [
    {
      name: 'target',
      description: 'target to kick',
      type: 'USER',
      required: true
    },
    {
      name: 'reason',
      description: 'reason for this kick',
      type: 'STRING',
      required: false
    }
  ],
  run: async(client, interaction, args) => {

    const target = interaction.options.getMember('target');
    const reason = interaction.options.getString('reason') || "Unspecified : (";

    if(target.roles.highest.position >= interaction.member.roles.highest.position)
      return interaction.followUp({
        content:
           "You can't take action on this user as their role is heigher than yours!",
        ephemeral: true   
      })


    await target.send(
      `You have been kicked from **${interaction.guild.name}**, reason: **${reason}**`
    ).catch(console.log);

    target.kick(reason);

      let embed1 = new Discord.MessageEmbed()
        .setTitle('**Kick**')
        .setThumbnail(target.displayAvatarURL())
        .setDescription(`**${target.user.tag}** has been sucessfully kicked from **${interaction.guild.name}**`)
        .addFields(
          {
            name: 'Reason :',
            value: `\`\`\`yaml\n${reason}\n\`\`\``,
          }
        )
        .setColor('#ff0000')

    interaction.followUp({ embeds: [embed1] })    

  }
}