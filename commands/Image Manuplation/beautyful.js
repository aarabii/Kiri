const { MessageAttachment } = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
  name: 'beautiful',
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    const avatar = Target.displayAvatarURL({ format: "png" })

    const image = await Canvas.beautiful(avatar);

    const attachment = new MessageAttachment(image, 'beautiful.gif')

    message.reply({
      files: [
        attachment
      ]
    })
  }
}