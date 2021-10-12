const { MessageEmbed, MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'screenshot',
  aliases: ['ss'],
  run: async(client, message, args) => {

    const urls = args[0];

    if(!urls)
      return message.reply({
        embeds: [
          new MessageEmbed()
            .setTitle('Screen-Shot')
            .setColor('#ff0000')
            .setDescription('Provide a link please\n**Example :**```.ss https://www.youtube.com/```')
            .setFooter('this message will disappear in 10 seconds')
        ]
      }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })

    if(urls.length < 8)
      return message.reply({
        embeds: [
          new MessageEmbed()
            .setTitle('Screen-Shot')
            .setDescription('Link is too short!')
            .setColor('#ff0000')
            .setFooter('This message will disappear in 10 seconds')
        ]
      }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })

    const site = /^(https?:\/\/)/i.test(urls) ? urls : `http://${urls}`;

    try {
      const { body } = await fetch(`https://image.thum.io/get/width/1920/crop/675/noanimate/${site}`);

      const attachment = new MessageAttachment(body, 'screenshot.png')

      message.reply({ files: [attachment] })
    } catch (err) {
      if(err.status === 404)
        return message.reply({
          embeds: [
            new MessageEmbed()
              .setTitle('Screen-Shot')
              .setColor('#ff0000')
              .setDescription('could not find any result Invalid URL')
              .setFooter('this message will disappear in 10 seconds')
          ]
        }).then(m => {
          setTimeout(() => {
            m.delete()
          }, 10000)
        })

      message.reply({
        embeds: [
          new MessageEmbed()
            .setTitle('Screen-Shot')
            .setColor('#ff0000')
            .setDescription(`An err occured, please try again! \`\`\`${err.message}\`\`\` `)
            .setFooter('THis message will disappear in 10 seconds')
        ]
      }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })
    }
  }
}