const { MessageAttachment } = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
  name: 'sepia',
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    const avatar = Target.displayAvatarURL({ format: "png" })

    const image = await Canvas.sepia(avatar);

    const attachment = new MessageAttachment(image, 'sepia.gif')

    message.reply({
      files: [
        attachment
      ]
    })
  }
}