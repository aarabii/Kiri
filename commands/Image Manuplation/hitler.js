const { MessageAttachment } = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
  name: 'hitler',
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    const avatar = Target.displayAvatarURL({ format: "png" })

    const image = await Canvas.hitler(avatar);

    const attachment = new MessageAttachment(image, 'hitler.gif')

    message.reply({
      files: [
        attachment
      ]
    })
  }
}