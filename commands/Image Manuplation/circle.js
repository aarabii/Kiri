const { MessageAttachment } = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
  name: 'circle',
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    const avatar = Target.displayAvatarURL({ format: "png" })

    const image = await Canvas.circle(avatar);

    const attachment = new MessageAttachment(image, 'circle.gif')

    message.reply({
      files: [
        attachment
      ]
    })
  }
}