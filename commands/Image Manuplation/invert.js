const { MessageAttachment } = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
  name: 'invert',
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    const avatar = Target.displayAvatarURL({ format: "png" })

    const image = await Canvas.invert(avatar);

    const attachment = new MessageAttachment(image, 'invert.gif')

    message.reply({
      files: [
        attachment
      ]
    })
  }
}