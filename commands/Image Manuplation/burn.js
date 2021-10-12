const { MessageAttachment } = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
  name: 'burn',
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    const avatar = Target.displayAvatarURL({ format: "png" })

    const image = await Canvas.burn(avatar, 3);

    const attachment = new MessageAttachment(image, 'burn.gif')

    message.reply({
      files: [
        attachment
      ]
    })
  }
}