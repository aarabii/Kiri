const { MessageAttachment } = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
  name: 'delete',
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    const avatar = Target.displayAvatarURL({ format: "png" })

    const image = await Canvas.delete(avatar);

    const attachment = new MessageAttachment(image, 'delete.gif')

    message.reply({
      files: [
        attachment
      ]
    })
  }
}