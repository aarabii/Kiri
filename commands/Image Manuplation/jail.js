const { MessageAttachment } = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
  name: 'jail',
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    const avatar = Target.displayAvatarURL({ format: "png" })

    const image = await Canvas.jail(avatar);

    const attachment = new MessageAttachment(image, 'jail.gif')

    message.reply({
      files: [
        attachment
      ]
    })
  }
}