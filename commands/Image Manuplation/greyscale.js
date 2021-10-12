const { MessageAttachment } = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
  name: 'greyscale',
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    const avatar = Target.displayAvatarURL({ format: "png" })

    const image = await Canvas.greyscale(avatar);

    const attachment = new MessageAttachment(image, 'greyscale.gif')

    message.reply({
      files: [
        attachment
      ]
    })
  }
}