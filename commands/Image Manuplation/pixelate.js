const { MessageAttachment } = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
  name: 'pixelate',
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    const avatar = Target.displayAvatarURL({ format: "png" })

    const image = await Canvas.pixelate(avatar);

    const attachment = new MessageAttachment(image, 'pixelate.gif')

    message.reply({
      files: [
        attachment
      ]
    })
  }
}