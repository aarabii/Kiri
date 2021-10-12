const { MessageAttachment } = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
  name: 'blur',
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    const avatar = Target.displayAvatarURL({ format: "png" })

    const image = await Canvas.blur(avatar);

    const attachment = new MessageAttachment(image, 'blur.gif')

    message.reply({
      files: [
        attachment
      ]
    })
  }
}