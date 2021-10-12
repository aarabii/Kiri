const { MessageAttachment } = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
  name: 'trigger',
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    const avatar = Target.displayAvatarURL({ format: "png" })

    const image = await Canvas.trigger(avatar);

    const attachment = new MessageAttachment(image, 'trigger.gif')

    message.reply({
      files: [
        attachment
      ]
    })
  }
}