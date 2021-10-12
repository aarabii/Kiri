const { MessageAttachment } = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
  name: 'trash',
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    const avatar = Target.displayAvatarURL({ format: "png" })

    const image = await Canvas.trash(avatar);

    const attachment = new MessageAttachment(image, 'trash.gif')

    message.reply({
      files: [
        attachment
      ]
    })
  }
}