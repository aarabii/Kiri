const { MessageAttachment } = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
  name: 'wanted',
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    const avatar = Target.displayAvatarURL({ format: "png" })

    const image = await Canvas.wanted(avatar);

    const attachment = new MessageAttachment(image, 'wanted.gif')

    message.reply({
      files: [
        attachment
      ]
    })
  }
}