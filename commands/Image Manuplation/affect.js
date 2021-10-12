const { MessageAttachment } = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
  name: 'affect',
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    const avatar = Target.displayAvatarURL({ format: "png" })

    const image = await Canvas.affect(avatar);

    const attachment = new MessageAttachment(image, 'affect.gif')

    message.reply({
      files: [
        attachment
      ]
    })
  }
}