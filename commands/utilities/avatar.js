const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'avatar',
  aliases: ['av'],
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    const pngAv = Target.displayAvatarURL({ format: 'png', size: 1024 });
    const jpgAv = Target.displayAvatarURL({ format: 'jpg', size: 1024 });
    const gifAv = Target.displayAvatarURL({ format: 'gif', size: 1024, dynamic: true });
    const webpAv = Target.displayAvatarURL({ format: 'webp', size: 1024 });

    const avatarEmbed = new MessageEmbed()
      .setTitle('**Avatar**')
      .setDescription(`**${Target.tag}**'s Avatar \n**Links :** [PNG](${pngAv}) | [JPG](${jpgAv}) | [GIF](${gifAv}) | [WEBP](${webpAv})`)
      .setImage(Target.displayAvatarURL({ size: 1024, dynamic: true }))
      .setTimestamp()

    message.reply({ embeds: [avatarEmbed] })  
  }
}