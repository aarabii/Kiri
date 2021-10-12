const Discord = require('discord.js');

module.exports = {
  name: 'ban',
  description: 'Ban a member',
  userPermissions: ['BAN_MEMBERS'],
  options: [
    {
      name: 'target',
      description: 'target to ban',
      type: 'USER',
      required: true
    },
    {
      name: 'reason',
      description: 'reason for this ban',
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
      `You have been banned from **${interaction.guild.name}**, reason: **${reason}**`
    ).catch(console.log);

    target.ban({ reason });

      let embed1 = new Discord.MessageEmbed()
        .setTitle('**Ban**')
        .setThumbnail(target.displayAvatarURL())
        .setDescription(`**${target.user.tag}** has been sucessfully banned from **${interaction.guild.name}**`)
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