const { MessageAttachment } = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
  name: 'shit',
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    const avatar = Target.displayAvatarURL({ format: "png" })

    const image = await Canvas.shit(avatar);

    const attachment = new MessageAttachment(image, 'shit.gif')

    message.reply({
      files: [
        attachment
      ]
    })
  }
}