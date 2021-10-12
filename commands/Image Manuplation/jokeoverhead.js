const { MessageAttachment } = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
  name: 'jokeoverhead',
  aliases: ['joh'],
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    const avatar = Target.displayAvatarURL({ format: "png" })

    const image = await Canvas.jokeOverHead(avatar);

    const attachment = new MessageAttachment(image, 'jokeoverhead.gif')

    message.reply({
      files: [
        attachment
      ]
    })
  }
}