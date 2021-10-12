const { MessageAttachment } = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
  name: 'sharpen',
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    const avatar = Target.displayAvatarURL({ format: "png" })

    const image = await Canvas.sharpen(avatar);

    const attachment = new MessageAttachment(image, 'sharpen.gif')

    message.reply({
      files: [
        attachment
      ]
    })
  }
}