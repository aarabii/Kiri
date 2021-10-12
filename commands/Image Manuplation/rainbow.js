const { MessageAttachment } = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
  name: 'rainbow',
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    const avatar = Target.displayAvatarURL({ format: "png" })

    const image = await Canvas.rainbow(avatar);

    const attachment = new MessageAttachment(image, 'rainbow.gif')

    message.reply({
      files: [
        attachment
      ]
    })
  }
}