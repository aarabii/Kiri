const { MessageAttachment } = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
  name: 'facepalm',
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    const avatar = Target.displayAvatarURL({ format: "png" })

    const image = await Canvas.facepalm(avatar);

    const attachment = new MessageAttachment(image, 'facepalm.gif')

    message.reply({
      files: [
        attachment
      ]
    })
  }
}